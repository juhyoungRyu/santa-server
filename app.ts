import Fastify from "fastify";
import { MongoClient, ServerApiVersion } from "mongodb";

import { Constant } from "./constant/Constant";

// const fastify = Fastify({
//   logger: true,
// });

// // Declare a route
// fastify.get("/", function (request, reply) {
//   reply.send({ hello: "world" });
// });

// // Run the server!
// fastify.listen({ port: 3000 }, function (err, address) {
//   if (err) {
//     fastify.log.error(err);
//     process.exit(1);
//   }

//   console.log(`Server is now listening on ${address}`);
// });

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(Constant.BASE_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
