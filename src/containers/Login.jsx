import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../css/Register.css";

import { UserContext } from "../index";

export default function Login() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login attempt...");
    try {
      // POST user credentials
      const { data } = await axios.post("/api/login", {
        email: username,
        password: password,
      });
      console.log(data);
      // Set new state
      setUsername(data.email);
      setPassword(data.password);

      setUser(data);
      //dispatch
      // Redirect to secret route!
      history.push("/movies");

      alert(`Te logueaste correctamente ${username}`);
    } catch ({ response }) {
      // something's not right...
      alert(`Usuario o password incorrecto`);
    }
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <span className="text-center">Iniciar Sesion</span>
        <div className="input-container">
          <input
            placeholder="email"
            type="email"
            name="email"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <label></label>
        </div>
        <div className="input-container">
          <input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button className="btn">Iniciar Sesion</button>
          <br/>
          <br/>
        <div className= "text-center-secondary">
          <a href="/forgot-password">Forgot your password?</a>
        </div>
      </form>
    </div>
  );
}
