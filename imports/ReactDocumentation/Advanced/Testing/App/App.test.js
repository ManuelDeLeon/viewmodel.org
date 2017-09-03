import { App } from './App';

describe('App', () => {

  describe('view model', () => {
    let app;
    beforeEach(() => {
      app = new App();
    });

    it("has mixin user", () => {
      expect(app.hasMixin('user', 'user')).toBe(true);
    });

  });

});