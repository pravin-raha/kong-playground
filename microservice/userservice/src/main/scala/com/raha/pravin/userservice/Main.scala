package com.raha.pravin.userservice

import cats.effect.{ ConcurrentEffect, ContextShift, ExitCode, IO, IOApp, Resource, Timer }
import cats.implicits._
import org.http4s.server.Server
import org.http4s.server.blaze.BlazeServerBuilder

object Main extends IOApp {
  override def run(args: List[String]): IO[ExitCode] =
    HttpServer.stream[IO].use(_ => IO.never).as(ExitCode.Success)
}

object HttpServer {

  def stream[F[_]: ConcurrentEffect: ContextShift: Timer]: Resource[F, Server[F]] =
    for {
      server <- BlazeServerBuilder[F]
                  .bindHttp(8080, "0.0.0.0")
                  .withHttpApp(new Module[F].httpApp)
                  .resource
    } yield server

}
