const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Begin Creating a Tweet express backend 

//Create a Tweet model with a name and description property

//Begin creating basic Crud and Restful Routes for the tweet model


const reviewSchema = new Schema({
  content: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  }
}, {
    timestamps: true
  },
)

const movieSchema = new Schema({
  reviews: [reviewSchema],
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    default: function () {
      return new Date().getFullYear();
    }
  }, mpaaRating: String,
  cast: [String],
  nowShowing: { type: Boolean, default: false }
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);