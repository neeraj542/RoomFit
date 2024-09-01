const multer = require('multer');
const path = require('path');

// Configure storage for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory where files will be uploaded
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});

// Initialize Multer with the configured storage
const upload = multer({ storage });

module.exports = upload;
