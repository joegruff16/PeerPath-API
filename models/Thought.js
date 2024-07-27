const { Schema, model, Types } = require("mongoose");

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
    type: Date,
    default: Date.now,
    // Use getter method to format the timestamp on query
    get: (timestamp) => new Date(timestamp).toLocaleString(),
    toJSON: {
      getters: true,
    },
  },
});
console.log(reactionSchema);

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // Use getter method to format the timestamp on query
    get: (timestamp) => new Date(timestamp).toLocaleString(),
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
console.log(reactionSchema);

// Schema consists of thoughtText, createdAt, username, reactions

// Virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Initialize my Thought model - this might need to go above newUser
const Thought = model("thought", thoughtSchema);
// This will make this model available outside of this file
module.exports = Thought;
