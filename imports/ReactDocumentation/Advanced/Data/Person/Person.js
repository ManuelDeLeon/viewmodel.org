Person({
	first: 'Alan',
	last: 'Brito',
	full() {
		return this.first() + ' ' + this.last();
	},
	log() {
		var obj = this.data();
		console.log(obj);
	},
	render() {
		<div>
			<button class="ui button blue" b="click: log, text: 'Log ' + full" />
		</div>
	}
})