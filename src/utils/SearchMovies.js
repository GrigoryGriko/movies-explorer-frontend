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
    setIsPreloader, 
    setIsSearchError, 
    shortsFilms, 
    textMovie
  ) {
  e.preventDefault();
  
  if (location.pathname === '/movies') {
    reqMovies(setIsPreloader, setIsSearchError, shortsFilms, textMovie, location);
  } else if (location.pathname === '/saved-movies') {
    reqSaveMovies(setIsPreloader, setIsSearchError, shortsFilms, textMovie, location);
  }
}

function reqMovies(setIsPreloader, setIsSearchError, shortsFilms, textMovie, location) {
  if (!getSearchMovies()) {
    setIsPreloader(true);
    
    moviesApi.getInitMovies()
    .then((res) => {      
      const searchMovies = res;
      localStorage.setItem("searchMovies", JSON.stringify(searchMovies));

      filterMovies(shortsFilms, textMovie, location);

      setIsPreloader(false);
    })
    .catch(() => {
      setIsSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
    });
  } else {
    setIsPreloader(true);
    filterMovies(shortsFilms, textMovie, location);
    setIsPreloader(false);
  }
}

function reqSaveMovies(setIsPreloader, setIsSearchError, shortsFilms, textMovie, location) {
  if (!getSearchSavedMovies()) {
    setIsPreloader(true);
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
  } else {
    setIsPreloader(true);
    filterMovies(shortsFilms, textMovie, location);
    setIsPreloader(false);
    console.log(getFilterFormDataSavedMovies().cards);
  }
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
