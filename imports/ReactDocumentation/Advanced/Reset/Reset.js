import { PrismCode } from "react-prism";
Reset({
  render() {
    <div class="ui segment">
      <h2 class="ui header">.reset</h2>
      <a class="anchor active" id="AdvancedReset" />

      <p>
        You can reset all properties in a view model to their default values
        with the .reset method.
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`viewmodel.reset()`}</PrismCode>

      <h3>reset demo</h3>
      <Person />
      <hr />

      <PrismCode component="pre" className="language-javascript">{`Person({
  firstName: '',
  lastName: 'n/a',
  render() {
    <form class="ui form" style="width: 40%">
      <div class="field">
        <label>First Name:</label>
        <input type="text" b="value: firstName"/>
      </div>
      <div class="field">
        <label>Last Name:</label>
        <input type="text" b="value: lastName"/>
      </div>
      <button type="button" b="click: reset">Reset Fields</button>
    </form>
  }
})`}</PrismCode>

      <p>
        Related: <a href="#AdvancedProperties">properties</a>
      </p>
    </div>;
  }
});
