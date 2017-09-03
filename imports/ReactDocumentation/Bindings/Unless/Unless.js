import { PrismCode } from "react-prism";
Unless({
  itsOn: false,
  render() {
    <div class="ui segment">
      <h2 class="ui header">unless</h2>
      <a class="anchor active" id="BindingsUnless" />
      <p>
        The unless binding causes the html element to appear on screen or not,
        depending on the value of the bound property.
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`b="unless: property"`}</PrismCode>

      <h3>unless demo</h3>

      <div class="ui segment basic">
        <input b="check: itsOn" type="checkbox" /> Is it on? &nbsp;&nbsp;
        <label class="ui red label" b="unless: itsOn">
          It's not on.
        </label>
      </div>

      <PrismCode component="pre" className="language-javascript">{`Example({
  itsOn: false,
  render() {
    <div>
      <input b="check: itsOn" type="checkbox" /> Is it on?
      <label b="unless: itsOn" class="ui red label">It's not on.</label>
    </div>
  }
})`}</PrismCode>
    </div>;
  }
});
