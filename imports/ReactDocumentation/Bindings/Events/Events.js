import { PrismCode } from "react-prism";
Events({
  render() {
    <div class="ui segment">
      <h2 class="ui header">Events</h2>
      <a class="anchor active" id="BindingsEvents" />
      <p>
        You can use any element event when you define a binding. For example:
      </p>
      <PrismCode component="pre" className="language-javascript">{`Example({
  doSomething(event) {
    // handle mouseover event
  }
  render() {
    <button b="mouseover: doSomething" />
  }
})`}</PrismCode>

      <p>
        In fact, there is no `click` binding. When you use `click: doSomething`,
        ViewModel looks for a binding named 'click', it doesn't find it, and
        thus wires up the click event on the element.
      </p>
    </div>;
  }
});
