import React, { useState } from "react";
import axios from "axios";

function New({ habits, setHabits }) {
  const [newHabit, setNewHabit] = useState({
    habit: "",
    description: "",
    complete: "",
  });

  const handleChange = (e) => {
    setNewHabit({ ...newHabit, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const habits = await axios.post("/api/habits/new", newHabit);
      setHabits(habits);
    } catch (err) {
      console.log({ msg: err.message });
    }
  };
  return (
    <div>
      <h1>New habits Page</h1>
      <form onSubmit={handleSubmit}>
        Habit: <input type="text" name="habit" onChange={handleChange} />
        <br />
        Description:
        <input type="text" name="description" onChange={handleChange} />
        <br />
        Completed: <input type="checkbox" name="complete" />
        <br />
        <input type="submit" name="" value="Create habits" />
      </form>
    </div>
  );
}

export default New;
