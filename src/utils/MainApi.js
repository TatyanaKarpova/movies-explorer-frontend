class MainApi {
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

    getUserProfileInfo(token) {
      this._userProfileInfo = fetch(`${this._baseUrl}/users/me`, {
        headers: { ...this._headers, Authorization: `Bearer ${token}` },
      }).then(this._checkResponse);
      return this._userProfileInfo;
    }
  
    editUserProfileInfo({ name, email }, token) {
      this._editedUserProfileInfo = fetch(`${this._baseUrl}/users/me`, {
        method: "PATCH",
        headers: { ...this._headers, Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          name,
          email,
        }),
      }).then(this._checkResponse);
      return this._editedUserProfileInfo;
    }

    addNewMovie(movieData, token) {
      this._newMovie = fetch(`${this._baseUrl}/movies`, {
        method: "POST",
        headers: { ...this._headers, Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          ...movieData,
        }),
      }).then(this._checkResponse);
      return this._newMovie;
    }

    getSavedMovies(token) {
        this._savedMovies = fetch(`${this._baseUrl}/movies`, {
          method: "GET",
          headers: { ...this._headers, Authorization: `Bearer ${token}` },
        }).then(this._checkResponse);
        return this._savedMovies;
    }
  
    removeSavedMovie(movieId, token) {
      this._removedSavedMovie = fetch(`${this._baseUrl}/movies/${movieId}`, {
        method: "DELETE",
        headers: { ...this._headers, Authorization: `Bearer ${token}` },
      }).then(this._checkResponse);
      return this._removedSavedMovie;
    }

}
  
export const mainApi = new MainApi ({
    baseUrl: "https://movies.explorer.16.nomoredomains.work",
    headers: {
      "Content-Type": "application/json",
    },
});