package com.raha.pravin.userservice.user

import cats.effect.{ ConcurrentEffect, Sync }
import io.circe.generic.auto._
import io.circe.parser._
import io.circe.syntax._
import io.circe.{ Decoder, Encoder }
import org.http4s.circe.{ jsonEncoderOf, jsonOf }
import org.http4s.dsl.Http4sDsl
import org.http4s.server.Router
import org.http4s.util.CaseInsensitiveString
import org.http4s.{ EntityDecoder, EntityEncoder, HttpRoutes }
import pdi.jwt.{ JwtCirce, JwtOptions }

import scala.util.{ Failure, Success }

case class User(id: Option[String], username: Option[String], name: Option[String], email: Option[String])

class UserRoutes[F[_]: Sync] extends Http4sDsl[F] {

  implicit def jsonDecoder[A: Decoder]: EntityDecoder[F, A] = jsonOf[F, A]
  implicit def jsonEncoder[A: Encoder]: EntityEncoder[F, A] = jsonEncoderOf[F, A]

  private val prefixPath = "/user"

  private val userRoutes = HttpRoutes.of[F] {
    case req @ GET -> Root             =>
      req.headers
        .get(CaseInsensitiveString("X-Userinfo"))
        .map(_.value)
        .map(u => new String(java.util.Base64.getDecoder.decode(u)))
        .map(user => decode[User](user))
        .flatMap {
          case Right(user) => Option(user)
          case Left(_)     => None
        }
        .map(user => Ok(user.asJson))
        .getOrElse(NotFound("User info not found"))

    case req @ GET -> Root / "headers" => Ok(req.headers.toList.map(header => s"${header.name}:${header.value}").asJson)

    case req @ GET -> Root / "accesstoken" =>
      req.headers
        .get(CaseInsensitiveString("X-Access-Token"))
        .map(_.value)
        .map(token => JwtCirce.decodeJsonAll(token, JwtOptions(signature = false)))
        .flatMap {
          case Success(token)     => Option(token)
          case Failure(exception) =>
            println(exception.getLocalizedMessage)
            None
        }
        .map(token => Ok(token))
        .getOrElse(InternalServerError("Something went wrong"))

  }

  val routes: HttpRoutes[F] = Router(prefixPath -> userRoutes)

}

object UserRoutes {
  def apply[F[_]: Sync](implicit F: ConcurrentEffect[F]): UserRoutes[F] = new UserRoutes
}
