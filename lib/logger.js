//* this is to check everything works before starting
function logger(req, res, next) {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`Incoming ${req.method} to ${req.url}`)
  }
  next()
}

module.exports = logger