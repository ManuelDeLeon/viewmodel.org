Parent({
	people: [
		{ name: "Alan" },
		{ name: "Brito" }
	],
	logChildren() {
		var all = this.children();
		console.log(all); // 3 components

		var persons = this.children('Person');
		console.log(persons); // 2 components

		var alan = this.children(child => child.name && child.name() === 'Alan');
		console.log(alan); // 1 component
	},
	render() {
		<div>
			<Person b="repeat: people" />
			<Control />
			<button type="button" class="ui blue button" b="click: logChildren">Log Children</button>
		</div>
	}
})