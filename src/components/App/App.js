import React, { useState } from 'react';
import { Route, Switch, useLocation, useHistory } from "react-router-dom";

import { CurrentUserContext } from '../../context/CurrentUserContext';

import Header from '../Header/Header';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';

import Footer from '../Footer/Footer';
import * as auth from '../../utils/Auth';


function App() {
  const [isPreloader, setIsPreloader] = useState(false);
  const [isSearchMovies, setIsSearchMovies] = useState('');
  const [isSearchError, setIsSearchError] = useState('');

  const [currentUser, setCurrentUser] = useState({});
  const [isCookieChecked, setIsCookieChecked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  
  const [isDisabled, setIsDisabled] = useState('');

  const location = useLocation();
  const history = useHistory();
  
  autoLoginCookie();

  function autoLoginCookie() {
    if (!loggedIn && !isCookieChecked) {
      auth.getUserData()
      .then((res) => {
        handleLogin();
        setIsCookieChecked(true);
        history.push('/movies');
      })
      .catch((err) => {
        setIsCookieChecked(true);
        console.log('Авторизация по cookie не удалась ' + err);
      });   
    }
  }
  
  function handleLogin({email, password}) {
    auth.login(email, password)
      .then((res) => {
        console.log(res);
        setLoggedIn(true);

        auth.getUserData()
          .then((res) => {
            setCurrentUser(res);
            history.push('/movies');
          })
          .catch((err) => {
            setIsCookieChecked(true);
            console.log('Ошибка получения данных пользователя ' + err);
          });
      })
      .catch((err) => {
        console.log('Что-то пошло не так! Попробуйте ещё раз. ' + err);
      });
  }
  
  function unsetLoggedIn() {
    setLoggedIn(false)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
            <Login
              isDisabled={isDisabled}
              setIsDisabled={setIsDisabled}
              handleLogin={handleLogin}
            />
          </Route>

          <Route
            path="/signup"
          >
            <Register
              isDisabled={isDisabled}
              setIsDisabled={setIsDisabled}
              handleLogin={handleLogin}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
