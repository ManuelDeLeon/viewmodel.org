Parent({
	people: [
		{ name: "Alan" },
		{ name: "Brito" }
	],
	logSingles() {
		const control = this.child('Control');
		console.log("control", control);

		var firstPerson = this.child('Person');
		console.log("firstPerson", firstPerson);

		var brito = this.child(child => child.name && child.name() === 'Brito');
		console.log("brito", brito);
	},
	render() {
		<div>
			<Person b="repeat: people" />
			<Control />
			<button type="button" class="ui blue button" b="click: logSingles">Log Children</button>
		</div>
	}
})