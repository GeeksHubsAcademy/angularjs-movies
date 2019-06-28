import MoviesSearchModule from './moviesSearch';
import MoviesSearchController from './moviesSearch.controller';
import MoviesSearchComponent from './moviesSearch.component';
import MoviesSearchTemplate from './moviesSearch.html';

describe('MoviesSearch', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MoviesSearchModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MoviesSearchController();
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
      expect(MoviesSearchTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = MoviesSearchComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(MoviesSearchTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MoviesSearchController);
    });
  });
});
