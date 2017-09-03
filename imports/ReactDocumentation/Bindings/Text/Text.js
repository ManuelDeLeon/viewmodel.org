import { PrismCode } from "react-prism";
Text({
  message: "Can it be <b>bold</b>?",
  render() {
    <div class="ui segment">
      <h2 class="ui header">text</h2>
      <a class="anchor active" id="BindingsText" />
      <p>
        The text binding causes the html element to display the text returned by
        the given function/property.
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`b="text: property"`}</PrismCode>

      <h3>text demo</h3>

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
  message: 'Can it be <b>bold</b>?',
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
