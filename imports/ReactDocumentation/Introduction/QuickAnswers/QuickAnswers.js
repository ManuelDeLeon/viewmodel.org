import { PrismCode } from "react-prism";
import Highlight from "react-highlight";
QuickAnswers({
  message: "",
  render() {
    <div class="ui segment">
      <h2 class="ui header">Quick Answers</h2>
      <a class="anchor active" id="IntroductionQuickAnswers" />

      <h3 class="ui header">What is this?</h3>
      <p>
        ViewModel for React is a thin layer on top of React to work with as
        little boilerplate and ceremonies as possible.
      </p>

      <h3 class="ui header">What's the big idea?</h3>
      <p>
        Actually it's pretty simple, you have an object and the view is rendered
        based on the properties of that object. Want to modify the state of the
        view? Just modify the object. Want to save the state of the view at any
        given time? Just save the object somewhere. Want to return the state of
        the view to what it was? Just load the saved object. Using the buzzword
        of the day, it's "easy to reason about".
      </p>
      <p>
        By the way, this isn't anything new or ground breaking. This way of
        writing applications has been around for a long time (long before
        React).
      </p>

      <h3 class="ui header">Isn't that how React started?</h3>
      <p>
        Yep, those were simpler times, before Flux, Reflux, Redux, or Delux. A
        time when you didn't have to know about dispatchers, reducers,
        transducers, or confusers.
      </p>

      <h3 class="ui header">Who's this for?</h3>
      <p>
        This is for people who like the view model way of developing UIs (think
        React at the beginning, Angular, Knockout, Aurelia, etc.) but don't like
        the boilerplate and ceremonies that usually go with those libraries and
        frameworks.
      </p>

      <h3 class="ui header">Who isn't this for?</h3>
      <p>
        You'll probably hate this library if you identify with the following
        statements:
      </p>
      <ul>
        <li>No Redux? Blasphemy!</li>
        <li>State on the component? Sacrilege!</li>
        <li>Bindings? Get away from me Satan!</li>
      </ul>

      <h3 class="ui header">Why React?</h3>
      <p>
        React does less than other frameworks so it's easier to take JSX and
        build a DSL on top of it (removing all the boilerplate).
      </p>

      <h3 class="ui header">What's the problem?</h3>
      <p>
        I feel like view layers are needlessly bloated and complex. More often
        than not you're doing things, not because your application requires it,
        but because the framework does. I like to read and write code relevant
        to my applications, not a framework. ViewModel is an attempt to
        eliminate anything that isn't "your code".
      </p>

      <h3 class="ui header">What does the code look like?</h3>
      <PrismCode component="pre" className="language-javascript">{`Hello({
  render() {
    <label class="label" style="color: blue">
      Hello World!
    </label>
  }
})`}</PrismCode>
      <label class="label" style="color: blue">
        Hello World!
      </label>

      <h3 class="ui header">How does that work?</h3>
      <p>
        ViewModel adds the crust React requires. So our Hello component file
        gets transpiled into:
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`import React from 'react';

export class Hello extends React.Component {
  render() {
    return (
      <label className="label" style={{ color: "blue" }}>
        Hello World!
      </label>
    );
  }
}`}</PrismCode>

      <h3 class="ui header">How about an echo example?</h3>
      <PrismCode component="pre" className="language-javascript">{`Echo({
  message: '',
  render() {
    <div>
      <input b="value: message" placeholder="Type something..." />
      <label b="text: message" />
    </div>
  }
});`}</PrismCode>
      <div class="ui input">
        <input type="text" b="value: message" placeholder="Type something..." />
      </div>
      <div class="ui label">
        <label b="text: message" />
      </div>

      <h3 class="ui header">
        I've heard bindings are evil, why are you using them?
      </h3>
      <p>
        I don't know what definition you've heard but here a binding is only a
        shortcut for a ceremonious task. There's nothing evil, magical, or
        mystical about them. Let's take a simple example from JavaScript. You
        could write the following:
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`i = i + 2;`}</PrismCode>
      <p>Or you could write:</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`i += 2;`}</PrismCode>
      <p>
        The += assignment operator is analogous to a binding in ViewModel. It's
        a shortcut and you don't have to use it if you don't want to. Is it
        wrong to use the += operator? Is it too much "magic"? I don't think so.
      </p>

      <h3 class="ui header">Does it work with SSR?</h3>
      <p>
        Yes. It transpiles the b="" attributes/bindings into idiomatic React
        code. For example, if you write:
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`<p b="if: show">Hi</p>`}</PrismCode>
      <p>It transpiles into:</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`{ this.state.show ? <p>Hi</p> : null }`}</PrismCode>

      <h3 class="ui header">Is it just syntactic sugar?</h3>
      <p>
        Syntactic sugar is nice but it's far from being what reduces your code
        the most. It's all the ceremonies, complex patterns, and runarounds you
        don't have to deal with anymore. To give an example, one of the UI
        boogeymen is state that is shared between two or more components. The
        two most common ways of dealing with this situation are:
      </p>
      <p>
        1) Let components reference one another so they can get the state they
        need. The problem here is that you want to share a banana but you end up
        sharing the gorilla holding the banana, and keeping track of the entire
        gorilla tribe.
      </p>
      <p>
        2) Store the entire state of the application in a central place. You no
        longer need to keep track of the gorillas, but now you need a jeep, a
        machete, and know your way through the entire jungle just to share a
        banana.
      </p>

      <p>
        ViewModel takes the simple approach of only sharing the state that needs
        to be shared. Components don't reference one another, you keep the
        shared state to a minimum, and components are explicit about which state
        can be modified by someone else. It works like this:
      </p>

      <p>First define a container for the state that needs to be shared</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`ViewModel.share({
  house: {
    address: ''
  }
})`}</PrismCode>

      <p>
        In this case the container is 'house' and the state to share is
        'address'.
      </p>
      <p>
        Now you can declare that a component will share the house properties
        with other components:
      </p>
      <PrismCode component="pre" className="language-javascript">{`ComponentA({
  share: 'house',
  render() {
    <input b="value: address" />
  }
})`}</PrismCode>

      <PrismCode component="pre" className="language-javascript">{`ComponentB({
  share: 'house',
  render() {
    <div b="text: address" />
  }
})`}</PrismCode>

      <p>
        Now components A and B have access to the same address and nothing else.
        You use them as normal and treat address as just another property of the
        components.
      </p>

      <h3 class="ui header">
        Will I still be able to use everything from the React ecosystem?
      </h3>
      <p>
        Of course, ViewModel sits on top of React, so the only thing out the
        window are the needless ceremonies. You can keep using your stack of
        choice (Express, .Net Core, Meteor, Feathers, etc.) The same applies to
        bundlers, plugins, custom components, optimizations, etc.
      </p>

      <h3 class="ui header">Can I just try it with one component?</h3>
      <p>
        Of course. The preferred way is to try it with something medium size (a
        small component might not be worth it, a large one might be too
        daunting). I think it’s better if you experience it yourself. Take a
        relatively small part of one of your website (a medium size component)
        and re-write it using ViewModel.
      </p>
    </div>;
  }
});
