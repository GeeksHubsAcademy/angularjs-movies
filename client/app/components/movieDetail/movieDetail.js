import angular from 'angular';
import movieDetailComponent from './movieDetail.component';

let movieDetailModule = angular.module('movieDetail', [])

.component('movieDetail', movieDetailComponent)

.name;

export default movieDetailModule;
