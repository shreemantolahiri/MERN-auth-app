import mongoose from 'mongoose';

// const mongoose = require('mongoose');

const connectDB = async () => {
try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongoose connected ${conn.connection.host}`);
}
catch(error){
    console.log('Error: ', error.message);
    process.exit(1);
}
}

export default connectDB;