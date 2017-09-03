import { PrismCode } from "react-prism";
EnableDisable({
  message: "",
  render() {
    <div class="ui segment">
      <h2 class="ui header">enable/disable</h2>
      <a class="anchor active" id="BindingsEnableDisable" />
      <p>
        enable/disable are another way of removing/adding the disabled attribute
        on an element.
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`b="enable: property"`}</PrismCode>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`b="disable: property"`}</PrismCode>

      <h3>enable/disable demo</h3>

      <div class="ui segment basic">
        <div class="ui grid">
          <div class="five wide column">
            <div class="ui input">
              <input
                b="value: message"
                type="text"
                class="ui input"
                placeholder="Type something..."
              />
            </div>
          </div>
          <div class="five wide column">
            <button b="enable: message" class="ui blue button">
              Enabled if has text
            </button>
          </div>
          <div class="five wide column">
            <button b="disable: message" class="ui blue button">
              Disabled if has text
            </button>
          </div>
        </div>
      </div>

      <PrismCode component="pre" className="language-javascript">{`Example({
  message: '',
  render() {
    <div>
      <input b="value: message" type="text" />
      <button b="enable: message" >Enabled if has text</button>
      <button b="disable: message" class="ui blue button">Disabled if has text</button>
    </div>
  }
})`}</PrismCode>
    </div>;
  }
});
