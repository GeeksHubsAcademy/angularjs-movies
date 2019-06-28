import template from './moviesList.html';
import controller from './moviesList.controller';
import './moviesList.scss';

let moviesListComponent = {
  bindings: {},
  template,
  controller //: ['$routeParams', controller],
};

export default moviesListComponent;
