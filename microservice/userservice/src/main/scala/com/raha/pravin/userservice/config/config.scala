package com.raha.pravin.userservice.config

object config {

  case class ColorConfig(name: String)

  case class ServerConfig(host: String, port: Int)

  case class AppConfig(server: ServerConfig, color: ColorConfig)

}
