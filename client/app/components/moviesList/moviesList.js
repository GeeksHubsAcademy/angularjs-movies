import angular from 'angular';
import moviesListComponent from './moviesList.component';

let moviesListModule = angular.module('moviesList', [])

.component('moviesList', moviesListComponent)

.name;

export default moviesListModule;
