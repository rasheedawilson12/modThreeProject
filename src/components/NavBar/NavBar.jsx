import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <nav className="NavBar">
      <Link to="/">All Habits</Link>
      &nbsp; | &nbsp;
      <Link to="/new">Add Habit</Link>
      &nbsp; | &nbsp; <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}

export default NavBar;
