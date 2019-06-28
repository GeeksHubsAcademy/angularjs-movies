class MoviesListController {
  constructor(params, movieService, $window) {
    this.movies = [];
    const cat = params.category;
    this.name = `Movies ${cat.replace('_', ' ')}`;

    movieService
      .getCategory(cat)
      .then(res => {
        console.log(res);
        this.movies = res.data.results;
      })
      .catch( (error) => {
        // TODO: AVERIGUAR XQ NO VA $location.path o .replace
         $window.location.href = '/movies/top_rated';
      });
  }
}

MoviesListController.$inject = ['$routeParams', 'movieService', '$window'];

export default MoviesListController;
