package com.raha.pravin.userservice.user

import cats.effect.{ ConcurrentEffect, Sync }
import com.raha.pravin.userservice.config.config.ColorConfig
import org.http4s.HttpRoutes
import org.http4s.dsl.Http4sDsl
import org.http4s.server.Router

class ColorRoute[F[_]: Sync](colorConf: ColorConfig) extends Http4sDsl[F] {

  private val prefixPath = "/"

  private val colorRoutes = HttpRoutes.of[F] {
    case GET -> Root / "color" => Ok(colorConf.name)

  }

  val routes: HttpRoutes[F] = Router(prefixPath -> colorRoutes)

}

object ColorRoute {
  def apply[F[_]: Sync](colorConfig: ColorConfig)(implicit F: ConcurrentEffect[F]): ColorRoute[F] =
    new ColorRoute(colorConfig)
}
