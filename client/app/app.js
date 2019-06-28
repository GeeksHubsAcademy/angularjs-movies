import angular from 'angular';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';


angular.module('app', [
    Components,
  ])
  .config(()=>{})

  .component('app', AppComponent);
