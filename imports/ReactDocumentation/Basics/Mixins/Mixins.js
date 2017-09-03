import { PrismCode } from "react-prism";
Mixins({
  render() {
    <div class="ui segment">
      <h2 class="ui header">Mixins</h2>
      <a class="anchor active" id="BasicsMixins" />
      <p>
        Mixins allow you to reuse code in two ways: 1) you can add properties
        and methods to your components (mixins in the traditional sense), 2) you
        can group the mixin's properties and methods in a single property of the
        component (how services work in Angular).
      </p>

      <p>
        So let's say you have user data that is going to be used across multiple
        components. You can create a mixin with that information:
      </p>

      <PrismCode
        component="pre"
        className="language-javascript"
      >{`ViewModel.mixin({
  userData: {
    isLogged() {
      // Return if the user is logged.
    },
    userInfo() {
      // Return the user's information.
    }
  }
})`}</PrismCode>

      <p>
        For small mixins you can just add the properties and methods straight to
        the component:
      </p>

      <PrismCode component="pre" className="language-javascript">{`Example({
  mixin: 'userData',
  render() {
    <div b="if: isLogged">
      <label b="text: userInfo.name" />
    </div>
  }
})`}</PrismCode>

      <p>
        The properties isLogged and userInfo are added to the component so you
        can use them as if they were declared on the component itself.
      </p>

      <p>
        For larger mixins it's better to "bundle" them into their own property:
      </p>

      <PrismCode component="pre" className="language-javascript">{`Example({
  mixin: {
    userData: 'userData'
  },
  render() {
    <div b="if: userData.isLogged">
      <label b="text: userData.userInfo.name" />
    </div>
  }
})`}</PrismCode>

      <p>
        The component's surface isn't polluted by the mixin. You access isLogged
        and userInfo via the userData property.
      </p>
    </div>;
  }
});
