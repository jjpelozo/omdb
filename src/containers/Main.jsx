import React, { Fragment } from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import Peliculas from "./Peliculas";
import SinglePelicula from "./SinglePelicula";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import Usuario from "./Usuario"

export default function Main() {
  return (
    <div>
      <Fragment>
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/movies" component={Peliculas} />
          <Route exact path="/movies/:id" component={SinglePelicula} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/usuario" component={Usuario} />
          <Redirect to="/movies" />
        </Switch>
      </BrowserRouter>
      </Fragment>
    </div>
  );
}
