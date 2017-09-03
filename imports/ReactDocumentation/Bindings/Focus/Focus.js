import { PrismCode } from "react-prism";
Focus({
  focusOnInput: false,
  render() {
    <div class="ui segment">
      <h2 class="ui header">focus</h2>
      <a class="anchor active" id="BindingsFocus" />
      <p>
        The focus binding helps you when you need to know or set the focus of an
        element. If you set the component property to true or false, the
        associated element will become focused or unfocused. If the user
        manually focus or unfocus the associated element, the component property
        will be set to true or false accordingly.
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`b="focus: property"`}</PrismCode>

      <h3>focus demo</h3>

      <div class="ui segment basic">
        <div class="ui grid">
          <div class="four wide column">
            <div class="ui fluid input">
              <input
                type="text"
                placeholder="Select this input"
                b="focus: focusOnInput"
              />
            </div>
          </div>
          <div class="four wide column">
            <a class="ui button" b="click: focusOnInput(true)">
              Focus on Input
            </a>
          </div>
          <div class="five wide column">
            <label class="ui red label" b="if: focusOnInput">
              The input has the focus!
            </label>
          </div>
        </div>
      </div>

      <PrismCode component="pre" className="language-javascript">{`Example({
  focusOnInput: false,
  render() {
    <div>
      <input b="focus: focusOnInput" placeholder="Select this input" />
      <button b="click: focusOnInput(true)">Focus on input</button>
      <label b="if: focusOnInput">The input has the focus!</label>
    </div>
  }
})`}</PrismCode>
    </div>;
  }
});
