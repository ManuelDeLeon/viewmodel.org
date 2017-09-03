import { PrismCode } from "react-prism";
Global({
  render() {
    <div class="ui segment">
      <h2 class="ui header">global</h2>
      <a class="anchor active" id="AdvancedGlobal" />
      <p>You can add properties and methods to ALL view models via:</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`ViewModel.global({
  // properties and methods
})`}</PrismCode>

      <p>
        Except for rare cases the use of globals should be reserved for logging
        and debugging. In most cases you should use a{" "}
        <a href="#AdvancedMixin">mixin</a> or a{" "}
        <a href="#AdvancedShare">share</a> instead.
      </p>
    </div>;
  }
});
