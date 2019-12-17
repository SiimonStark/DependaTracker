const express = require('express');
const mongoose = require('mongoose');

const Habit = require('../DB/Habit');
const route = express.Router();

route.post('/', async(req, res) => {
  const{name} = req.body;
  let habit = {};
  habit.name = name;
  let habitModel = new Habit(habit);
  await habitModel.save();
  res.json(habitModel);
})

module.exports = route;