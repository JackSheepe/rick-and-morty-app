export default class Api {
  constructor(options) {
    this._options = options;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getCharacters() {
    return fetch(`${this._options.baseUrl}/character`).then((res) =>
      this._getResponseData(res)
    );
  }
}

export const api = new Api({
  baseUrl: "https://rickandmortyapi.com/api",
});
