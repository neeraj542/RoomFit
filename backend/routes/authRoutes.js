const express = require('express');
const { register, login, getProfile, getUserPosts, logout } = require('../controllers/authController');
const authMiddleware = require('../middleware/auth'); // Assuming you have auth middleware defined
const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/profile', authMiddleware, getProfile);
router.get('/posts', authMiddleware, getUserPosts);

// Logout route
router.post('/logout', logout);

module.exports = router;
