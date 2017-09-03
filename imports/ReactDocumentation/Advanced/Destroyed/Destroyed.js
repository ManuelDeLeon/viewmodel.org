import { PrismCode } from "react-prism";
Destroyed({
  render() {
    <div class="ui segment">
      <h2 class="ui header">destroyed</h2>
      <a class="anchor active" id="AdvancedDestroyed" />
      <p>
        The destroyed function will run right after the component is created.
      </p>
      <PrismCode component="pre" className="language-javascript">{`Example({
  destroyed() {
    // Do Something
  },
  render() {
    <div />
  }
})`}</PrismCode>

      <p>
        To add multiple destroyed methods you can use an array of functions.
      </p>

      <PrismCode component="pre" className="language-javascript">{`Example({
  name: '',
  age: 0,
  destroyed: [
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
