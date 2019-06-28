class MoviesListController {
  constructor(params, movieService, $location) {
    console.log(params,  $location);
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
        // TODO: AVERIGUAR XQ NO VA $location
        location.replace('/movies/top_rated');
        // console.error(error);
      });
  }
}

MoviesListController.$inject = ['$routeParams', 'movieService', '$location'];

export default MoviesListController;
