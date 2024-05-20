//The route that is being created
const router = require('express').Router();
let User = require('../models/user.model');

//Hasndles incoming HTTP get request
//The first route
router.route('/').get((req, res) => {
    //Mongoose nethod that gets a list of all the users from the mongodb atlas
    User.find()
    //Once it finds it gets all the users, and retrun those users we got from the database
    .then(users => res.json(users))
    //If it catches an error we'll return a status 400
    .catch(err => res.status(400).json('Error: ' + err));
});

//Hasndles incoming HTTP post request
//The second route
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});

    //Then new user will be saved into the database
    newUser.save()
    //Once saved in database, return this message
    //If not it will send an error
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;