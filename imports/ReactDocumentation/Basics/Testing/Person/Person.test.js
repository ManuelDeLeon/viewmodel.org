import React from 'react';
import { shallow } from 'enzyme';
import { Person } from './Person';

describe('Person', () => {
  describe('view model', () => {
    let person;
    beforeEach(() => {
      person = new Person();
    });

    describe('firstName', () => {
      it('defaults to empty', () => {
        expect(person.firstName()).toBe('');
      });

      it("is invalid with ''", () => {
        expect(person.firstName.valid()).toBe(false);
      });

      it("is valid with 'A'", () => {
        person.firstName('A');
        expect(person.firstName.valid()).toBe(true);
      });
    });

    describe('lastName', () => {
      it('defaults to empty', () => {
        expect(person.lastName()).toBe('');
      });

      it("is invalid with ''", () => {
        expect(person.lastName.valid()).toBe(false);
      });

      it("is valid with 'A'", () => {
        person.lastName('A');
        expect(person.lastName.valid()).toBe(true);
      });
    });

    describe('fullName', () => {
      it('returns first + last', () => {
        person.firstName('A');
        person.lastName('B');
        expect(person.fullName()).toBe('A B');
      });
    });

  });

  describe('bindings', ()=>{
    const rendered = shallow(<Person />);

    it('binds first name', ()=>{
      const elements = rendered.find('input[data-bind="value: firstName"]');
      expect(elements.length).toBe(1);
    });

    it('binds last name', ()=>{
      const elements = rendered.find('input[data-bind="value: lastName"]');
      expect(elements.length).toBe(1);
    });

    it('binds reset button', ()=>{
      const elements = rendered.find('button[data-bind="click: reset, enable: valid"]');
      expect(elements.length).toBe(1);
    })
  })

});