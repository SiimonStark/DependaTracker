const mongoose = require('mongoose');

const habitLog = new mongoose.Schema({
  name: {
    type: String
  },
  year: {
    type: Number
  },
  month: {
    type: String
  },
  days: {
    type: Number
  },
  complete: {
    type: Array
  },
  incomplete: {
    type: Array
  },
  unMarked: {
    type: Array
  }
})

module.exports = Habit = mongoose.model('habitLog', habitLog);