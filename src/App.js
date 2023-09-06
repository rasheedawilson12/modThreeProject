import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import axios from "axios";
import AuthPage from "./pages/AuthPage/AuthPage";
import NavBar from "./components/NavBar/NavBar";
import Main from "./pages/MainPage/MainPage";
import New from "./pages/New/New";
import Edit from "./pages/Edit/Edit";

function App() {
  // array destructing
  const [user, setUser] = useState(getUser());
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    async function getHabits() {
      try {
        const habits = await axios.get("/api/habits/");
        setHabits(habits.data);
      } catch (error) {
        console.log(error);
      }
    }
    getHabits()
  }, []);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route
              path="/"
              element={<Main habits={habits} setHabits={setHabits} />}
            />
            <Route
              path="/new"
              element={<New habits={habits} setHabits={setHabits} />}
            />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
