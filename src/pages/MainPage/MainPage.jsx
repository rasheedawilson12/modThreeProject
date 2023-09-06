import React from "react";
import { useNavigate } from "react-router-dom";

function MainPage({ habits }) {
  const nav = useNavigate();
  return (
    <div>
      <h1>Habit Tracker Page</h1>
      {habits.length > 0
        ? habits.map((habit, i) => {
            return (
              <div key={i}>
                <h3>{habit.habit}</h3>
                <p>{habit.description}</p>
                <button
                  onClick={() => {
                    nav(`/edit/${habit._id}`);
                  }}
                >
                  Edit
                </button>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default MainPage;
