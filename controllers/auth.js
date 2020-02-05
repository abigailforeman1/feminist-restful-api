const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res) {
  User
    .create(req.body)
    .then(user => res.status(201).json({ message: `Hey! Thanks for registering ${user.username}` }))
    .catch(err => res.json(err))
}

function login(req, res) {
  User
    .findOne({ email: req.body.email })
    // once we found that user check the password provided matches what we have for them in db
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) { // if there is no user or their password didn't match it return a 401 error message
        return res.status(401).json({ message: 'Unauthorized 1' })
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '24h' }) // keeps the token a secret - matched with a string in environment 
      res.status(202).json({ 
        message: `Welcome Back ${user.username}`,
        token
      })
    })
    .catch(() => res.status(401).json({ message: 'Unauthorized 2' }))
  // if we find the user fine, we can issue them a token and send them back a response with that token
  // if anything goes wrong send them back a 401 unauthorized 
}

// building the user profile based on the current users ID and populating it with their created feminists and liked feminists then displaying it back 
function profile(req, res) {
  User
    .findById(req.currentUser._id)
    .populate('createdFeminists')
    .populate('likedFeminists')
    .then(user => res.status(200).json(user))
    .catch(err => res.json(err))
}

module.exports = { register, login, profile }