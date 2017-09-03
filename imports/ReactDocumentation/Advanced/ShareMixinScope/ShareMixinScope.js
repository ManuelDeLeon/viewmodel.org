import { PrismCode } from "react-prism";
ShareMixinScope({
  render() {
    <div class="ui segment">
      <h2 class="ui header">share/mixin scope</h2>
      <a class="anchor active" id="AdvancedShareMixinScope" />
      <p>
        By default share and mixin will add all properties and methods they have
        to the component. This is fine for simple components where you just use
        one mixin or share. But when the component is complex or you require two
        or more mixins/share then it's much better to scope the mixin/share.
      </p>
      <p>
        For this you can add the share/mixin to a specific property of the
        component (effectively scoping them). You can even add the same mixin
        multiple times to the same component. This is similar to how services
        work in other frameworks.
      </p>
      <p>
        To do so, instead of using a string or array of strings to declare the
        mixin/share, you use an object. The keys are the names of the component
        properties and the values are strings to the names of the mixins/shares.
      </p>
      <h3>Example:</h3>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`ViewModel.mixin({
  house: {
    address: '',
    city: ''
  },
  location: {
    country: ''
  }
});`}</PrismCode>

      <PrismCode component="pre" className="language-javascript">{`Example({
  mixin: {
    firstHome: 'house',
    secondHome: [ 'house', 'location' ]
  },
  printHomes: function() {
    console.log( this.firstHome.address() );
    console.log( this.secondHome.country() );
  },
  render() {
    <div />
  }
})`}</PrismCode>

      <h3>At root and scoped</h3>
      <p>
        You can add mixins/shares to the root of the component and a property at
        the same time. To do so use an array with both string names and object
        definitions.
      </p>
      <h3>Example:</h3>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`ViewModel.mixin({
  house: {
    address: '',
    city: ''
  },
  location: {
    country: ''
  }
});`}</PrismCode>

      <PrismCode component="pre" className="language-javascript">{`Example({
  mixin: [
    'location',
    {
      firstHome: 'house'
    }
  ],
  printHomes: function() {
    console.log( this.firstHome.address() );
    console.log( this.country() );
  },
  render() {
    <div />
  }
})`}</PrismCode>
    </div>;
  }
});
