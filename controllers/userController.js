// Import User model
const { User } = require("../models");

// Since all of this logic needs to be exported doing it this way
module.exports = {
  // We need routes`/api/users:

  // to GET all users
  async getUsers(req, res) {
    try {
      const userData = await User.find();
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).send({ message: "No user populated" });
    }
  },
  // Get a single user by _id
  async getOneUser(req, res) {
    try {
      const userData = await User.findOne({ _id: req.params.userId });
      if (!userData) {
        return res.status(404).send({ message: "No user found with this ID" });
      }
      res.status(200).json(userData);
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
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { new: true, runValidators: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "No user with this ID" });
      }
      res.status(200).json({ message: "User updated" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete route to remove a user by _id
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findOneAndDelete({
        _id: req.params.userId,
      });
      if (!deletedUser) {
        return res.status(404).json({ message: "No user found with this ID" });
      }
      res.status(200).json({ message: "User deleted" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
