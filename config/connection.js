const { connect, connection } = require("mongoose");

// Wrap Mongoose around local connection to MongoDB
connect("mongodb://127.0.0.1:27017/peerPathDB");

// Export connection
module.exports = connection;
