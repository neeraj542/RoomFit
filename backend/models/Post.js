const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  pincode: { type: String, required: true },
  availability: String,
  rent: String,
  facilities: String,
  washroomType: String,
  additionalInfo: String,
  contact: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
  },
  indianWashroom: Boolean,
  acAvailable: Boolean,
  images: [String],
});

module.exports = mongoose.model('Post', postSchema);



