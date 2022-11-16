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

router 
    .route('/')
    .get(getAllThoughts)
    .post(createThought)
  

router 
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)


router 
    .route('/:thoughtId/reactions')
    .post(createReaction)

router
    .route('/:thoughtId/:reactionId')
    .delete(deleteReaction)