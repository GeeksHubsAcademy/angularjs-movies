import angular from 'angular';
import movieDetail from './movieDetail/movieDetail';
import moviesList from './moviesList/moviesList';
import moviesSearch from './moviesSearch/moviesSearch';
import navigation from './navigation/navigation';
import moviesDisplay from './moviesDisplay/moviesDisplay';

let componentModule = angular.module('app.components', [
  movieDetail,
  moviesList,
  moviesSearch,
  moviesDisplay,
  navigation,
]).name;

export default componentModule;
