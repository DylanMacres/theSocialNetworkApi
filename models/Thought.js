const { max } = require('moment/moment');
const { Schema, Types, model } = require('mongoose');


//thought schema
const thoughtSchema = new Schema(
    {

    }
  
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,

    }
)