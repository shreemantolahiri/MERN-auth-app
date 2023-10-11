import express from "express";
import dotenv from "dotenv";
dotenv.config();

//middleware
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
//connect db
import connectDB from "./config/db.js";
//setting port
const port = process.env.PORT || 5000;

//db
connectDB();

//user Routes
import userRoutes from './routes/userRoutes.js';
const app = express();

//for parsing json data
app.use(express.json());
//for parsing url encoded data
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);


//checking server root page
app.get("/", (req, res) => {
  res.send("Server is ready");
});

//error handling middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));


// POST /api/users - Register a user
// POST /api/users/auth - Authenticate a user and get token
// POST /api/users/logout - Logout user and clear cookie
// GET /api/users/profile - Get user profile
// PUT /api/users/profile - Update profile