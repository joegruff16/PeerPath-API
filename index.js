// Insert packagtes below that we will leverage for this app
const express = require("express");
require("dotenv").config();
// Establishes a connection our database
const db = require("./config/connection");
// Creates a route path
const routes = require("./routes");

// Establishes which port to use and if others aren't available it will use 3001
const PORT = process.env.PORT || 3001;
// Here we are leveraging middleware
const app = express();

// Our middleware configuration functionality
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// This is a database event listener that will listen for connections on the specified port
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}`);
  });
});
