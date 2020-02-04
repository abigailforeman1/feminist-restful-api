const port = process.env.PORT || 4000 // either use the port provided in env or 4000 (my local server port for developing)
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/restful-api' // * location of my db on local machine
const secret = process.env.SECRET || 'women rule' // either use the stored secret or the one provided on the other side of the OR

module.exports = { port, dbURI, secret }
