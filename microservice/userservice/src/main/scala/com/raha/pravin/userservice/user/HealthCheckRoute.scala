package com.raha.pravin.userservice.user

import cats.effect.{ ConcurrentEffect, Sync }
import org.http4s.HttpRoutes
import org.http4s.dsl.Http4sDsl

class HealthCheckRoute[F[_]: Sync] extends Http4sDsl[F] {
  val routes: HttpRoutes[F] = HttpRoutes.of[F] {
    case GET -> Root / "healthcheck" => Ok()
  }
}

object HealthCheckRoute {
  def apply[F[_]: Sync](implicit F: ConcurrentEffect[F]): HealthCheckRoute[F] = new HealthCheckRoute
}
