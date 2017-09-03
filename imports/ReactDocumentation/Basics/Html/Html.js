import { PrismCode } from "react-prism";
Html({
  render() {
    <div class="ui segment">
      <h2 class="ui header">HTML</h2>
      <a class="anchor active" id="BasicsHtml" />
      <p>
        With ViewModel you can use plain HTML to construct your views. For
        example:
      </p>

      <PrismCode component="pre" className="language-javascript">{`Example({
  render() {
    <div class="alert" style="color: red" />
  }
})`}</PrismCode>
    </div>;
  }
});
