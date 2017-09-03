import { PrismCode } from "react-prism";
Load({
  render() {
    <div class="ui segment">
      <h2 class="ui header">.load</h2>
      <a class="anchor active" id="AdvancedLoad" />
      <p>
        This method loads a plain javascript object or array of objects into the
        viewmodel. New properties are appended and existing properties load the
        new values.
      </p>

      <PrismCode
        component="pre"
        className="language-javascript"
      >{`component.load(obj)`}</PrismCode>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`component.load(arrayOfObjects)`}</PrismCode>

      <h3>Example 1</h3>
      <PrismCode component="pre" className="language-javascript">{`Person({
  first: '', // starts with only first and it's empty
  loadSampleData() {
    this.load({ first: 'Alan', last: 'Brito' });
    // The component now has the properties 'first' and 'last'
    // { first: 'Alan', last: 'Brito' }
  },
  render() {
    <div />
  }
})`}</PrismCode>

      <h3>Example 2</h3>
      <p>
        You can also load multiple objects when you define your component. Each
        of them can define their own autorun(s), onCreated, onRendered, and
        onDestroyed, as well as other hooks like share and mixin.
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`import { person, address} from './common';
Person({
  created() {
    this.load([person, address]);
  },
  render() {
    <div />
  }
})`}</PrismCode>

      <p>The last example can be simplified a bit:</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`import { person, address} from './common';
Person({
  load: [person, address],
  render() {
    <div />
  }
})`}</PrismCode>
    </div>;
  }
});
