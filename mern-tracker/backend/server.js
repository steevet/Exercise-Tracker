const express = require('express');
const cors = require('cors');
//Allows us to connect to the MongoDB database
const mongoose = require('mongoose');

// This configures so we can have our envirement variables in the .env file
require('dotenv').config();

//This is how we will create our express server
const app = express();
const port = process.env.PORT || 4000;

//Our middleware, cors middleware
app.use(cors());
// //This will allow us to parse JSON because our server is going to be sending and recieving JSON
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//Calling the files
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
//Using the files
app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

//Start the server. It listens from a certain port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

//Then write 'nodemon server' in the terminal to start the server.