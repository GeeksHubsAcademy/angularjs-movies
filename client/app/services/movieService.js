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
      getCategory(category) {
        const validCategories = ['top_rated', 'popular', 'upcoming'];

        if (validCategories.includes(category)) {
          return this.http.get(
            `${this.apiBaseUrl}movie/${category}?api_key=${this.apiKey}`,
          );
        } else {
          return Promise.reject('no valid category');
        }
      }
      getMovie(id) {}
      search(query) {}
    },
  ]).name;

export default module;
