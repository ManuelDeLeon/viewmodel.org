import { PrismCode } from "react-prism";
Hover({
  hovering: false,
  render() {
    <div class="ui segment">
      <h2 class="ui header">hover</h2>
      <a class="anchor active" id="BindingsHover" />
      <p>
        It sets the bound property to true when the mouse is over the element
        and false when it's not.
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`b="hover: property"`}</PrismCode>

      <h3>hover demo</h3>

      <div class="ui segment basic">
        <button
          class="ui button"
          b="hover: hovering, class: { blue: hovering }"
        >
          Hover over me
        </button>
      </div>

      <PrismCode component="pre" className="language-javascript">{`Example({
  hovering: false,
  render() {
    <div>
      <button b="hover: hovering, class: { blue: hovering }">Hover over me</button>
    </div>
  }
})`}</PrismCode>
    </div>;
  }
});
