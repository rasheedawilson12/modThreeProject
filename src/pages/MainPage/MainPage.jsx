import React from "react";
import { useNavigate } from "react-router-dom";

function MainPage({ habits, handleDelete }) {
  const nav = useNavigate();

  return (
    <>
      <h1>✔️ Task List 📝 </h1>
      <div className="taskContainer">
        {habits.length > 0
          ? habits.map((habit, i) => {
              return (
                <div className="Task" key={i}>
                  <h3>{habit.habit}</h3>
                  <p>{habit.description}</p>
                  <button
                    onClick={() => {
                      nav(`/edit/${habit._id}`, {
                        state: habit,
                      });
                    }}
                    className="editBtn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      handleDelete(e, habit._id);
                    }}
                    className="deleteBtn"
                  >
                    DELETE
                  </button>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}

export default MainPage;
