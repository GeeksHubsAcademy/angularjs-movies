class MovieDetailController {
  constructor($routeParams, movieService, $scope) {
    this.$scope = $scope;
    this.imageBase = 'https://image.tmdb.org/t/p/w500';

    this.movieService = movieService;
    this.movie = null;
    this.error = null
    this.getMovie($routeParams.id).catch(  error => {

      if (error.status === 404)  {
        this.error = 'Movie not found';

      } else {
        this.error = 'Upps! try again later. My fault';

      }
      $scope.$apply();
    })


    // this.movieService
    //   .getMovie($routeParams.id)
    //   .then(result => (this.movie = result.data))
    //   .catch(console.error);
  }

  getMovie = async (id) =>  {
    let response = await this.movieService.getMovie(id);
    this.movie =  response.data;
    console.log(this.movie);
    this.$scope.$apply();

  };
}

MovieDetailController.$inject = ['$routeParams', 'movieService', '$scope'];

export default MovieDetailController;
