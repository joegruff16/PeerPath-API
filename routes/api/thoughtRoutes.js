// Packages used Express Router
const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController");
// `/api/thoughts`

// Get route to get all thoughts and post to create a thought
router.route("/").get(getThoughts).post(createThought);
// Leveraged router.route to get a single thought by it's ID, to updateThought by it's ID and to delete thought by ID
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// Export router to make this route available
module.exports = router;
