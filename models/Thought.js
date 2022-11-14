const { Schema, Types, model } = require('mongoose');



const reactionSchema = new Schema(
    {
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new
        }
    }
)