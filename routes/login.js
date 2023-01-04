const express = require("express");
const router = express.Router();

// import controllers here
const loginController = require("../controllers/loginController");

// define routes here
router.post("/", loginController.login);

module.exports = router;
