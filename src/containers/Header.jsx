import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../css/Header.css";

import { UserContext } from "../index";
import { log, success, error } from "../utils/logs";


const Pair = ({ children }) => (
  <div className="flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
    {children}
  </div>
);

const EmptyButton = ({ children }) => (
  <button className="btnHeader">
    {children}
  </button>
);

const RoundButton = ({ children, onClick = () => {} }) => (
  <span className="inline-flex rounded-md shadow-sm">
    <button
      onClick={onClick}
      className="btnHeader"
    >
      {children}
    </button>
  </span>
);

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const handleLogout = async () => {
    log("logout attempt...");
    try {
      await axios.post("/api/logout");
      setUser({});
      success("logged out");
      history.push("/");
    } catch ({ response }) {
      error(response.status, response.statusText);
    }
  };

  return (
    <div>
      <div className="botoneraHeader">
        <h1>OMDB</h1>

        <Link to={`/movies`}>
          <button className="btnHeader">Buscar Peliculas</button>
        </Link>

        <div className="bg-purple-900 fixed w-full">
      <div className="flex justify-between items-center px-6 py-2">
        <div className="w-0 flex-1">

        </div>
        {user.id ? (
          <Pair>
            <Link to="/usuario">
              <EmptyButton>{user.email}</EmptyButton>
            </Link>
            <RoundButton onClick={handleLogout}>Logout</RoundButton>
          </Pair>
        ) : (
          <Pair>
            <Link to="/login">
              <EmptyButton>Login</EmptyButton>
            </Link>
            <Link to={`/register`}>
              <RoundButton>Register</RoundButton>
            </Link>
          </Pair>
        )}
      </div>
    </div>

          
     {/*   

        <Link to={`/login`}>
          <button className="btnHeader">Login</button>
        </Link>
        <Link to={`/register`}>
          <button className="btnHeader">Register</button>
        </Link> */}
      </div>
    </div>
  );
}
