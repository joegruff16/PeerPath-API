// Install packages for routes
const router = require('express').Router();

// Create variables to store route
const thoughtRoutes = require("./thoughtRoutes");
const userRoutes = require("./userRoutes");

router.use("/user", userRoutes);
router.use("/thought", thoughtRoutes);

module.exports = router;
