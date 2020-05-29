val Http4sVersion     = "0.21.3"
val CirceVersion      = "0.13.0"
val Specs2Version     = "4.9.3"
val LogbackVersion    = "1.2.3"
val JwtVersion        = "3.1.0"
val PureconfigVersion = "0.12.3"

lazy val root = (project in file("."))
  .settings(
    organization := "com.raha.pravin",
    name := "userservice",
    version := "0.0.1-SNAPSHOT",
    scalaVersion := "2.13.1",
    libraryDependencies ++= Seq(
      "org.http4s"            %% "http4s-blaze-server" % Http4sVersion,
      "org.http4s"            %% "http4s-blaze-client" % Http4sVersion,
      "org.http4s"            %% "http4s-circe"        % Http4sVersion,
      "org.http4s"            %% "http4s-dsl"          % Http4sVersion,
      "io.circe"              %% "circe-generic"       % CirceVersion,
      "io.circe"              %% "circe-parser"        % CirceVersion,
      "org.specs2"            %% "specs2-core"         % Specs2Version % "test",
      "ch.qos.logback"         % "logback-classic"     % LogbackVersion,
      "com.pauldijou"         %% "jwt-circe"           % JwtVersion,
      "com.github.pureconfig" %% "pureconfig"          % PureconfigVersion
    ),
    addCompilerPlugin("org.typelevel" %% "kind-projector"     % "0.10.3"),
    addCompilerPlugin("com.olegpy"    %% "better-monadic-for" % "0.3.1")
  )
  .settings(
    dockerEnvVars := Map("COLOR_NAME" -> ""),
    dockerExposedPorts := Seq(8080)
  )
  .enablePlugins(JavaAppPackaging)

scalacOptions ++= Seq(
  "-deprecation",
  "-encoding",
  "UTF-8",
  "-language:higherKinds",
  "-language:postfixOps",
  "-feature",
  "-Xfatal-warnings"
)
