import { PrismCode } from "react-prism";
Testing({
  render() {
    <div class="ui segment">
      <h2 class="ui header">Testing</h2>
      <a class="anchor active" id="AdvancedTesting" />

      <p>
        This section assumes you've read the{" "}
        <a href="#BasicsTesting">basic testing</a> section.
      </p>

      <h3>data-bind</h3>
      <p>The way you declare bindings is with the attribute "b":</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`<input b="value: text" />`}</PrismCode>

      <p>
        The attribute "b" is rendered on the page as "data-bind" because React
        doesn't allow custom attributes:
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`<input data-bind="value: text" />`}</PrismCode>

      <p>
        That's why you test bindings looking for "data-bind" attributes and not
        "b":
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`const elements = rendered.find('input[data-bind="value: text"]');`}</PrismCode>

      <h3>Shallow rendering</h3>
      <p>
        The default way to test a component is to perform a shallow render. That
        means sub components are not rendered. This keeps the test localized and
        faster. In the following example we have the ExampleShallow component
        which uses the Sub component. Both have an input with the same binding.
        We can test the bindings for ExampleShallow disregarding the Sub
        component.
      </p>

      <h4>Components</h4>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`ExampleShallow({
  text: '',
  render() {
    <div>
      <Sub />
      <input b="value: text" />
    </div>
  }
});`}</PrismCode>

      <PrismCode component="pre" className="language-javascript">{`Sub({
  text: '',
  render() {
    <div>
      <input b="value: text"/>
    </div>
  }
})`}</PrismCode>

      <h4>Test</h4>

      <PrismCode
        component="pre"
        className="language-javascript"
      >{`import React from 'react';
import { ExampleShallow } from './ExampleShallow';
import { shallow } from 'enzyme';

describe('ExampleShallow', () => {

  describe('Bindings', ()=> {
    const rendered = shallow(<ExampleShallow />);
    it('binds input', ()=>{
      const elements = rendered.find('input[data-bind="value: text"]');
      expect(elements.length).toBe(1);
    })
  });

});`}</PrismCode>

      <p>
        In the previous example we check that there's one input element bound to
        the text property, even though a child component also has an input with
        the same binding. Children are ignored.
      </p>

      <h3>Sub-Components</h3>
      <p>
        The sub-components aren't rendered but we can still check we're
        using/calling them correctly. In the following example we check that Sub
        has the appropriate reference (ref="subText") and prop (message="Yay").
      </p>

      <h4>Components</h4>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`Subcomponents({
  render() {
    <div>
      <Sub ref="subText" message="Yay" />
    </div>
  }
});`}</PrismCode>

      <PrismCode component="pre" className="language-javascript">{`Sub({
  message: '',
  render() {
    <div b="text: message" />
  }
})`}</PrismCode>

      <h4>Test</h4>

      <PrismCode
        component="pre"
        className="language-javascript"
      >{`import React from 'react';
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
});`}</PrismCode>

      <h3>Structural Changes</h3>
      <p>
        When testing bindings that change the structure of the markup (if,
        repeat, etc.) you need to setup the state of the component so the
        elements appear on the page. In the following example we render the
        Structure component and set the properties "showSub" and "colors" so
        they're rendered too.
      </p>

      <h4>Components</h4>
      <PrismCode component="pre" className="language-javascript">{`Structure({
  showSub: false,
  colors: [],
  render() {
    <div>
      <Sub b="if: showSub" />
      <div b="repeat: colors, text: repeatObject" />
    </div>
  }
});`}</PrismCode>

      <PrismCode component="pre" className="language-javascript">{`Sub({
  render() {
    <div>Hello</div>
  }
})`}</PrismCode>

      <h4>Test</h4>

      <PrismCode
        component="pre"
        className="language-javascript"
      >{`import React from 'react';
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
});`}</PrismCode>

      <h3>Mixins/Shares/Signals</h3>
      <p>
        You can test mixins, shares, and signals by loading them in a new
        component. Let's say you have the following mixin:
      </p>

      <PrismCode
        component="pre"
        className="language-javascript"
      >{`UserMixin.js`}</PrismCode>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`import ViewModel from 'viewmodel-react';

ViewModel.mixin({
  user: {
    logged: false,
    username: ViewModel.property.string.notBlank
  }
});`}</PrismCode>

      <p>
        You can test it as you do with components by loading it with
        `ViewModel.loadComponents`:
      </p>

      <PrismCode
        component="pre"
        className="language-javascript"
      >{`UserMixin.test.js`}</PrismCode>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`import './UserMixin';
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

});`}</PrismCode>

      <h3>Component uses mixin/share/signal</h3>
      <p>
        You can test if a component uses a mixin/share/signal with the
        hasMixin/hasShare/hasSignal methods.
      </p>

      <p>
        If you're loading the mixin to the root of the component you can use:
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`component.hasMixin('mixinContainerName')`}</PrismCode>

      <p>
        If you're loading the mixin to a property of the component you can use:
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`component.hasMixin('mixinContainerName', 'nameOfTheProperty')`}</PrismCode>

      <h4>Components</h4>
      <PrismCode component="pre" className="language-javascript">{`App({
  mixin: {
    user: 'user'
  },
  render() {
    <div />
  }
})`}</PrismCode>

      <h4>Test</h4>

      <PrismCode
        component="pre"
        className="language-javascript"
      >{`import { App } from './App';

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

});`}</PrismCode>
    </div>;
  }
});
