package com.raha.pravin

import cats.effect._
import cats.effect.Console.io._
import com.raha.pravin.hello._
import higherkindness.mu.rpc._

object Client extends IOApp {

  val channelFor: ChannelFor = ChannelForAddress("localhost", 12345)

  val serviceClient: Resource[IO, Greeter[IO]] = Greeter.client[IO](channelFor)

  def run(args: List[String]): IO[ExitCode] =
    for {
      _          <- putStr("Please enter your name: ")
      name       <- readLn
      response   <- serviceClient.use(c => c.SayHello(HelloRequest(name)))
      serverMood = if (response.happy) "happy" else "unhappy"
      _          <- putStrLn(s"The $serverMood server says '${response.greeting}'")
    } yield ExitCode.Success

}
