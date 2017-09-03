import { PrismCode } from "react-prism";
Enter({
  message: "",
  show: false,
  render() {
    <div class="ui segment">
      <h2 class="ui header">enter</h2>
      <a class="anchor active" id="BindingsEnter" />
      <p>
        It runs the given function when the enter/return key is pressed on the
        input element.
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`b="enter: function"`}</PrismCode>

      <h3>enter demo</h3>

      <div class="ui segment basic">
        <div class="ui grid">
          <div class="eight wide column">
            <div class="ui fluid input">
              <input
                type="text"
                b="value: message, enter: show(true), change: show(false)"
                placeholder="Type something and press enter"
              />
            </div>
          </div>
          <div class="four wide column">
            <label class="ui label" b="if: show">
              ENTER!
            </label>
          </div>
        </div>
      </div>

      <PrismCode component="pre" className="language-javascript">{`Example({
  message: '',
  show: false,
  render() {
    <div>
      <input b="value: message, enter: show(true), change: show(false)" />
      <label b="if: show">ENTER!</label>
    </div>
  }
})`}</PrismCode>
    </div>;
  }
});
