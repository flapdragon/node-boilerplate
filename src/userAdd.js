import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost/test', { useMongoClient: true })
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
