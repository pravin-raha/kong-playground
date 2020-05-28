package com.raha.pravin.userservice

import cats.effect.{ ConcurrentEffect, ContextShift, Sync, Timer }
import com.raha.pravin.userservice.user.UserRoutes
import org.http4s.dsl.Http4sDsl
import org.http4s.server.middleware._
import org.http4s.syntax.all._
import org.http4s.{ HttpApp, HttpRoutes }

import scala.concurrent.duration._

class Module[F[_]: Sync: ConcurrentEffect: Timer: ContextShift] extends Http4sDsl[F] {

  private val userRoute: HttpRoutes[F] = UserRoutes[F].routes
  private val routes                   = userRoute

  private val middleware: HttpRoutes[F] => HttpRoutes[F] = {
    { http: HttpRoutes[F] =>
      AutoSlash(http)
    } andThen { http: HttpRoutes[F] =>
      CORS(http, CORS.DefaultCORSConfig)
    } andThen { http: HttpRoutes[F] =>
      Timeout(60.seconds)(http)
    }
  }
  private val loggers: HttpApp[F] => HttpApp[F] = {
    { http: HttpApp[F] =>
      RequestLogger.httpApp(logHeaders = true, logBody = true)(http)
    } andThen { http: HttpApp[F] =>
      ResponseLogger.httpApp(logHeaders = true, logBody = true)(http)
    }
  }

  val httpApp: HttpApp[F] = loggers(middleware(routes).orNotFound)

}
