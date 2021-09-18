const express = require("express");
const router = express.Router();
const {
  createUser,
} = require("./userController");
const { postValidator, runValidation } = require("./userValidator");

router
  .post("/", postValidator, runValidation, createUser)

module.exports = router;
