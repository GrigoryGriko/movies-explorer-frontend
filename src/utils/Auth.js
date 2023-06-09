const BASE_URL = 'https://api.grigorygriko.nomoredomains.monster';

export function _getResponseData(res) {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export function getUserData() {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(res => _getResponseData(res));
}

export function register(name, email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  }).then(res => _getResponseData(res));
}

export function login(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  }).then(res => _getResponseData(res));
}

export function updateProfile(name, email) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email})
  }).then(res => _getResponseData(res));
}

export function signOut() {
  return fetch(`${BASE_URL}/signout`, {
    method: 'GET',
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(res => _getResponseData(res));
}

  