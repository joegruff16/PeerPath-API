// Import Thought Model
const Thought = require("../models");

// Since all of this logic needs to be exported doing it this way
module.exports = {
  // We need all the logic to establish the following routes:
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find({}).lean();
      res.status(200).json(thoughts);
    } catch (err) {
      res.status(500).send({ message: "Error couldnt populate Thoughts" });
    }
  },
};

// Need a GET route to get a single thought by _id

// POST route to creat e a new thought. Tip: don't forget to push the created thought's `_id` to the associated user's `thoughts` array field

// `PUT` to update a thought by its `_id`

// `DELETE` to remove a thought by its `_id`

// May create a new route file if reactions makes it look too big
// `/api/thoughts/:thoughtId/reactions`

// `POST` to create a reaction stored in a single thought's `reactions` array field

// `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

// I was wondering if Controllers were necessary for this challenge
// This is what the Xpert Learning Assistant mentioned:
// Controllers in an Express.js application help to separate the concerns and responsibilities of different parts of your application. They are responsible for handling the application logic, processing requests, interacting with the database through models, and sending back responses.

// By using controllers, you can keep your route definitions clean and focused on routing, while moving the actual implementation logic to dedicated controller functions. This separation of concerns makes your codebase more organized, easier to maintain, and allows for better scalability. It also makes it easier for other developers to understand and work with your code in the future.

// Therefore, in the context of the MongoDB challenge in module 18, it is recommended to use controllers to handle the logic for managing user thoughts, reactions, friend lists, and any other operations related to the social network functionality.

// Basically controllers should have all the implementation logic for specified routes so that the routes files can be much more clean

// What is the logic behind each route?
