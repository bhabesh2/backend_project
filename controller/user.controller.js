const User = require("../model/user.model.js");

exports.home = (req, res) => {
  res.send("<h1>Hello World</h1>");
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, username } = req.body;
    if (!name || !email || !username) {
      throw new Error("Name and email and username is required");
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
      throw new Error("user is already registered");
    }

    const user = await User.create({
      name,
      email,
      username,
    });

    res.status(201).json({
      success: true,
      message: "user created successfully!",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


exports.getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


exports.editUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;

    // Find the user by ID and update their information
    const user = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const usersId = req.params.id; // Corrected variable name
    const user = await User.findByIdAndDelete(usersId); // Corrected variable name
    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
