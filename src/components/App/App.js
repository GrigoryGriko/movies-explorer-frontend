import React, { useState } from 'react';
import { Route, Switch, useLocation, useHistory } from "react-router-dom";

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
  const [isPreloader, setIsPreloader] = useState(false);
  const [isSearchMovies, setIsSearchMovies] = useState('');
  const [isSearchError, setIsSearchError] = useState('');
  
  const [isDisabled, setIsDisabled] = useState('');
  
  const [dataForm, setDataForm] = useState({});

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
          <Movies
            isPreloader={isPreloader}
            setIsPreloader={setIsPreloader}
            isSearchMovies={isSearchMovies}
            setIsSearchMovies={setIsSearchMovies}
            isSearchError={isSearchError}
            setIsSearchError={setIsSearchError}
          />
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
          <Register
            isDisabled={isDisabled}
            dataForm={dataForm}
            setIsDisabled={setIsDisabled}
            setDataForm={setDataForm}
          />
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
