const express = require("express");
const { createUser } = require("../controllers/user");

const usersRouter = express.Router();

usersRouter.route("/").post(createUser);

module.exports = usersRouter;
