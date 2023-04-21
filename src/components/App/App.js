import React from 'react';
import { Route, Switch } from "react-router-dom";

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Switch>
        <Route
          exact
          path="/"
        >
          <Main/>
        </Route>

        <Route
          path="/movies"
        >
          <Movies/>
        </Route>

        <Route
          path="/saved-movies"
        >
          <SavedMovies/>
        </Route>

        <Route
          path="/profile"
        >
          <Profile/>
        </Route>

        <Route
          path="/signin"
        >
          <Login/>
        </Route>

        <Route
          path="/signup"
        >
          <Register/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
