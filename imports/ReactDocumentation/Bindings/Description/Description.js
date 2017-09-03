import { PrismCode } from "react-prism";
Description({
  render() {
    <div class="ui segment">
      <h2 class="ui header">Description</h2>
      <a class="anchor active" id="BindingsDescription" />
      <p>
        Bindings are just shortcuts to reduce the boilerplate and ceremonies
        associated with common tasks. The best example is the value binding. So
        instead of writing:
      </p>
      <PrismCode component="pre" className="language-javascript">{`Example({
  message: '',
  messageChange(event) {
    this.message( event.target.value );
  },
  render() {
    <input type="text" value={this.message()} onChange={this.messageChange} />
  }
})`}</PrismCode>
      <p>You can just write:</p>
      <PrismCode component="pre" className="language-javascript">{`Example({
  message: '',
  render() {
    <input type="text" b="value: message" />
  }
})`}</PrismCode>
    </div>;
  }
});
