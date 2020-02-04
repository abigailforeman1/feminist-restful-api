const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 50 }
}, {
  timestamps: true
})

//* create the blueprint / schema for our collection
const feministSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  yearBorn: { type: Number, required: true },
  placeOfBirth: { type: String, required: true },
  occupation: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true, maxlength: 1000 },
  comments: [ commentSchema ],
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

//* registered my schema to a model and exported it 
module.exports = mongoose.model('Feminist', feministSchema)