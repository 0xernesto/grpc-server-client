/*
 *
 * Copyright 2015 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

require("dotenv").config();
var messages = require("./helloworld_pb");
var services = require("./helloworld_grpc_pb");

var grpc = require("@grpc/grpc-js");

/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
	console.log("\nClient requested greeting.");
	console.log("\n [x] Responded with: Hello.");
	var reply = new messages.HelloReply();
	reply.setMessage("[x] Server: Hello.\n" + call.request.getName(), "\n");
	callback(null, reply);
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
	var server = new grpc.Server();
	server.addService(services.GreeterService, { sayHello: sayHello });
	server.bindAsync(
		`0.0.0.0:${process.env.PORT}`,
		grpc.ServerCredentials.createInsecure(),
		() => {
			server.start();
			console.log("\nServer Listenintg on port: ", process.env.PORT);
		}
	);
}

main();