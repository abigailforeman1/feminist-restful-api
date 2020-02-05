const router = require('express').Router()
const feminists = require('../controllers/feminists')
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/feminists')
  .get(feminists.index)
  .post(secureRoute, feminists.create)

router.route('/feminists/:id')
  .get(feminists.show)
  .put(secureRoute, feminists.update)
  .delete(secureRoute, feminists.destroy)

router.route('/feminists/:id/comments')
  .post(secureRoute, feminists.commentCreate)

router.route('/feminists/:id/comments/:commentId')
  .delete(secureRoute, feminists.commentDelete)

router.route('/feminists/:id/like')
  .get(secureRoute, feminists.like)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

router.route('/profile')
  .get(secureRoute, users.profile)

module.exports = router