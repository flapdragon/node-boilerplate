import mongoose from 'mongoose'

// Schema
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: String,
    lastName: String
});

module.exports = mongoose.model( 'User', UserSchema )
