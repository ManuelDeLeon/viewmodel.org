Person({
	name: '',
	address: '',
	save(){
		// Simulate saving to the server
		console.log(this.data());
	},
	saveText() {
		return `Save ${this.name()} at ${this.address()}`;
	},
	created() {
		// Simulate getting data from the server
		this.load({ name: 'Alan', address: '123 Main St.'})
	},
	render() {
		<form class="ui form" style="width: 40%">
			<TextBox label="Name:" text={this.name} />
			<TextBox label="Address:" text={this.address} />
			<button b="click: save, text: saveText" type="button" class="ui blue button" />
		</form>
	}
})