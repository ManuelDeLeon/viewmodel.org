import { PrismCode } from "react-prism";
Children({
  render() {
    <div class="ui segment">
      <h2 class="ui header">.children</h2>
      <a class="anchor active" id="AdvancedChildren" />
      <p>
        You can access the children components (directly below the current one)
        with the `children` property.
      </p>
      <hr />

      <div class="ui relaxed list">
        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">Without parameters</div>
            It returns all components directly underneath the current one.
            <PrismCode
              component="pre"
              className="language-javascript"
            >{`component.children()`}</PrismCode>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">With a string</div>
            With a string .children returns all components directly below the
            current one that are of the given template.
            <PrismCode
              component="pre"
              className="language-javascript"
            >{`component.children('componentName')`}</PrismCode>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">With a function</div>
            You can pass a function that takes a component and returns a boolean
            value. .children will return all sub components that return true
            when processed by the function.
            <PrismCode
              component="pre"
              className="language-javascript"
            >{`component.children(child => child.property() === 1 )`}</PrismCode>
          </div>
        </div>
      </div>
      <hr />
      <h3>Example:</h3>
      <PrismCode component="pre" className="language-javascript">{`Parent({
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
			<button b="click: logChildren">Log Children</button>
		</div>
	}
})`}</PrismCode>
      <PrismCode component="pre" className="language-javascript">{`Person({
	name: '',
	render() {
		<div b="text: name" />
	}
})`}</PrismCode>
      <PrismCode component="pre" className="language-javascript">{`Control({
	render() {
		<div>Control</div>
	}
})`}</PrismCode>

      <Parent />
    </div>;
  }
});
