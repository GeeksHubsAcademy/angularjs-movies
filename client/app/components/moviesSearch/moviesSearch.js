import angular from 'angular';
import moviesSearchComponent from './moviesSearch.component';

let moviesSearchModule = angular.module('moviesSearch', [])

.component('moviesSearch', moviesSearchComponent)

.name;

export default moviesSearchModule;
