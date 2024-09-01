const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            location: req.body.location,
            pincode: req.body.pincode,
            availability: req.body.availability,
            rent: req.body.rent,
            facilities: req.body.facilities,
            washroomType: req.body.washroomType,
            additionalInfo: req.body.additionalInfo,
            images: req.files.map(file => file.path), // Adjust if files are stored differently
            contact: {
                name: req.body['contact[name]'],
                phone: req.body['contact[phone]'],
                email: req.body['contact[email]'],
            },
            indianWashroom: req.body.indianWashroom === 'true',
            acAvailable: req.body.acAvailable === 'true',
        });

        await post.save();
        res.status(201).json(post);
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Failed to create post.' });
    }
};


exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};
