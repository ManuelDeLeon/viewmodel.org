import { PrismCode } from "react-prism";
Parent({
  render() {
    <div class="ui segment">
      <h2 class="ui header">.parent</h2>
      <a class="anchor active" id="AdvancedParent" />
      <p>
        You can access the parent component with the `parent` property. This can
        be used in a method or in the markup. For example, here we have a People
        component with a list of people and a Person component to display each
        person:
      </p>

      <PrismCode component="pre" className="language-javascript">{`People({
  selected: '',
  people: [
    { id: 1, name: "Alan"},
    { id: 2, name: "Brito"}
  ],
  render() {
    <div>
      <ul>
        <Person b="repeat: people, key: id" />
      </ul>
      Selected: <span b="text: selected" />
    </div>
  }
})`}</PrismCode>

      <PrismCode component="pre" className="language-javascript">{`Person({
  name: '',
  render() {
    <li b="text: name" />
  }
})`}</PrismCode>

      <p>
        If we wanted to select a person, the simplest thing is to declare the
        selection in the markup:{" "}
      </p>

      <PrismCode component="pre" className="language-javascript">{`Person({
  name: '',
  render() {
    <li b="text: name, click: parent.selected(name)" />
  }
})`}</PrismCode>

      <h3>Result:</h3>
      <People />
      <hr />
      <p>You can also access the parent via code:</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`this.parent().selected( this.name() );`}</PrismCode>
    </div>;
  }
});
