class MoviesApi {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка ${res.status} ${res.statusText}`)
    }
    return res.json();
  }

  getInitMovies() {
    return fetch(`${this._baseUrl}/`)
  }
}

const mviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi;
  