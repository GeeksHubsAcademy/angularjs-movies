import angular from 'angular';
import loadingComponent from './loading.component';

let loadingModule = angular.module('loading', [])

.component('loading', loadingComponent)

.name;

export default loadingModule;
