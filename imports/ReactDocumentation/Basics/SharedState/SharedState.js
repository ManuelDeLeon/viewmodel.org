import { PrismCode } from "react-prism";
ViewModel.share({
  colorSelection: {
    selectedColor: ""
  }
});

SharedState({
  render() {
    <div class="ui segment">
      <h2 class="ui header">Shared State</h2>
      <a class="anchor active" id="BasicsSharedState" />
      <p>
        Most of the time you want to keep your components isolated but there are
        cases when two components need to shared some piece of state. The
        typical example is a master-detail view. In that case you can create a
        shared bucket of state which will be shared by two or more components.
      </p>

      <p>
        For example, let's create two components, one that displays a list of
        colors and another that displays information about the selected color:
      </p>

      <PrismCode
        component="pre"
        className="language-javascript"
      >{`ViewModel.share({
  colorSelection: {
    selectedColor: ''
  }
})`}</PrismCode>

      <PrismCode component="pre" className="language-javascript">{`Colors({
  share: 'colorSelection',
  colors: [ 'red', 'green', 'blue' ],
  render(){
    <ul>
      <li b="repeat: colors, text: repeatObject, click: selectedColor(repeatObject), style: { color: repeatObject }" />
    </ul>
  }
})`}</PrismCode>

      <PrismCode component="pre" className="language-javascript">{`ColorDetail({
  share: 'colorSelection',
  render() {
  <div>
  Color: <span b="text: selectedColor, style: { color: selectedColor }" />
  </div>
}
});`}</PrismCode>

      <p>
        They both share the property selectedColor so when Colors changes the
        selected color (a click on a list item) ColorDetail picks up the change
        and displays the information about the color selected.
      </p>

      <hr />
      <h3>Result:</h3>
      <Colors />
      <ColorDetail />
      <hr />
      <h3>Sharing a property</h3>
      <p>
        Sometimes the shared state is only used between parent and child
        components. In that case you can just pass the property to the child by
        reference.
      </p>
      <PrismCode component="pre" className="language-javascript">{`Colors({
	colors: ['red', 'green', 'blue'],
	selectedColor: '',
	render() {
		<div>
			<ul>
				<Color b="repeat: colors" color={repeatObject} selectedColor={this.selectedColor} />
			</ul>
			Color: <span b="text: selectedColor, style: { color: selectedColor }" />
		</div>
	}
})`}</PrismCode>
      <PrismCode component="pre" className="language-javascript">{`Color({
	color: '',
	selectedColor: '',
	weight() {
		return this.color() === this.selectedColor() ? "bold" : "normal";
	},
	render() {
		<li b="text: color, click: selectedColor(color), style: { color: color, font-weight: weight }" />
	}
})`}</PrismCode>
      <hr />
      <h3>Result:</h3>
      <ColorsNoShare />
    </div>;
  }
});
