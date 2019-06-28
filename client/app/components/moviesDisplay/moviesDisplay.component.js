import template from './moviesDisplay.html';
import controller from './moviesDisplay.controller';
import './moviesDisplay.scss';

let moviesDisplayComponent = {
  bindings: {
    movies: '<',
  },
  template,
  controller
};

export default moviesDisplayComponent;
