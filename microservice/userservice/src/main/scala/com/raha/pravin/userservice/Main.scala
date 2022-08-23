package com.raha.pravin.userservice

import cats.effect.{ConcurrentEffect, ContextShift, ExitCode, IO, IOApp, Resource, Timer}
import cats.implicits._
import com.raha.pravin.userservice.config.config.AppConfig
import org.http4s.server.Server
import org.http4s.server.blaze.BlazeServerBuilder
import pureconfig._
import pureconfig.generic.auto._

object Main extends IOApp {
  override def run(args: List[String]): IO[ExitCode] =
    HttpServer.stream[IO].use(_ => IO.never).as(ExitCode.Success)
}

object HttpServer {

  def stream[F[_]: ConcurrentEffect: ContextShift: Timer]: Resource[F, Server[F]] =
    for {
      applicationConf <- Resource.liftF(ConfigSource.defaultApplication.loadOrThrow[AppConfig].pure[F])
      server          <- BlazeServerBuilder[F]
                           .bindHttp(applicationConf.server.port, applicationConf.server.host)
                           .withHttpApp(new Module[F](applicationConf).httpApp)
                           .resource
    } yield server

}
