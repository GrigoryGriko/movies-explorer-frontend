import moviesApi from './MoviesApi';


export function getSearchMovies() {
  return JSON.parse(localStorage.getItem("searchMovies"));
}

export function getFilterFormData() {
  return JSON.parse(localStorage.getItem("filterFormData"));
}

export function handleSubmit(e, setIsSearchMovies, setIsPreloader, setIsSearchError, shortsFilms, textMovie) {
  e.preventDefault();
  setIsSearchMovies('Ничего не найдено');
  
  if (!getSearchMovies()) {
    setIsPreloader(true);
    
    moviesApi.getInitMovies()
    .then((res) => {      
      const searchMovies = res;
      localStorage.setItem("searchMovies", JSON.stringify(searchMovies));

      filterMovies(shortsFilms, textMovie);

      setIsPreloader(false);
    })
    .catch(() => {
      setIsSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
    });
  } else {
    setIsPreloader(true);
    filterMovies(shortsFilms, textMovie);
    setIsPreloader(false);
    console.log(getFilterFormData().cards);
  }
}

export function filterMovies(shortsFilms, textMovie) {
  const cards = getSearchMovies();
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
  localStorage.setItem("filterFormData", JSON.stringify(filterFormData));
}
