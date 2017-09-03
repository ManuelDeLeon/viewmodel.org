import { PrismCode } from "react-prism";
Created({
  render() {
    <div class="ui segment">
      <h2 class="ui header">created</h2>
      <a class="anchor active" id="AdvancedCreated" />
      <p>The created function will run right after the component is created.</p>
      <PrismCode component="pre" className="language-javascript">{`Example({
  created() {
    // Do Something
  },
  render() {
    <div />
  }
})`}</PrismCode>

      <p>To add multiple created methods you can use an array of functions.</p>

      <PrismCode component="pre" className="language-javascript">{`Example({
  name: '',
  age: 0,
  created: [
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
    </div>;
  }
});
