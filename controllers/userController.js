// Import User model
const { User } = require("../models");

// Since all of this logic needs to be exported doing it this way
module.exports = {
  // We need routes`/api/users:

  // to GET all users
  async getUsers(req, res) {
    try {
      const users = await User.find({}).lean();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).send({ message: "No user populated" });
    }
  },
  // Get a single user by _id
  async getUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });
      if (!user) {
        return res.status(404).send({ message: "No user found with this ID" });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Post route to add a new user
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Put route to update a user by their _id

  // Delete route to remove a user by _id

  // We could possibly make a new route all together for this I will see how clean it looks
  // `/api/users/:userId/friends/:friendId`

  // POST route to add a new friend to the user's friend list

  // Delete route to remove a friend from the friend list
};
