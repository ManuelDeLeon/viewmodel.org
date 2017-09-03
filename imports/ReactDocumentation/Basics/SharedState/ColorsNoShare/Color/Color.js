Color({
	color: '',
	selectedColor: '',
	weight() {
		return this.color() === this.selectedColor() ? "bold" : "normal";
	},
	render() {
		<li b="text: color, click: selectedColor(color), style: { color: color, font-weight: weight }" />
	}
})