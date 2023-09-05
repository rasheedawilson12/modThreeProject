const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  habit: { type: String, required: true },
  description: { type: String, required: true },
  complete: Boolean,
});

const Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;
