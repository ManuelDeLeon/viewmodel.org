ComponentInteraction({
  render() {
    <div class="ui segment">
      <h2 class="ui header">Component Interaction</h2>
      <a class="anchor active" id="IntroductionComponentInteraction" />
      <p>Here's where I'm coming from with ViewModel:</p>
      <p>
        Components should be isolated. I like to be able to drop or pluck them
        as I please without worrying of breaking some other part of the app. To
        me, the best way of achieving this is for every component to manage its
        own state. I find it hard to manage components when their state is
        somewhere else. And I don't like to worry about leaving "orphan pieces
        of state" who knows where. Because of that I prefer my components to
        live in their own bubble. With ViewModel every component is in charge of
        its own state.
      </p>
      <p>
        That said, there are components which are tightly coupled with one
        another. Developers shouldn't be penalized for working with a
        parent/child relationship which is coupled by nature. I don't see the
        value in making developers run around to do what's effectively
        this.parent().doSomething() (passing callbacks and whatnot). So instead
        being dogmatic about keeping everything separate, ViewModel recognizes
        those situations and provides an easy mechanism for dealing with
        parent/child relationships.
      </p>
      <p>
        There is a third situation where components are independent in almost
        every way except for a small part. An example of this is a component
        with a list of items and two others showing information regarding the
        selected item. ViewModel provides a clean and simple way to deal with
        this situation: You create a shared container with the item selection,
        and then each component has the option to opt in and share the container
        with other components. The effect is similar to what you get with other
        libraries, minus the ceremonies.
      </p>
      <p>
        Sharing a property allows you to isolate the parts where the components
        aren't fully in charge of their own state. The concept is similar to
        isolating the parts of your code which have side effects in functional
        programming. It may not be obvious but it also isolates components
        themselves. That's because as far as each component is concerned, they
        own the property. So you can modify or remove any component that shares
        a property and the others are non the wiser.
      </p>
      <p>
        The final situation is when you're outside your normal app and you want
        to communicate with your normal components. For example if you have a
        widget that wasn't created by a view model, you can pierce boundaries
        and get a hold of specific components so the widget can work with the
        rest of your app. This is dangerous and should be avoided but again,
        developers shouldn't be penalized when they encounter situations like
        this. So ViewModel has an easy way to interact with any component
        anywhere in the app.
      </p>
    </div>;
  }
});
