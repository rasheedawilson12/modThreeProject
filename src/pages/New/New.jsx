import React, { useState } from "react";
import axios from "axios";

function New({ setHabits }) {
  const [newHabit, setNewHabit] = useState({
    habit: "",
    description: "",
  });

  const handleChange = (e) => {
    setNewHabit({ ...newHabit, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const habits = await axios.post("/api/habits/new", newHabit);
      setHabits(habits);
      <button>nav("/")</button>;
    } catch (err) {
      console.log({ msg: err.message });
    }
  };
  return (
    <div>
      <h1>Add New Task </h1>
      <form onSubmit={handleSubmit} className="newInputForm">
        Habit: <input type="text" name="habit" onChange={handleChange} />
        <br />
        Description:
        <input type="text" name="description" onChange={handleChange} />
        <br />
        {/* Completed: <input type="checkbox" name="complete" />
        <br /> */}
        <input
          type="submit"
          name=""
          value="Create habits"
          className="formBtn"
        />
      </form>
    </div>
  );
}

export default New;
