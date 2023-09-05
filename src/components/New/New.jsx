import React from "react";

function New() {
  return (
    <div>
      <h1>New Habit Page</h1>
      <form action="/fruits" method="POST">
        Name: <input type="text" name="name" />
        <br />
        Description: <input type="text" name="description" />
        <br />
        Completed: <input type="checkbox" name="complete" />
        <br />
        <input type="submit" name="" value="Create Habit" />
      </form>
    </div>
  );
}

export default New;
