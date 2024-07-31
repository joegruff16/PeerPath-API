// Import Thought Model
const { Thought, User } = require("../models");

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
  // Need a GET route to get a single thought by _id
  async getSingleThought(res, req) {
    try {
      const thoughtData = await Thought.findOne({ _id: req.params.thoughtId });
      // Adding if to determine if there's no thought to return a 404 otherwise return that thought
      if (!thoughtData) {
        return res.status(404).json({ message: "No thought with this ID" });
      }

      res.status(200).json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Post route to new thought add Tip: don't forget to push the created thought's `_id` to the associated user's `thoughts` array field
  async createThought(req, res) {
    try {
      // Create a new thought
      const newThought = await Thought.create(req.body);
      // This is where we would find the user by ID to the user's thought array
      await User.findByIdAndUpdate(
        req.body.userId,
        { $push: { thoughts: newThought._id } },
        { new: true, useFindandModify: false }
      );
      // Now that we have the ID we can respond with the new thought
      res.json(newThought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // `PUT` to update a thought by its `_id`
  async updateThought(req, res) {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { new: true, runValidators: true }
      );
      if (!updatedThought) {
        return res.status(404).json({ message: "No thought with this ID" });
      }
      res.status(200).json(updatedThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // `DELETE` to remove a thought by its `_id`
  async deleteThought(req, res) {
    try {
      const deletedThought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });
      if (!deletedThought) {
        return res
          .status(404)
          .json({ message: "There's no thought with this ID" });
      }
      res.status(200).json({ message: "Thought is deleted" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
