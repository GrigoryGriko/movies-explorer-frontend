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
}


const mainApi = new MainApi({
  baseUrl: 'https://api.grigorygriko.nomoredomains.monster',
});

export default mainApi;
