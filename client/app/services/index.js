import angular from 'angular';
import movieModule from './movieService';

export default angular.module('services', [movieModule]).name;
