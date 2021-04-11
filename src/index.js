import React, { useState, createContext } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "../src/containers/Main"
import "./index.css";
import {Provider} from "react-redux"
import store from "../src/store/store"

export const UserContext = createContext();


const Root = () => {
  const [user, setUser] = useState({});

  return (
    <Provider store={store}>
    <React.StrictMode>
    <UserContext.Provider value={{ user, setUser }}>
       <BrowserRouter>
        <Route path="/" component={Main} />
      </BrowserRouter>
      </UserContext.Provider>
    </React.StrictMode>
    </Provider>
  );
};

export default render(<Root />, document.getElementById("root"));