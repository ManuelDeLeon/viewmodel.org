import { PrismCode } from "react-prism";
Mixin({
  people: [{ name: "Alan" }, { name: "Brito" }, { name: "Cordon" }],
  render() {
    <div class="ui segment">
      <h2 class="ui header">mixin</h2>
      <a class="anchor active" id="AdvancedMixin" />
      <p>
        You can compose your components with the mixin property. You must
        specify the parts to reuse via ViewModel.mixin. In the following example
        we're creating two objects we can reuse between components (person and
        avatar).
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`ViewModel.mixin({
  person: {
    firstName: '',
    lastName: '',
    fullName: function() {
      return this.firstName() + ' ' + this.lastName();
    }
  },
  avatar: {
    image: ''
  }
});`}</PrismCode>

      <p>
        Now we can reuse these elements between components. In the following
        example the husband component will have all the properties and methods
        from person and avatar. Wife will have the properties and methods of
        person. The instances of husband and wife will not share the properties
        firstName and lastName from person. Each will have their own firstName
        and lastName.
      </p>

      <PrismCode component="pre" className="language-javascript">{`Husband({
  mixin: [ 'person', 'avatar' ],
  render() { <div /> }
})`}</PrismCode>

      <PrismCode component="pre" className="language-javascript">{`Wife({
  mixin: 'person',
  render() { <div /> }
})`}</PrismCode>

      <h3>Lifecycle hooks</h3>
      <p>
        You can supply multiple <a href="#AdvancedAutorun">autorun</a>,{" "}
        <a href="#AdvancedCreated">created</a>,{" "}
        <a href="#AdvancedRendered">rendered</a>, and{" "}
        <a href="#AdvancedDestroyed">destroyed</a> functions with{" "}
        <a href="#AdvancedShare">share</a>, <a href="#AdvancedMixin">mixin</a>,{" "}
        <a href="#AdvancedLoad">load</a>, or in the component itself.
      </p>
      <p>
        For example if you want a mixin to execute a function after the template
        is created (one that uses the mixin of course), you can do:
      </p>

      <PrismCode
        component="pre"
        className="language-javascript"
      >{`ViewModel.mixin({
  clock: {
    initialTime: new Date(),
    created() {
      this.initialTime( new Date() );
    }
  }
});`}</PrismCode>

      <PrismCode component="pre" className="language-javascript">{`Example({
  mixin: 'clock',
  render() { <div /> }
})`}</PrismCode>

      <h3>mixin demo</h3>
      <p>
        In this example each Person component has its own name and address. They
        all start with the same default address from the mixin.
      </p>
      <div class="ui list">
        {this.people().map((p, i) => {
          return <Person {...p} key={i} />;
        })}
      </div>

      <PrismCode
        component="pre"
        className="language-javascript"
      >{`ViewModel.mixin({
  house: {
    address: '123 Main St.'
  }
})`}</PrismCode>
      <PrismCode component="pre" className="language-javascript">{`Example({
  people: [
    { name: "Alan" },
    { name: "Brito" },
    { name: "Cordon" }
  ],
  render() {
    <div class="ui list">
      {this.people().map((p, i) => {
        return <Person {...p} key={i} />
      })}
    </div>
  }
})`}</PrismCode>

      <PrismCode component="pre" className="language-javascript">{`Person({
  mixin: 'house',
  render() {
    <div class="item">
      <input type="text" b="value: name">
      <input type="text" b="value: address">
    </div>
  }
})`}</PrismCode>
    </div>;
  }
});
