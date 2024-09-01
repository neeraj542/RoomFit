// src/routes/houseRoutes.js
const express = require('express');
const { getPosts } = require('../controllers/postController');
const router = express.Router();
// const upload = require('../middleware/multer'); // Import Multer middleware
const Post = require('../models/Post');
const multer = require('multer');

// Route to create a post with file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });

router.post('/createpost', upload.array('images'), async (req, res) => {
    try {
        const { title, location, pincode, availability, rent, washroomType, additionalInfo, contact, indianWashroom, acAvailable } = req.body;

        if (!contact || !contact.name || !contact.phone || !contact.email) {
            return res.status(400).json({ message: 'Contact information is incomplete' });
        }

        const newPost = new Post({
            title,
            location,
            pincode,
            availability,
            rent,
            washroomType,
            additionalInfo,
            contact,
            indianWashroom,
            acAvailable,
            images: req.files ? req.files.map((file) => file.path) : [],
        });

        await newPost.save();
        console.log('Post saved successfully:', newPost); 
        res.status(201).json(newPost);
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ message: 'Failed to create post' });
    }
});


// router.post('/createpost', createPost);
router.get('/', getPosts);

module.exports = router;

