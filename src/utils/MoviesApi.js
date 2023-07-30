class MoviesApi {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
    _checkResponse(response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    }

    getMovies() {
        this._movies = fetch(this._baseUrl, {
            headers: this._headers,
        }).then(this._checkResponse);
        return this.__movies;
    }
}
  
const moviesApi = new MoviesApi ({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
      "Content-Type": "application/json",
    },
});

export default moviesApi;