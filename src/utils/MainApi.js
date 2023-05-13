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

  addMovie({
    name,
    imageURL,
    trailerLink,
    duration
  }) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      /*credentials: "include",*/
      headers: {
        'Content-type': 'application-json'
      },
    }).then(res => this._getResponseData(res));
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      /*credentials: "include",*/
      headers: {
        'Content-type': 'application-json'
      },
    }).then(res => this._getResponseData(res));
  }
}


const mainApi = new MainApi({
  baseUrl: 'https://api.grigorygriko.nomoredomains.monster',
});

export default mainApi;
