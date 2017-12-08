import dotenv from 'dotenv'
const config = dotenv.config()
import mongoose from 'mongoose'
mongoose.connect(process.env.DB_HOST, { useMongoClient: true })
mongoose.Promise = require('bluebird')

import User from './userSchema'

// New user
const person = new User({
  firstName: 'Noora',
  lastName: 'Riku'
});

// Save
person.save(function(err) {
  if (err) throw err
  console.log('User saved successfully :)')
})
