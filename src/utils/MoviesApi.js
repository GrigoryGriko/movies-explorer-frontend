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
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => this._getResponseData(res));
  }
}


const moviesApi = new MoviesApi({
  baseUrl: 'http://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi;
  