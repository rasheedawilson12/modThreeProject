import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Edit() {
  const [updatedHabit, setUpdatedHabit] = useState({
    habit: "",
    description: "",
    complete: "",
  });
  const location = useLocation();
  const handleChange = (e) => {
    setUpdatedHabit({ ...updatedHabit, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const editHabits = await axios.put(
        `/api/habits/edit/${location.state._id}`,
        updatedHabit
      );
      setUpdatedHabit(editHabits);
    } catch (err) {
      console.log({ msg: err.message });
    }
  };
  return (
    <div>
      <h1>Edit Task</h1>
      {console.log(location)}
      <form onSubmit={handleSubmit} className="editForm">
        Habit:
        <input
          type="text"
          defaultValue={location.state.habit}
          onChange={handleChange}
        />
        <br />
        Description:{" "}
        <input
          type="text"
          defaultValue={location.state.description}
          onChange={handleChange}
        />
        <br />
        Complete:{" "}
        {location.state.complete ? (
          <input type="checkbox" name="complete" defaultChecked />
        ) : (
          <input type="checkbox" name="complete" />
        )}
        <br />
        <input
          type="submit"
          name=""
          value="Finished Editing"
          className="editFormBtn"
        />
      </form>
    </div>
  );
}

export default Edit;
