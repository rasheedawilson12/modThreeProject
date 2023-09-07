import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main>
      <div>
        <h1>Task Minder Login</h1>
      </div>
      <div className="loginForm">
        {showLogin ? (
          <LoginForm setUser={setUser} />
        ) : (
          <SignUpForm setUser={setUser} />
        )}
      </div>
      <button
        onClick={() => {
          setShowLogin(!showLogin);
        }}
        className="toggleButton"
      >
        {showLogin ? "Sign up" : "Login"}
      </button>
    </main>
  );
}

export default AuthPage;
