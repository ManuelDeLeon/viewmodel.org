import { PrismCode } from "react-prism";
Rendered({
  render() {
    <div class="ui segment">
      <h2 class="ui header">rendered</h2>
      <a class="anchor active" id="AdvancedRendered" />
      <p>
        The rendered function will run after the component has been rendered on
        the page and all bindings have been applied. This is particularly useful
        to setup custom js controls.
      </p>
      <PrismCode component="pre" className="language-javascript">{`Example({
  rendered() {
    // Do Something
  },
  render() {
    <div />
  }
})`}</PrismCode>

      <p>To add multiple rendered methods you can use an array of functions.</p>

      <PrismCode component="pre" className="language-javascript">{`Example({
  name: '',
  age: 0,
  rendered: [
    function() {
      console.log("The name is now: " + this.name());
    },
    function() {
      console.log("The age is now: " + this.age());
    }
  ],
  render() {
    <div />
  }
})`}</PrismCode>

      <h3>rendered - example</h3>
      <PrismCode component="pre" className="language-javascript">{`Example({
  rendered(){
    $(this.nameInput).makeFancy()
  },
  render() {
    <input b="value: name, ref: nameInput" />
  }
})`}</PrismCode>
    </div>;
  }
});
