import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";

import Header from '../Header/Header';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';

import Footer from '../Footer/Footer';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {
        (
          location.pathname !== '/signup' && 
          location.pathname !== '/signin' &&
          location.pathname !== '/404'
        ) ? <Header/> : ''
      }
  
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
        
        <Route
          path="/404"
        >
          <NotFound/>
        </Route>
      </Switch>

      {
        ( 
          location.pathname !== '/profile' && 
          location.pathname !== '/signup' && 
          location.pathname !== '/signin' &&
          location.pathname !== '/404'
        ) ? <Footer/> : ''
      }
    </div>
  );
}

export default App;
