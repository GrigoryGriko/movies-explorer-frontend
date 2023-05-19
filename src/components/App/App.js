import React, { useState, useEffect } from 'react';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


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
  
  const userContextValue = {
    currentUser: currentUser,
    setCurrentUser: setCurrentUser,
    loggedIn : loggedIn,
    setLoggedIn : setLoggedIn,
  }

  useEffect(() => {
    autoLoginCookie();
  }, [])

  function setValidation(props, useInput, useEffect) {
    const nameInput = {
      name: useInput('', {isEmpty: true, minLength: 3, maxLength: 30, isName: true}),
      email: useInput('', {isEmpty: true, isEmail: true}),
      password: useInput('', {isEmpty: true, minLength: 3, maxLength: 30}),
    }

    const {name, email, password} = nameInput;
    
    let isValid;
    useEffect(() => {
      const { location } = props;
      
      if (location.pathname === '/signup') {
        isValid = !name.inputValid || !email.inputValid || !password.inputValid;
      } 
      else if (location.pathname === '/signin') {
        isValid = !email.inputValid || !password.inputValid;
      }
      else if (location.pathname === '/profile') {
        isValid = !name.inputValid || !email.inputValid;
      }
      
      props.setIsDisabled(isValid);
    })

    return {
      name,
      email,
      password,
      isValid,
    }
  }

  function handleLogin({email, password}) {
    auth.login(email, password)
      .then((res) => {
        setLoggedIn(true);

        auth.getUserData()
          .then((res) => {
            console.log(res)
            setIsCookieChecked(true);
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

  function autoLoginCookie() {
    if (!loggedIn && !isCookieChecked) {
      auth.getUserData()
      .then((res) => {
        setLoggedIn(true);
        setIsCookieChecked(true);
        setCurrentUser(res);
      })
      .catch((err) => {
        setIsCookieChecked(true);
        console.log('Авторизация по cookie не удалась ' + err);
      });   
    }
  }
  
  function unsetLoggedIn() {
    setLoggedIn(false)
  }
  
  return (
    <CurrentUserContext.Provider value={userContextValue}>
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
          
          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}

            isPreloader={isPreloader}
            setIsPreloader={setIsPreloader}
            isSearchMovies={isSearchMovies}
            setIsSearchMovies={setIsSearchMovies}
            isSearchError={isSearchError}
            setIsSearchError={setIsSearchError}
          >
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
          >
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}

            setValidation={setValidation}
              isDisabled={isDisabled}
              setIsDisabled={setIsDisabled}
          >
          </ProtectedRoute>

          <Route
            path="/signin"
          >
            <Login
              setValidation={setValidation}
              isDisabled={isDisabled}
              setIsDisabled={setIsDisabled}
              handleLogin={handleLogin}
            />
          </Route>

          <Route
            path="/signup"
          >
            <Register
              setValidation={setValidation}
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
