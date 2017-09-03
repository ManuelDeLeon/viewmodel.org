import React from 'react';
import { shallow } from 'enzyme';
import { ExampleShallow } from './ExampleShallow';


describe('ExampleShallow', () => {

  describe('Bindings', ()=> {
    const rendered = shallow(<ExampleShallow />);
    it('binds input', ()=>{
      const elements = rendered.find('input[data-bind="value: text"]');
      expect(elements.length).toBe(1);
    })
  });

});