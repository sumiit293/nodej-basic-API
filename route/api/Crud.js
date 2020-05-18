const express = require("express");
const User = require('./../../model/UserModel');
const router = express.Router();

// GET
//@desc Getting all the users in the database
router.get("/users", async (req, res) => {

    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.log(error);
    }

})
// GET
//@desc Getting single  users in the database based on user id
router.get("/user/:id", async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        console.log(error);
    }
})

//POST
//@desc adding new user to database
router.post('/user', async (req, res) => {

    try {

        const newUser = new User();
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        const user = await newUser.save();
        res.json(user);
    } catch (error) {

        console.log(error.response);
    }
})

//PUT
//@desc updating the existing user
router.put("/user/:id", async (req, res) => {
    try {

        const user = await User.findById(req.params.id);
        console.log(user);
        user.name = req.body.name;
        user.email = req.body.email;
        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (error) {
        console.log(error);
    }
})


//DELETE 
//@desc deleting the  user from databse
router.delete('/user/:id', async (req, res) => {

    try {

        const removedUser = await User.findByIdAndRemove(req.params.id);
        res.json(removedUser);
    } catch (error) {
        console.log(error);
    }
})



module.exports = router