import angular from 'angular';
import navigationComponent from './navigation.component';

let navigationModule = angular.module('navigation', [])

.component('navigation', navigationComponent)

.name;

export default navigationModule;
