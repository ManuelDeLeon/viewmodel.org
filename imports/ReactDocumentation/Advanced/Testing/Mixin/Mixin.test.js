import './Mixin';
import ViewModel from 'viewmodel-react';

describe('user mixin', () => {

  let vm;
  beforeEach(() => {
    vm = ViewModel.loadComponent({
      mixin: 'user'
    });
  });

  describe('logged', () => {
    it('defaults to false', () => {
      expect(vm.logged()).toBe(false);
    });
  });

  describe('username', () => {
    it('defaults to empty', () => {
      expect(vm.username()).toBe('');
    });

    it("is invalid with ''", () => {
      expect(vm.username.valid()).toBe(false);
    });

    it("is valid with 'A'", () => {
      vm.username('A');
      expect(vm.username.valid()).toBe(true);
    });
  });

});