const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      // must match a valid email address with Mongoose matching validation
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// This variable stores the proper email example then the user is saved. If successful this log message will display otherwise another error log message will display with the .catch
// function newUserInitilization() {
//   const newUser = new mongoose.model("User", userSchema)({
//     username: "janedoe",
//     email: "test@gmail.com",
//   });
//   newUser
//     .save()
//     .then(() => {
//       console.log("New user saved");
//     })
//     .catch((error) => {
//       console.error("Unable to save user:", error);
//     });
// }

// Initialize my User model - this might need to go above newUser
// const User = model("user", userSchema);
// newUserInitilization();
// Virtual named friendCount that retrieves the length of the user's friends array field on query
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});
const User = model("user", userSchema);

module.exports = User;
