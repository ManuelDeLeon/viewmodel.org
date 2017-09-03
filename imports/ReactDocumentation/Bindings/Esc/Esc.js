import { PrismCode } from "react-prism";
Esc({
  message: "",
  show: false,
  render() {
    <div class="ui segment">
      <h2 class="ui header">esc</h2>
      <a class="anchor active" id="BindingsEsc" />
      <p>
        It runs the given function when the escape key is pressed on the input
        element.
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`b="esc: function"`}</PrismCode>

      <h3>esc demo</h3>

      <div class="ui segment basic">
        <div class="ui grid">
          <div class="eight wide column">
            <div class="ui fluid input">
              <input
                type="text"
                b="value: message, esc: show(true), change: show(false)"
                placeholder="Type something and press escape"
              />
            </div>
          </div>
          <div class="four wide column">
            <label class="ui label" b="if: show">
              ESCAPE!
            </label>
          </div>
        </div>
      </div>

      <PrismCode component="pre" className="language-javascript">{`Example({
  message: '',
  show: false,
  render() {
    <div>
      <input b="value: message, esc: show(true), change: show(false)" />
      <label b="if: show">ESCAPE!</label>
    </div>
  }
})`}</PrismCode>
    </div>;
  }
});
