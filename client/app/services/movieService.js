import angular from 'angular';

let module = angular
  .module('movieServiceModule', [])

  .service('movieService', [
    '$http',
    class ApiService {
      apiBaseUrl = 'https://api.themoviedb.org/3/';
      apiKey = '323112ea2281b9eb70f319f4df422c6b';

      constructor(http) {
        this.http = http;
      }
      getCategory(category, page = 1) {
        const validCategories = ['top_rated', 'popular', 'upcoming'];

        if (validCategories.includes(category)) {
          return this.http.get(
            `${this.apiBaseUrl}movie/${category}?api_key=${
              this.apiKey
            }&page=${page}`,
          );
        } else {
          return Promise.reject('no valid category');
        }
      }
      getMovie(id) {
        return this.http.get(
          `${this.apiBaseUrl}movie/${id}?api_key=${this.apiKey}`,
        );
      }
      search(query) {}
    },
  ]).name;

export default module;
