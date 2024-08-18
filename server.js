const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const menuRoutes = require('./routes/menu');
const reservationRoutes = require('./routes/reservation');
const authRoutes = require('./routes/auth');

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

// Define Routes
app.use('/api/menu', menuRoutes); // Menu routes for CRUD operations on menu items
app.use('/api/reservation', reservationRoutes); // Reservation routes for CRUD operations on reservations
app.use('/api/auth', authRoutes); // Authentication routes for login and JWT generation

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
