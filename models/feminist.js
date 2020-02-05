const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 50 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const likeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
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
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  likes: [ likeSchema ]
}, {
  timestamps: true
})

feministSchema
  .virtual('likeCount')
  .get(function() {
    return this.likes.length
  })

feministSchema.set('toJSON', { virtuals: true })

//* registered my schema to a model and exported it 
module.exports = mongoose.model('Feminist', feministSchema)