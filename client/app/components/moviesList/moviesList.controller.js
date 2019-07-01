class MoviesListController {
  constructor(params, movieService, $window) {
    this.movieService = movieService;
    this.movies = [];
    this.cat = params.category;
    this.name = `Movies ${this.cat.replace('_', ' ')}`;
    this.page = 1;
    this.totalPages = 2;
    this.loading = false;
  }


  getMovies () {
    if (this.totalPages >= this.page) {
       this.loading = true;
       this.movieService
         .getCategory(this.cat, this.page)
         .then(res => {
           console.log(res);
           this.movies = [...this.movies, ...res.data.results];
           this.totalPages = res.data.total_pages;
           this.page++;
         })
         .catch(error => {
           // TODO: AVERIGUAR XQ NO VA $location.path o .replace
           $window.location.href = '/movies/top_rated';
         })
         .finally(() => this.loading = false);
    }

  }
}

MoviesListController.$inject = ['$routeParams', 'movieService', '$window'];

export default MoviesListController;
