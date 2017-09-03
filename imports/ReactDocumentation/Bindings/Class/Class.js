import { PrismCode } from "react-prism";
Class({
  showBasic: false,
  showRed: false,
  buttonCss: "basic red",
  render() {
    <div class="ui segment">
      <h2 class="ui header">class</h2>
      <a class="anchor active" id="BindingsClass" />
      <p>
        The class binding allows you to change the class attribute of an
        element. It can apply a single class or multiple ones.
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`b="class: { cssClass: property }"`}</PrismCode>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`b="class: property"`}</PrismCode>
      <hr />
      <h3>class - with object</h3>

      <div class="ui segment">
        <form class="ui form">
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" b="check: showBasic" />
              <label>Basic</label>
            </div>
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" b="check: showRed" />
              <label>Red</label>
            </div>
          </div>
          <a class="ui button" b="class: { basic: showBasic, red: showRed }">
            The Button
          </a>
        </form>
      </div>

      <PrismCode component="pre" className="language-javascript">{`Example({
  showBasic: false,
  showRed: false,
  render() {
    <div>
      <input b="check: showBasic" type="checkbox" /> <label>Basic</label>
      <input b="check: showRed" type="checkbox" /> <label>Red</label>
      <button b="class: { basic: showBasic, red: showRed }" >The Button</button>
    </div>
  }
})`}</PrismCode>

      <hr />
      <h3>class - with property</h3>

      <div class="ui segment">
        <form class="ui form">
          <div class="field">
            <label>Button Class</label>
            <input type="text" b="value: buttonCss" />
          </div>
          <a class="ui button" b="class: buttonCss">
            The Button
          </a>
        </form>
      </div>

      <PrismCode component="pre" className="language-javascript">{`Example({
  buttonCss: 'basic red',
  render() {
    <div>
      <label>Button Class</label>
      <input type="text" b="value: buttonCss" />
      <button b="class: buttonCss" >The Button</button>
    </div>
  }
})`}</PrismCode>
    </div>;
  }
});
