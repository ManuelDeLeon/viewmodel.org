import { PrismCode } from "react-prism";
Html({
  message: "Can it be a <strike>strike</strike>?",
  render() {
    <div class="ui segment">
      <h2 class="ui header">html</h2>
      <a class="anchor active" id="BindingsHtml" />
      <p>
        The text binding causes the html element to display the html returned by
        the given function/property.
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`b="html: property"`}</PrismCode>

      <h3>text demo</h3>

      <div class="ui segment basic">
        <form class="ui fluid form">
          <div class="inline field">
            <input
              b="value: message"
              type="text"
              placeholder="Type something"
              style="width: 250px"
            />
            <label b="html: message" class="ui label" />
          </div>
        </form>
      </div>

      <PrismCode component="pre" className="language-javascript">{`Example({
  message: 'Can it be a <strike>strike</strike>?',
  render() {
    <div>
      <input b="value: message" placeholder="Type something" />
      <label b="html: message" />
    </div>
  }
})`}</PrismCode>
    </div>;
  }
});
