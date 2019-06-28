import angular from 'angular';
import moviesDisplayComponent from './moviesDisplay.component';

let moviesDisplayModule = angular.module('moviesDisplay', [])

.component('moviesDisplay', moviesDisplayComponent)

.name;

export default moviesDisplayModule;
