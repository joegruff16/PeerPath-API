const { Schema, Types } = require("mongoose");

// Schema consists of thoughtText, createdAt, username, reactions
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // Use getter method to format the timestamp on query? Not sure how
    toJSON: {
      getters: true,
    },
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});

// The Reaction schema isn't it's own model because it's a subdocument within this Thought model
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    Date,
    default: Date.now,
    // Use getter method to format the timestamp on query? Not sure how
    toJSON: {
      getters: true,
    },
  },
});

// This will make this model available outside of this file
module.exports = { thoughtSchema, reactionSchema };
