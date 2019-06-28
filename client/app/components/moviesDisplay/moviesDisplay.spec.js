import MoviesDisplayModule from './moviesDisplay';
import MoviesDisplayController from './moviesDisplay.controller';
import MoviesDisplayComponent from './moviesDisplay.component';
import MoviesDisplayTemplate from './moviesDisplay.html';

describe('MoviesDisplay', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MoviesDisplayModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MoviesDisplayController();
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
      expect(MoviesDisplayTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = MoviesDisplayComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(MoviesDisplayTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MoviesDisplayController);
    });
  });
});
