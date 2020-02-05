const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const User = require('../models/user')

function secureRoute(req, res, next) {
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  // removing the 'Bearer ' first section from the token and saving the actual token part from the request header authorization in const token  
  const token = req.headers.authorization.replace('Bearer ', '')

  // this is verifying the users token and secret
  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, payload) => {
      if (err) return reject(err)
      return resolve(payload)
    })
  })
    .then(payload => User.findById(payload.sub))
    .then(user => {
      if (!user) return res.status(401).json({ message: 'Unauthorized' })
      req.currentUser = user
      next()
    })
    .catch(() => res.status(401).json({ message: 'Unauthorized' }))
}

module.exports = secureRoute