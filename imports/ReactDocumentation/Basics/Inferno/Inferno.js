import { PrismCode } from "react-prism";
Inferno({
  render() {
    <div class="ui segment">
      <h2 class="ui header">Inferno</h2>
      <a class="anchor active" id="BasicsInferno" />
      <p>
        You can use ViewModel with Inferno without changing anything in your
        code (not even imports since ViewModel hides default imports).
      </p>

      <p>
        To use Inferno, modify the .babelrc file and add the "useInferno" option
        to the "viewmodel-react-plugin":
      </p>
      <PrismCode component="pre" className="language-javascript">{`{
  "presets": ["es2015"],
  "plugins": [
    [
      "viewmodel-react-plugin",
      {
        "useInferno": true
      }
    ],
    "babel-plugin-syntax-jsx",
    "transform-object-rest-spread",
    "transform-es2015-spread",
    [
      "babel-plugin-inferno",
      {
        "imports": true
      }
    ]
  ]
}
`}</PrismCode>
    </div>;
  }
});
