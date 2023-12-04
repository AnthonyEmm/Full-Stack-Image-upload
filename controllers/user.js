const User = require("../models/user");

// Create a new User in DB //

const createUser = async (req, res) => {
  try {
    const { email, name } = req.body;
    const user = await User.create({ email, name });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Oops! Something went wrong");
  }
};

module.exports = {
  createUser,
};
