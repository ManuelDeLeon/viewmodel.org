import { PrismCode } from "react-prism";
SharingProperties({
  render() {
    <div class="ui segment">
      <h2 class="ui header">Sharing Properties</h2>
      <a class="anchor active" id="AdvancedSharingProperties" />
      <p>
        Sometimes you need to share a property between two components but not
        want to create a ViewModel.share. The typical example is when you have a
        parent with data that you want to show with controls, but keeping the
        data in the parent.
      </p>
      <p>
        In that case you can just pass a property from the parent to the child
        component, but do it by reference (not by value).
      </p>

      <h3>Example</h3>
      <PrismCode component="pre" className="language-javascript">{`Person({
	name: '',
	address: '',
	save(){
		// Simulate saving to the server
		console.log(this.data());
	},
	saveText() {
		return \`Save \${this.name()} at \${this.address()}\`;
	},
	created() {
		// Simulate getting data from the server
		this.load({ name: 'Alan', address: '123 Main St.'})
	},
	render() {
		<form>
			<TextBox label="Name:" text={this.name} />
			<TextBox label="Address:" text={this.address} />
			<button b="click: save, text: saveText" />
		</form>
	}
})`}</PrismCode>
      <PrismCode component="pre" className="language-javascript">{`TextBox({
	label: '',
	text: '',
	render() {
		<div>
      <label b="text: label" />
      <input b="value: text" />
		</div>
	}
})`}</PrismCode>
      <hr />
      <Person />
    </div>;
  }
});
