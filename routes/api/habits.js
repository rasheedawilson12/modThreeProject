const express = require("express");
const router = express.Router();
const Habit = require("../../models/Habit");

// Get all habbits
router.get("/habits", async (req, res) => {
  let allHabits = await Habit.find({});
  await res.render("Main", {
    habits: allHabits,
  });
});

// Edit habit
router.get("/habits/edit/:id", async (req, res) => {
  const selectHabit = await Habit.findById(req.params.id);
  res.render("Edit", { habit: selectHabit });
});

// delete habit
router.delete("/habits/:id", async (req, res) => {
  await Habit.findByIdAndRemove(req.params.id);
  res.redirect("/habits"); //redirect back to fruits index
});
