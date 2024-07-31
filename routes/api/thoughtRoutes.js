// Packages used Express Router
const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
} = require("../../controllers/thoughtController");
// `/api/thoughts`

// Get route to get all thoughts and post to create a thought
router.route("/").get(getThoughts).post(createThought);
// Need a GET route to get a single thought by _id
router.route("/:thoughtId").get(getSingleThought).put(updateThought);
// POST route to creat e a new thought. Tip: don't forget to push the created thought's `_id` to the associated user's `thoughts` array field
// `PUT` to update a thought by its `_id`

// `DELETE` to remove a thought by its `_id`

// May create a new route file if reactions makes it look too big
// `/api/thoughts/:thoughtId/reactions`

// `POST` to create a reaction stored in a single thought's `reactions` array field

// `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

// Export router to make this route available
module.exports = router;
