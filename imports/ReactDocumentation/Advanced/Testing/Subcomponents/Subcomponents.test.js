import React from 'react';
import { shallow } from 'enzyme';
import { Subcomponents } from './Subcomponents';
import { Sub } from './Sub/Sub'

describe('Subcomponents', () => {

  describe('Bindings', ()=> {
    const rendered = shallow(<Subcomponents />);

    describe('Sub', ()=> {
      const element = rendered.find(Sub).first();

      it('ref', ()=> {
        expect(element.node.ref).toBe("subText");
      });

      it('message', ()=> {
        expect(element.prop('message')).toBe("Yay");
      })

    });
  });
});