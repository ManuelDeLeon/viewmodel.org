import { PrismCode } from "react-prism";
import ViewModel from "viewmodel-react";

ViewModel.addBinding({
  name: "show",
  autorun: function(bindArg) {
    if (bindArg.getVmValue()) {
      bindArg.element.style.display = "block";
    } else {
      bindArg.element.style.display = "none";
    }
  }
});

CustomBindings({
  showLabel: false,
  render() {
    <div class="ui segment">
      <h2 class="ui header">Custom Bindings</h2>
      <a class="anchor active" id="BindingsCustomBindings" />
      <p>
        You can add your own custom bindings with
        `ViewModel.addBinding(bindingObject)`. In the following example we add a
        custom bind that will show or hide the element depending on the value of
        a property.
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`import ViewModel from 'viewmodel-react';

ViewModel.addBinding({
  name: 'show',
  autorun: function(bindArg){
    if ( bindArg.getVmValue() ) {
      bindArg.element.style.display = 'block';
    } else {
      bindArg.element.style.display = 'none';
    }
  }
});`}</PrismCode>

      <p>And then you can use the binding as follows:</p>

      <PrismCode component="pre" className="language-javascript">{`Example({
  showLabel: false,
  render() {
    <div>
      <a b="toggle: showLabel" class="ui button"> Toggle Label</a>
      <label b="show: showLabel" class="ui red label" >Referencing an element</label>
    </div>
  }
});`}</PrismCode>

      <h3>ref demo</h3>

      <div class="ui segment basic">
        <div class="ui grid">
          <div class="four wide column">
            <a b="toggle: showLabel" class="ui button">
              {" "}
              Toggle Label
            </a>
          </div>
          <div class="six wide column">
            <label b="show: showLabel" class="ui red label">
              Hide this by pressing the button again
            </label>
          </div>
        </div>
      </div>
    </div>;
  }
});
