import express from "express";
import dotenv from "dotenv";
dotenv.config();

//middleware
import {notFound, errorHandler} from './middleware/errorMiddleware.js';

const port = process.env.PORT || 5000;

import userRoutes from './routes/userRoutes.js';
const app = express();

app.use('/api/users', userRoutes);


// POST /api/users - Register a user
// POST /api/users/auth - Authenticate a user and get token
// POST /api/users/logout - Logout user and clear cookie
// GET /api/users/profile - Get user profile
// PUT /api/users/profile - Update profile
app.get("/", (req, res) => {
  res.send("Server is ready");
});

//errors
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
