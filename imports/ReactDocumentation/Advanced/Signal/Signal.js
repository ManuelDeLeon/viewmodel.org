import { PrismCode } from "react-prism";
Signal({
  render() {
    <div class="ui segment">
      <h2 class="ui header">signal</h2>
      <a class="anchor active" id="AdvancedSignal" />
      <p>
        Signals are a way to capture events outside components. The most common
        situations are parts of the application which are not controlled by a
        component (document, widgets, and the like). The following is a signal
        that captures the mouse position:
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`ViewModel.signal({
  mouse: { // Name of the signal
    mousePosition: { //Name of the view model property
      target: document,
      event: 'mousemove'
    }
    // (optional) more event/properties to include with 'mouse'
  }
});`}</PrismCode>

      <p>
        Now we can use the signal to get notified when the mouse position
        changes:
      </p>

      <PrismCode component="pre" className="language-javascript">{`Example({
  signal: 'mouse', // Or an array of signal containers
  render() {
    <div />
  }
})`}</PrismCode>

      <h3>signal demo</h3>
      <Demo />

      <PrismCode component="pre" className="language-javascript">{`Demo({
  signal: 'mouse',
  render(){
    <div>
      <p b="text: 'Mouse Position: ' + mousePosition.x + ',' + mousePosition.y" />
    </div>
  }
})`}</PrismCode>

      <hr />
      <p>
        You have the option to transform the event object that the component
        will receive. You can also throttle the rate at which the signal is
        sent. In the following example we don't send the entire mouse move event
        to the view model, only the x and y coordinates.
      </p>

      <PrismCode
        component="pre"
        className="language-javascript"
      >{`ViewModel.signal({
  mouse: { // Name of the signal
    mousePosition: { //Name of the view model property
      target: document,
      event: 'mousemove',
      // (optional) A function that returns the object to update mousePosition with
      transform: function(event) {
        return {
          x: event.x,
          y: event.y
        }
      },
      // (optional) How often to receive the signal (in ms)
      throttle: 50
    }
    // (optional) more event/properties to include with 'mouse'
  }
});`}</PrismCode>
    </div>;
  }
});
