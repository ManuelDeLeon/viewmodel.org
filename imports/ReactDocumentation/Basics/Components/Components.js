import { PrismCode } from "react-prism";
Components({
  render() {
    <div class="ui segment">
      <h2 class="ui header">Components</h2>
      <a class="anchor active" id="BasicsComponents" />
      <p>This is the basic structure of a component:</p>
      <PrismCode component="pre" className="language-javascript">{`Person({
  render() {
    <label>Hello World</label>
  }
})`}</PrismCode>
      <p>
        When you use the Person component it displays "Hello World". As with any
        other component, the render method must have one (and only one) root
        element. They're normal React components so you can use them in your
        existing React applications.
      </p>

      <p>So let's say you have the following components:</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`src/App.js`}</PrismCode>
      <PrismCode component="pre" className="language-javascript">{`App({
  render() {
    <div>

    </div>
  }
})`}</PrismCode>

      <PrismCode
        component="pre"
        className="language-javascript"
      >{`src/Person/Person.js`}</PrismCode>
      <PrismCode component="pre" className="language-javascript">{`Person({
  render() {
    <label>Hello World</label>
  }
})`}</PrismCode>

      <p>To use Person in App you can import the component as usual:</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`src/App.js`}</PrismCode>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`import { Person } from './Person/Person';
App({
  render() {
    <div>
      <Person />
    </div>
  }
})`}</PrismCode>

      <p>
        ViewModel has one convention, if the component is located in a
        sub-folder of the same name (like Person) then you can omit the import:
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`src/App.js`}</PrismCode>
      <PrismCode component="pre" className="language-javascript">{`App({
  render() {
    <div>
      <Person />
    </div>
  }
})`}</PrismCode>

      <hr />
      <h3>Result:</h3>
      <Person />
    </div>;
  }
});
