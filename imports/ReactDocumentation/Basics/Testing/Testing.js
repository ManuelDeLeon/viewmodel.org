import { PrismCode } from "react-prism";
Testing({
  render() {
    <div class="ui segment">
      <h2 class="ui header">Testing</h2>
      <a class="anchor active" id="BasicsTesting" />

      <p>With ViewModel you test 2 things:</p>
      <ol>
        <li>The component's properties and methods work correctly.</li>
        <li>The bindings map to the right properties and methods.</li>
      </ol>

      <p>Here's what you don't have to do:</p>

      <ul>
        <li>
          Make brittle snapshots that need to be approved whenever you make
          small changes to the markup.
        </li>
        <li>
          Test all permutations of your UI. (Fill A then click button, fill A
          and B then click button, etc.)
        </li>
        <li>Trigger events to test that something happens after an event.</li>
        <li>Add ids to elements for testing purposes.</li>
      </ul>

      <p>Let's say you have the following component:</p>
      <hr />
      <Person />
      <hr />

      <PrismCode component="pre" className="language-javascript">{`Person({
  firstName: ViewModel.property.string.notBlank,
  lastName: ViewModel.property.string.notBlank,
  fullName() {
    return this.firstName() + ' ' + this.lastName();
  },
  render() {
    <form class="ui form" style="width: 40%">
      <div class="field">
        <label>First Name:</label>
        <input type="text" b="value: firstName"/>
      </div>
      <div class="field">
        <label>Last Name:</label>
        <input type="text" b="value: lastName"/>
      </div>
      <div class="field">
        <label b="text: 'Hello ' + fullName"/>
      </div>
      <button class="ui blue button" b="click: reset, enable: valid">Reset Fields</button>
    </form>
  }
})`}</PrismCode>

      <p>
        Let's use <a href="https://facebook.github.io/jest/">Jest</a> and{" "}
        <a href="http://airbnb.io/enzyme/">Enzyme</a> to test that component.
      </p>

      <p>First let's install Jest and Enzyme:</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`npm install --save-dev jest-cli babel-jest babel-polyfill react-addons-test-utils react-test-renderer enzyme`}</PrismCode>

      <p>For convenience let's add jest as a test script in package.json:</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`  "scripts": {
    "test": "jest"
  },`}</PrismCode>

      <p>And now create the test file:</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`import React from 'react';
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

});`}</PrismCode>

      <p>
        I use Jest because it's simple but of course you can use any other
        testing framework. I use the following Jest configuration (in
        package.json):
      </p>
      <PrismCode component="pre" className="language-javascript">{`  "jest": {
    "testPathDirs": [
      "src/"
    ]
  }`}</PrismCode>

      <p>That allows me to co-locate the tests with their components:</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`./Person/Person.js
./Person/Person.test.js`}</PrismCode>
    </div>;
  }
});
