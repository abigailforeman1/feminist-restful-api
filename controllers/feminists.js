const Feminist = require('../models/feminist')

function index(req, res) {
  Feminist
    .find()
    .then(foundFeminists => res.status(200).json(foundFeminists))
    .catch(err => console.log(err))
}

function create(req, res) {
  req.body.user = req.currentUser
  Feminist
    .create(req.body)
    .then(createdFeminist => res.status(201).json(createdFeminist))
    .catch(err => res.json(err))
}

function show(req, res) {
  Feminist
    .findById(req.params.id)
    .populate('user')
    .then(feminist => {
      if (!feminist) return res.status(404).json({ message: 'Not found' })
      res.status(202).json(feminist)
    })
    .catch(err => res.json(err))
}

function update(req, res) {
  Feminist
    .findById(req.params.id) // find the feminist to be updated
    .then(feminist => {
      if (!feminist) return res.status(404).json({ message: 'Not found' }) // if feminist is not found show the 404 error
      if (!feminist.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorised' }) 
      Object.assign(feminist, req.body) // spread doesnt work so can do it this way instead --- merges the existing object with the changes sent in the request
      return feminist.save() // save it to re run its validation 
    })
    .then(updatedFeminist => res.status(202).json(updatedFeminist)) // once that feminist has been saved, we send it back to the client to show that is updated.
    .catch(err => res.json(err))
}

// note this function is not called delete as that is a reserved keyword in JS, we have used destroy instead
function destroy(req, res) {
  Feminist
    .findById(req.params.id)
    .then(feminist => {
      if (!feminist) return res.status(404).json({ message: 'Not found' })
      if (!feminist.user.equals(req.currentUser._id)) {
        res.status(401).json({ message: 'Unauthorized' })
      } else {
        feminist.remove().then(() => res.sendStatus(204))
      }
    })
    .catch(err => res.json(err))
}

// * POST /feminists/:id/comments 
function commentCreate(req, res) {
  req.body.user = req.currentUser
  Feminist
    .findById(req.params.id)
    .then(feminist => {
      if (!feminist) return res.status(404).json({ message: 'Not found' }) // if feminist is not found show the 404 error
      feminist.comments.push(req.body)
      return feminist.save()
    })
    .then(feminist => res.status(201).json(feminist))
    .catch(err => res.json(err))
}

// * DELETE /feminists/:id/comments/:commentId
function commentDelete(req, res) {
  Feminist
    .findById(req.params.id)
    .then(feminist => {
      if (!feminist) return res.status(404).json({ message: 'Not found' }) 
      const comment = feminist.comments.id(req.params.commentId)
      if (!comment) return res.status(404).json({ message: 'Not Found' })
      if (!comment.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' })
      comment.remove()
      return feminist.save()
    })
    .then(feminist => res.status(202).json(feminist))
    .catch(err => res.json(err))
}

// * GET /feminists/:id/like
function like(req, res) {
  Feminist
    .findById(req.params.id)
    .then(feminist => {
      if (!feminist) return res.status(404).json({ message: 'Not found' })
      if (feminist.likes.some(like => like.user.equals(req.currentUser._id))) return feminist // this checks if user has already pushed a like and stops them if they have
      feminist.likes.push({ user: req.currentUser }) // this pushes the like in the feminist.like property
      return feminist.save()
    })
    .then(feminist => res.status(202).json(feminist))
    .catch(err => res.json(err))
}

module.exports = { index, create, show, update, destroy, commentCreate, commentDelete, like }