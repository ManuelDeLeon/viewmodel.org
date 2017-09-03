import { PrismCode } from "react-prism";
import ReactDOM from "react-dom";

StateOnURL({
  onUrl: "color",
  color: "",
  render() {
    <div class="ui segment">
      <h2 class="ui header">State on URL</h2>
      <a class="anchor active" id="AdvancedStateOnURL" />
      <p>
        ViewModel allows you to save the state of the UI on the URL. That means
        if the user refreshes the page or copy/pastes the URL, their state is
        preserved. To do this use the 'onUrl' property and pass a string with
        the name of the property you want on the URL or an array with the names
        you want on the URL. The data is not encrypted so don't put sensitive
        information on the url.
      </p>
      <PrismCode component="pre" className="language-javascript">{`Example({
  onUrl: 'propertyToSaveOnUrl',
  render() {
    <div />
  }
})`}</PrismCode>
      <PrismCode component="pre" className="language-javascript">{`Example({
  onUrl: [ 'property_1_ToSaveOnUrl', 'property_2_ToSaveOnUrl', ... ],
  render() {
    <div />
  }
})`}</PrismCode>

      <h3>State on URL demo:</h3>
      <p>
        Select a color and refresh the browser. Your selection will persist.
      </p>
      <form class="ui form">
        <div class="field">
          <div class="ui radio">
            <input type="radio" value="red" name="color" b="group: color" />
            <label class="ui label red">Red</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio">
            <input type="radio" value="blue" name="color" b="group: color" />
            <label class="ui label blue">Blue</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio">
            <input type="radio" value="yellow" name="color" b="group: color" />
            <label class="ui label yellow">Yellow</label>
          </div>
        </div>
      </form>
      <PrismCode component="pre" className="language-javascript">{`Example({
  onUrl: 'color',
  color: '',
  render() {
    <form>
      <input type="radio" value="red" name="color" b="group: color" />
      <label>Red</label>

      <input type="radio" value="blue" name="color" b="group: color" />
      <label>Blue</label>

      <input type="radio" value="yellow" name="color" b="group: color" />
      <label>Yellow</label>
    </form>
  }
})`}</PrismCode>
    </div>;
  }
});
