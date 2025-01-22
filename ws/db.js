import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('Error to connect MongoDB:', err);
    process.exit(1);
  }
};

export default connectDB;