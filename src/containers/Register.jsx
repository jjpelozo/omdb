import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../css/Register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("register attempt...");
    try {
      // POST user credentials
      await axios.post("/api/register", {
        email: username,
        password: password,
      });
      console.log(`new user registered`);
      alert(`Te registraste correctamente ${username}`);
      // Redirect to login!
      history.push("/movies");
    } catch ({ response }) {
      // something's not right...
      alert(`Ya existe un usuario con ese email`);
    }
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <span className="text-center">Registrarse</span>
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
        <button className="btn">Registrarse</button>
      </form>
    </div>
  );
}
