import React, { useMemo, useState } from "react";

function Login({ onLogin }) {
  const demoUser = useMemo(
    () => ({ email: "navneet@gmail.com", password: "Navneet@123" }),
    [],
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    const ok =
      email.trim().toLowerCase() === demoUser.email &&
      password === demoUser.password;

    if (!ok) {
      setError("Invalid credentials. Try navneet@gmail.com/ Navneet@123");
      return;
    }

    onLogin({ email: demoUser.email });
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">Book Management System</h1>
      <h1 className="auth-title">Login</h1>

      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          className="auth-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        {error ? <div className="auth-error">{error}</div> : null}

        <button className="auth-button" type="submit">
          Sign in
        </button>

        <div className="auth-demo">
          Demo: <b>navneet@gmail.com</b> / <b>Navneet@123</b>
        </div>
      </form>
    </div>
  );
}

export default Login;
