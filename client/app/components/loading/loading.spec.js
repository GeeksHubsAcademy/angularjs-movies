import LoadingModule from './loading';
import LoadingController from './loading.controller';
import LoadingComponent from './loading.component';
import LoadingTemplate from './loading.html';

describe('Loading', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LoadingModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LoadingController();
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
      expect(LoadingTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = LoadingComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(LoadingTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(LoadingController);
    });
  });
});
