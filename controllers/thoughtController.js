const { Thought, User } = require("../models") ;


module.exports = {
// getting a single thought
getSingleThought(req, res) {
    Thought.findOne({_id: req.params.thoughtId })
    .then((thought) => 
    !thought
            ? res.status(404).json({ message: "Couldn't find that thought"})
            :res.json(thought)
    )
    .catch((err) => res.status(500).json(err))
},

//getting all thoughts
getAllThoughts(req, res) {
    Thought.find()
    .then(async(thougths) => {
        return res.json(thoughts);
    })
    .catch((err) => res.status(500).json(err))
},

//creating a thought 
createThought(req, res) {
    Thought.create(req.body)
    .then((thought) => {
        return User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: _id } },
            { new: true }
        );
        res.json(thought);
    })
    .catch((err) => res.status(500).json(err))
},
//Update a thougth 
updateThought(req, res) {
    Thought.
}

}