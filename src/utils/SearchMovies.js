export function getSearchMovies() {
  return JSON.parse(localStorage.getItem("searchMovies"));
}

export function getFilterFormData() {
  return JSON.parse(localStorage.getItem("filterFormData"));
}
