class MainApi {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка ${res.status} ${res.statusText}`)
    }
    return res.json();
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      credentials: "include",
      headers: {
        'Content-type': 'application-json'
      },
    }).then(res => this._getResponseData(res));
  }

  addMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-type': 'application-json'
      },
      body: JSON.stringify(data)
    }).then(res => this._getResponseData(res));
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: "include",
      headers: {
        'Content-type': 'application-json'
      },
    }).then(res => this._getResponseData(res));
  }
}


const mainApi = new MainApi({
  baseUrl: 'http://localhost:3001',
});

export default mainApi;
