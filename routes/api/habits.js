const express = require("express");
const router = express.Router();
const Habit = require("../../models/Habit");

// Get all habbits
router.get("/", async (req, res) => {
  try {
    let allHabits = await Habit.find({});
    res.json(allHabits);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// Get individial habit
router.get("/:id", async (req, res) => {
  try {
    const eachHabit = await Habit.findById(req.params.id);
    res.json(eachHabit);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// Create new habit
router.post("/new", async (req, res) => {
  try {
    if (req.body.complete === "on") {
      req.body.complete = true;
    } else {
      req.body.complete = false;
    }
    const newHabit = await Habit.create(req.body);
    res.json(newHabit);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// Edit habit
router.put("/edit/:id", async (req, res) => {
  try {
    const selectHabit = await Habit.findByIdAndUpdate(req.params.id, req.body);
    res.json(selectHabit);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// delete habit
router.delete("/:id", async (req, res) => {
  try {
    await Habit.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: "Object deleted!" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

module.exports = router;
