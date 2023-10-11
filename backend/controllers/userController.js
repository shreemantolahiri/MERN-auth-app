import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@desc     Auth user / set token
//@route    POST /api/users/auth
//@access   Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password!");
  }
  // res.status(404);
  // throw new Error("Something went wrong  authorized");

  res.status(200).json({ message: "Auth user" });
});
//@desc     Register user / set token
//@route    POST /api/users
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
  // console.log(req.body);

  res.status(200).json({ message: "Register user" });
});

//@desc     logout user / set token
//@route    POST /api/users/logout
//@access   Public
const logoutUser = asyncHandler(async (req, res) => {

  res.cookie('jwt','',{
    httpOnly:true,
    expires: new Date(0)
  });
  res.status(200).json({ message: "User has successfully logged out." });
});

//@desc     Get user profile / set token
//@route    GET /api/users/profile
//@access   Private(valid jwt token)
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get user Profile" });
});

//@desc     Update user profile / set token
//@route    PUT /api/users/profile
//@access   Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update user Profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
