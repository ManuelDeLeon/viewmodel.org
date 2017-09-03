import React from 'react';
import { shallow } from 'enzyme';
import { Structure } from './Structure';
import { Sub } from './Sub/Sub'

describe('Structure', () => {

  describe('Bindings', ()=> {
    const rendered = shallow(<Structure showSub={true} colors={['red']} />);

    it('binds Sub', ()=> {
      const element = rendered.find(Sub).first();
      expect(element.prop('data-bind')).toBe("if: showSub");
    });

    it('repeats colors', ()=> {
      const elements = rendered.find('div[data-bind="repeat: colors, text: repeatObject"]');
      expect(elements.length).toBe(1);
    })

  });
});