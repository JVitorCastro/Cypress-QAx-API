const { MongoClient } = require('mongodb')

const mongoUri = 'mongodb+srv://qax:xperience@cluster0.5oufl12.mongodb.net/markdb?retryWrites=true&w=majority'

const client = new MongoClient(mongoUri)

async function connect () {
  await client.connect
  return client.db('markdb')
}

async function disconnect () {
  await client.disconnect
}

module.exports = {connect, disconnect}