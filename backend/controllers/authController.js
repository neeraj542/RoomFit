const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Check if user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        // If user does not exist, hash the password and create new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        console.log('User registered successfully:', newUser);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error in register:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if password matches hashed password in database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token for authentication
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // console.log('User logged in successfully:', user);
        console.log('User logged in successfully');

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error in login:', error);
        res.status(500).json({ error: 'Failed to log in' });
    }
};

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select('-password');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ error: 'Failed to fetch user profile' });
    }
};

exports.getUserPosts = async (req, res) => {
    try {
        const posts = await Post.find({ userId: req.user.userId });
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching user posts:', error);
        res.status(500).json({ error: 'Failed to fetch user posts' });
    }
};

exports.logout = (req, res) => {
    res.clearCookie('authToken'); // Adjust as per your setup
    res.status(200).json({ message: 'Logout successful' });
    console.log('User LoggedOut in successfully');
};