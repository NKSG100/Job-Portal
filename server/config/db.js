import mongoose from 'mongoose';

//Function to connect to mongodb server

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`);
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;