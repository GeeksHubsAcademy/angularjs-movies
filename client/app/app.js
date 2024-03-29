import angular from 'angular';
import ngRoute from 'angular-route';
import Components from './components/components';
import Services from './services';
import Filters from './filters';
import AppComponent from './app.component';
import angularInview from 'angular-inview';
import 'normalize.css';

angular
  .module('app', [ngRoute, Components, Services, Filters, angularInview])
  .config([
    '$routeProvider',
    $routeProvider => {
      $routeProvider
        .when('/movies/search', {
          template: '<movies-search></movies-search>',
        })
        .when('/movies/:category?', {
          template: '<movies-list></movies-list>',
        })
        .when('/movie/:id', {
          template: '<movie-detail></movie-detail>',
        })

        .otherwise({ redirectTo: '/movies/top_rated' });
    },
  ])
  .config(['$locationProvider', lp => lp.html5Mode(true)])
  .component('app', AppComponent);
