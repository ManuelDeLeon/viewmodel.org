import { PrismCode } from "react-prism";
Bindings({
  render() {
    <div class="ui segment">
      <h2 class="ui header">Bindings</h2>
      <a class="anchor active" id="BasicsBindings" />
      <p>
        We've used a few bindings here and there but what are they? Bindings are
        just shortcuts to make code cleaner, more readable, and succinct.
        There's nothing magical or scary about them. It's just a shortcut, plain
        and simple. Nothing stops you from writing the longer version of what
        the binding would do.
      </p>

      <p>
        For example, let's take a very simple binding. You could write the
        following:
      </p>
      <PrismCode component="pre" className="language-javascript">{`Example({
  message: 'Hello World',
  render() {
    <div>{this.message()}</div>
  }
})`}</PrismCode>

      <p>Or you could use the text binding:</p>
      <PrismCode component="pre" className="language-javascript">{`Example({
  message: 'Hello World',
  render() {
    <div b="text: message" />
  }
})`}</PrismCode>

      <p>
        A more complex one is the value binding. For input boxes you typically
        end up writing a change handler function that updates some state. The
        input then listens for a change event and calls the change handler (one
        way bind from the input to the state). Finally the input may or may not
        have another one way binding from the state to the input. That's called
        a two-way binding.
      </p>

      <p>
        Instead of performing all those ceremonies over and over again, you can
        just use the value binding:
      </p>
      <PrismCode component="pre" className="language-javascript">{`Example({
  message: '',
  render() {
    <input b="value: message" />
  }
})`}</PrismCode>

      <p>
        That's it. And again, nothing stops you from writing the longer version
        if you want to.
      </p>
    </div>;
  }
});
