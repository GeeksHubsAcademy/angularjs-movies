import MovieDetailModule from './movieDetail';
import MovieDetailController from './movieDetail.controller';
import MovieDetailComponent from './movieDetail.component';
import MovieDetailTemplate from './movieDetail.html';

describe('MovieDetail', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MovieDetailModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MovieDetailController();
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
      expect(MovieDetailTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = MovieDetailComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(MovieDetailTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MovieDetailController);
    });
  });
});
