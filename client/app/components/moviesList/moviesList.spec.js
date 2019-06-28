import MoviesListModule from './moviesList';
import MoviesListController from './moviesList.controller';
import MoviesListComponent from './moviesList.component';
import MoviesListTemplate from './moviesList.html';

describe('MoviesList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MoviesListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MoviesListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(MoviesListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = MoviesListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(MoviesListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MoviesListController);
    });
  });
});
