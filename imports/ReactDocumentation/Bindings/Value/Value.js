import { PrismCode } from "react-prism";
Value({
  message: "",
  render() {
    <div class="ui segment">
      <h2 class="ui header">value</h2>
      <a class="anchor active" id="BindingsValue" />
      <p>
        The value binding links the associated DOM element’s value with a
        property on your view model. This is typically useful with form elements
        such as input, select and textarea.
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`b="value: property"`}</PrismCode>

      <h3>value - input type text</h3>

      <div class="ui segment basic">
        <form class="ui fluid form">
          <div class="inline field">
            <input
              b="value: message"
              type="text"
              placeholder="Type something"
            />
            <label b="text: message" class="ui label" />
          </div>
        </form>
      </div>

      <PrismCode component="pre" className="language-javascript">{`Example({
  message: '',
  render() {
    <div>
      <input b="value: message" placeholder="Type something" />
      <label b="text: message" />
    </div>
  }
})`}</PrismCode>
    </div>;
  }
});
