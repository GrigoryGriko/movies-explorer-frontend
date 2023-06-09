import SavedMovies from '../components/SavedMovies/SavedMovies';
import mainApi from './MainApi';
import moviesApi from './MoviesApi';


export function getSearchMovies() {
  return JSON.parse(localStorage.getItem("searchMovies"));
}

export function getFilterFormData() {
  return JSON.parse(localStorage.getItem("filterFormData"));
}

export function getSearchSavedMovies() {
  return JSON.parse(localStorage.getItem("searchSavedMovies"));
}

export function getFilterFormDataSavedMovies() {
  return JSON.parse(localStorage.getItem("filterFormDataSavedMovies"));
}

export function handleSubmit(
    e, 
    location,
    setIsTextFormError,
    setIsPreloader, 
    setIsSearchError, 
    shortsFilms, 
    textMovie,
    setterFilterFormData
  ) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
  if (!textMovie) {
    setIsTextFormError(e ? 'Нужно ввести ключевое слово' : '');
  } else {
    setIsTextFormError('');

    if (location.pathname === '/movies') {
      reqMovies(setIsPreloader, setIsSearchError, shortsFilms, textMovie, location);
      setterFilterFormData();
    } else if (location.pathname === '/saved-movies') {
      reqSaveMovies(setIsPreloader, setIsSearchError, shortsFilms, textMovie, location);
      setterFilterFormData();
    }
  }
}

function reqMovies(setIsPreloader, setIsSearchError, shortsFilms, textMovie, location) {
  function markSaveCards(searchMovies) {
    const searchSavedMovies = getSearchSavedMovies();

    searchMovies.forEach(item => {
      item.isSaved = searchSavedMovies
        .some(savedItem => savedItem.movieId === item.id);
      if (item.isSaved) {
        item.movieId = searchSavedMovies
          .filter(savedItem => savedItem.movieId === item.id)
          .map(savedItem => savedItem._id)[0];
      }
    })
  }

  function refreshSaveMovies(searchMovies) {
    mainApi.getMovies()
        .then((res) => {      
          const searchSavedMovies = res;
          localStorage.setItem("searchSavedMovies", JSON.stringify(searchSavedMovies));

          markSaveCards(searchMovies);

          localStorage.setItem("searchMovies", JSON.stringify(searchMovies));
          filterMovies(shortsFilms, textMovie, location);
          setIsPreloader(false);
        })
        .catch(() => {
          setIsSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        });
  }
  if (!getSearchMovies()) {
    setIsPreloader(true);
    setIsSearchError('');
    
    moviesApi.getInitMovies()
    .then((res) => {      
      const searchMovies = res;
      refreshSaveMovies(searchMovies);
    })
    .catch(() => {
      setIsSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
    });
  } else {
    setIsPreloader(true);
    
    const searchMovies = getSearchMovies();
    refreshSaveMovies(searchMovies);
  }
}

function reqSaveMovies(setIsPreloader, setIsSearchError, shortsFilms, textMovie, location) {
  setIsPreloader(true);
  setIsSearchError('');

  mainApi.getMovies()
    .then((res) => {      
      const searchSavedMovies = res;
      localStorage.setItem("searchSavedMovies", JSON.stringify(searchSavedMovies));

      filterMovies(shortsFilms, textMovie, location);

      setIsPreloader(false);
    })
    .catch(() => {
      setIsSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
    });
}

export function initSavedMovies(setIsPreloader, setIsSearchError, setCards, maxCountCards) {
  mainApi.getMovies()
    .then((res) => {      
      const searchSavedMovies = res;
      localStorage.setItem("searchSavedMovies", JSON.stringify(searchSavedMovies));
      const cards = getSearchSavedMovies();
      setCards(cards ? cards.slice().splice(0, maxCountCards) : []);

      const filterFormData = {
        textMovie: '',
        shortsFilms: false,
        cards: cards,
      }
      
      localStorage.setItem("filterFormDataSavedMovies", JSON.stringify(filterFormData));
      
      setIsPreloader(false);
    })
    .catch(() => {
      setIsSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
    });
}


export function filterMovies(shortsFilms, textMovie, location) {
  let cards;

  if (location.pathname === '/movies') cards = getSearchMovies();
  else if (location.pathname === '/saved-movies') cards = getSearchSavedMovies();
  const durationLimit = shortsFilms ? 40 : Infinity;

  const filteredMovies = cards.filter(movie => 
    movie.nameRU.toLowerCase().includes(textMovie.toLowerCase()) &&
    (movie.duration <= durationLimit)
  );
  const filterFormData = {
    textMovie: textMovie,
    shortsFilms: shortsFilms,
    cards: filteredMovies,
  }

  if (location.pathname === '/movies') localStorage.setItem("filterFormData", JSON.stringify(filterFormData));
  else if (location.pathname === '/saved-movies') localStorage.setItem("filterFormDataSavedMovies", JSON.stringify(filterFormData));
}
