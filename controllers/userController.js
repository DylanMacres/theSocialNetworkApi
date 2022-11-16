const { User, Thought } = require("../models");



module.exports = {
    //getting single user
    getOneUser(req,res) {
        User.findOne({_id: req.params.userId })
        .populate('thoughts')
        .populate('friends')
        .then((user) => 
        !user 
        ? res.status(404).json({ message: "Couldn't find that user!"})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    //getting all users 
    getAllUsers(req,res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err))
    },

    //creating the user
    createUser(req,res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err))
    },

    //updating user
    updateUser(req, res) {
        User.findByIdAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) => 
        !user 
        ? res.status(404).json({ message: "Couldn't find that user, sorry!:/"})
        : res.json(user)

        )
        .catch((err) => res.status(500).json(err));
    },





}