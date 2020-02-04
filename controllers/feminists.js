const Feminist = require('../models/feminist')

function index(req, res) {
  Feminist
    .find()
    .then(foundFeminists => res.status(200).json(foundFeminists))
    .catch(err => console.log(err))
}

function create(req, res) {
  Feminist
    .create(req.body)
    .then(createdFeminist => res.status(201).json(createdFeminist))
}

function show(req, res) {
  Feminist
    .findById(req.params.id)
    .then(feminist => res.status(202).json(feminist))
    .catch(err => console.log(err))
}

function update(req, res) {
  Feminist
    .findById(req.params.id) // find the feminist to be updated
    .then(feminist => {
      if (!feminist) return res.status(404).json({ message: 'Not found' }) // if feminist is not found show the 404 error
      Object.assign(feminist, req.body) // spread doesnt work so can do it this way instead --- merges the existing object with the changes sent in the request
      return feminist.save() // save it to re run its validation 
    })
    .then(feminist => res.status(202).json(feminist))
    .catch(err => res.json(err))
}

function destroy(req, res) {
  Feminist
    .findByIdAndDelete(req.params.id) // special method to find by the id and remove in one step
    .then(() => res.sendStatus(204))
    .catch(err => res.status(400).json(err)) // send any errors if something goes wrong.
}

function commentCreate(req, res) {
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

function commentDelete(req, res) {
  Feminist
    .findById(req.params.id)
    .then(feminist => {
      if (!feminist) return res.status(404).json({ message: 'Not found' }) 
      const comment = feminist.comments.id(req.params.commentId)
      if (!comment) return res.status(404).json({ message: 'Not Found' })
      comment.remove()
      return feminist.save()
    })
    .then(feminist => res.status(202).json(feminist))
    .catch(err => res.json(err))
}

module.exports = { index, create, show, update, destroy, commentCreate, commentDelete }