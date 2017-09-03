ColorsNoShare({
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
})