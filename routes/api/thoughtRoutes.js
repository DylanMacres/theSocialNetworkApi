const router = require('express').Router();

const {
    getSingleThought,
    getAllThoughts,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,



} = require('../../controllers/thoughtController');


 // /api/thoughts
router 
    .route('/')
    .get(getAllThoughts)
    .post(createThought)
  
    // /api/thoughts/:thoughtId
router 
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

    // /api/thoughts/:thoughtId/reactions
router 
    .route('/:thoughtId/reactions')
    .post(createReaction)


    // /api/thoughts/:thoughtId/:reactionId
router
    .route('/:thoughtId/:reactionId')
    .delete(deleteReaction)


    module.exports = router;