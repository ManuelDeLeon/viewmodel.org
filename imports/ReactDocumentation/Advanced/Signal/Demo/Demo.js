if (Meteor.isClient) {
  ViewModel.signal({
    mouse: {
      // Name of the signal
      mousePosition: {
        //Name of the view model property
        target: window.document,
        event: "mousemove"
      }
      // (optional) more event/properties to include with 'mouse'
    }
  });
}
Demo({
  signal: "mouse",
  render() {
    <div>
      <p b="text: 'Mouse Position: ' + mousePosition.x + ',' + mousePosition.y" />
    </div>;
  }
});
