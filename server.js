const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
require('dotenv').config();

// Initialize the app
const app = express();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Define Routes
app.use('/api/users', userRoutes);
app.use('/api/admins', adminRoutes);

// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
