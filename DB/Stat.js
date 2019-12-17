const mongoose = require("mongoose");

const statLog = new mongoose.Schema({
  name: {
    type: String
  },
  amount: {
    type: Number
  }
});

module.exports = Stat = mongoose.model("statLog", statLog);
