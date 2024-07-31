// Using Express Router to establish routes
const router = require("express").Router();

const {
  getOneUser,
  getUsers,
  createUser,
} = require("../../controllers/userController");

// Used this router method to get all users and to create a user with a post route
router.route("/").get(getUsers).post(createUser);

// Get a single user by _id
router.route("/:userId").get(getOneUser);
// Post route to add a new user

// Put route to update a user by their _id

// Delete route to remove a user by _id

// We could possibly make a new route all together for this I will see how clean it looks
// `/api/users/:userId/friends/:friendId`

// POST route to add a new friend to the user's friend list

// Delete route to remove a friend from the friend list

// Export router to make this route available
module.exports = router;
