import { PrismCode } from "react-prism";
DynamicLoading({
  showGreeting: false,
  buttonText() {
    return this.showGreeting() ? "Hide Greeting" : "Show Greeting";
  },
  render(){
    <div class="ui segment">
      <h2 class="ui header">Dynamic/Lazy/Deferred Loading</h2>
      <a class="anchor active" id="AdvancedDynamicLoading"></a>
      <p>
        ViewModel allows you to defer loading a component until a condition is met. To do this, apply the `defer` binding when using the component.
      </p>
      <h3>Lazily loading a component</h3>
      <p>
        In this example we're loading the BigComponent after the page has rendered.
      </p>
<PrismCode component="pre" className="language-javascript">{`Example({
  render() {
    <div>
      <BigComponent b="defer: true" />
    </div>
  }
})`}</PrismCode>

      <h3>Landing Pages</h3>
      <p>
        If you have landing page with a section below the fold, you can load it dynamically and thus speed up the loading time of the above the fold content:
      </p>
<PrismCode component="pre" className="language-javascript">{`LandingComponent({
  render() {
    <div>
      <AboveTheFoldContent />
      <BelowTheFoldContent b="defer: true" />
    </div>
  }
})`}</PrismCode>

      <h3>Optionally loading a component</h3>
      <p>
        In this example we're loading the HelloWorld when the user clicks the button. The component is cached so it doesn't need to be loaded a second time. Open the network tab on your developer tools and press the show button.
      </p>
<PrismCode component="pre" className="language-javascript">{`Example({
  render() {
    showGreeting: false,
    buttonText() {
      return this.showGreeting() ? "Hide Greeting" : "Show Greeting";
    },
    <div>
      <button b="toggle: showGreeting, text: buttonText" />
      <HelloWorld b="defer: showGreeting" />
    </div>
  }
})`}</PrismCode>

      <h3>Routing</h3>
      <p>
         If your router doesn't support dynamic loading (code splitting), just create an empty component (to be loaded/called by your router) and have that call the real component with the defer attribute.
      </p>

      <hr />
      <p>
        This feature requires a build that is compatible with JS dynamic import statements (Webpack 2, Meteor 1.5, etc.)
      </p>
      <p>
        For Webpack 1, which uses `require.ensure`, you have to enable the option `"deferWithRequire": true` on the .babelrc file:
      </p>
      <PrismCode component="pre" className="language-javascript">{`{
  "presets": ["es2015","react"],
  "plugins": [
    ["viewmodel-react-plugin", {
      "deferWithRequire": true
    }]
  ]
}`}</PrismCode>
    </div>
  }
});