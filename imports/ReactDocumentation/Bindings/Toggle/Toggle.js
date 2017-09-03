import { PrismCode } from "react-prism";
Toggle({
  show: false,
  render() {
    <div class="ui segment">
      <h2 class="ui header">toggle</h2>
      <a class="anchor active" id="BindingsToggle" />
      <p>Toggle switches a boolean property when the element is clicked.</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`b="focus: property"`}</PrismCode>

      <h3>focus demo</h3>

      <div class="ui segment basic">
        <div class="ui grid">
          <div class="four wide column">
            <a b="toggle: show" class="ui button">
              {" "}
              Toggle Label
            </a>
          </div>
          <div class="four wide column">
            <label b="if: show" class="ui red label">
              It's SO on!
            </label>
          </div>
        </div>
      </div>

      <PrismCode component="pre" className="language-javascript">{`Example({
  show: false,
  render() {
    <div>
      <a b="toggle: show" class="ui button"> Toggle Label</a>
      <label b="if: show" class="ui red label" >It's SO on!</label>
    </div>
  }
})`}</PrismCode>
    </div>;
  }
});
