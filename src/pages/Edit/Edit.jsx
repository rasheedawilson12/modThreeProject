import React, { useState } from "react";
import axios from "axios";

function Edit({ habits, setHabits }) {
  const [updatedHabit, setUpdatedHabit] = useState({
    habit: "",
    description: "",
    complete: "",
  });
  const handleChange = (e) => {
    setUpdatedHabit({ ...updatedHabit, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const habits = await axios.post("/api/habits/edit/:id", updatedHabit);
      setHabits(habits);
    } catch (err) {
      console.log({ msg: err.message });
    }
  };
  return (
    <div>
      <h1>Edit Habit</h1>
      <form onSubmit={handleSubmit}>
        Habit:
        <input
          type="text"
          defaultValue={habits.habit}
          onChange={handleChange}
        />
        <br />
        Description:{" "}
        <input
          type="text"
          defaultValue={habits.description}
          onChange={handleChange}
        />
        <br />
        Complete:{" "}
        {habits.complete ? (
          <input type="checkbox" name="complete" defaultChecked />
        ) : (
          <input type="checkbox" name="complete" />
        )}
        <br />
        <input type="submit" name="" value="Finished Editing" />
      </form>
    </div>
  );
}

export default Edit;
