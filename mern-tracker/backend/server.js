const express = require('express');
const cors = require('cors');
//Allows us to connect to the MongoDB database
const mongoose = require('mongoose');

// This configures so we can have our envirement variables in the .env file
require('dotenv').config();

//This is how we will create our express server
const app = express();
const port = process.env.PORT || 5000;

//Our middleware, cors middleware
app.use(cors());
// //This will allow us to parse JSON because our server is going to be sending and recieving JSON
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//Start the server. It listens from a certain port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
//Then write 'nodemon server' in the terminal to start the server.

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://ststeeve067:steevert12@cluster0.g7hjdcm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);