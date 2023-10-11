import asyncHandler from "express-async-handler";

//@desc     Auth user / set token
//@route    POST /api/users/auth
//@access   Public
const authUser = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error("Not authorized");
  res.status(200).json({ message: "Auth user" });
});
//@desc     Register user / set token
//@route    POST /api/users
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register user" });
});

//@desc     logout user / set token
//@route    POST /api/users/logout
//@access   Public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Logout user" });
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
    authUser 
    , registerUser,
    logoutUser,
    getUserProfile};
