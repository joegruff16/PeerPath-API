// Using Express Router to establish routes
const router = require("express").Router();

const {
  getOneUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

// Used this router method to get all users and to create a user with a post route
router.route("/").get(getUsers).post(createUser);

// Used router to Get a single user by _id, update a user via put route by id and delete a user by id
router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

// Export router to make this route available
module.exports = router;
