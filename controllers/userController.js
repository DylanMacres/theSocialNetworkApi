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
    }



}