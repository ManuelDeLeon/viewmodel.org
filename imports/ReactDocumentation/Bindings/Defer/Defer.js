import { PrismCode } from "react-prism";
Defer({
  show: false,
  render() {
    <div class="ui segment">
      <h2 class="ui header">defer</h2>
      <a class="anchor active" id="BindingsDefer" />
      <p>
        If you're using WebPack, Meteor, or any other build that supports
        dynamic imports, you can use the defer binding to postpone loading a
        component on the client until a certain condition is true. This is a
        very convenient way to split a large application by major components.
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`b="defer: property"`}</PrismCode>

      <p>
        In the following example the component Hello won't be loaded on the
        client until the user ticks the checkbox (making "show" to be true).
      </p>

      <PrismCode component="pre" className="language-javascript">{`Hello({
  render(){
    <h1>Hello</h1>
  }
})

Example({
  show: false,
  render() {
    <div>
      <input b="check: show" type="checkbox" /> Show Greeting
      <Hello b="defer: show" />
    </div>
  }
})`}</PrismCode>

      <hr />
      <p>
        For more information see{" "}
        <a href="#AdvancedDynamicLoading">Dynamic Loading</a>.
      </p>
    </div>;
  }
});
