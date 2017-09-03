import { PrismCode } from "react-prism";
Properties({
  render() {
    <div class="ui segment">
      <h2 class="ui header">Properties</h2>
      <a class="anchor active" id="AdvancedProperties" />
      <p>
        When you define a view model, the properties are converted to "function
        properties" which work in the following way:
      </p>

      <h3>To SET the value</h3>
      <p>Call the property/function with the new value:</p>
      <PrismCode component="pre" className="language-javascript">{`Example({
  counter: 0,
  setToTen: function() {
    this.counter( 10 );
  },
  render() {
    <div />
  }
})`}</PrismCode>

      <h3>To GET the value</h3>
      <p>Call the property/function without parameters:</p>
      <PrismCode component="pre" className="language-javascript">{`Example({
  counter: 0,
  logCounter: function() {
    console.log( this.counter() );
  },
  render() {
    <div />
  }
})`}</PrismCode>

      <p>
        At this point you might be wondering why go through this and not just
        use ES5 properties. "function properties" have a few advantages:
      </p>

      <ul>
        <li>You can pass properties as references to other functions.</li>
        <li>
          View models can share properties. This is how ViewModel.share works.
        </li>
        <li>
          Properties themselves can have properties and methods of their own.
        </li>
      </ul>

      <p>
        To expand on the last point, view model properties have the following
        properties and methods of their own:
      </p>

      <div className="ui relaxed list">
        <div className="item">
          <i className="pointing right icon" />
          <div className="content">
            <div className="header">value</div>
            <p>
              The value property holds a non-reactive value of the property.
              This is useful when you want to know the current value in method
              that updates the same value.
            </p>
            <PrismCode
              component="pre"
              className="language-javascript"
            >{`Example({
  a: 0,
  b: 0,
  autorun: function() {
    // Increment the value of a by b

    // Get the non reactive value of a,
    // otherwise the autorun will depend on a value
    // that it changes further down (causing an infinite loop)
    var valA = this.a.value; // Don't depend on a
    var valB = this.b(); // Depend on the value of b

    this.a( valA + valB ); // Update value of a
  },
  render() {
    <div />
  }
})`}</PrismCode>
          </div>
        </div>

        <div className="item">
          <i className="pointing right icon" />
          <div className="content">
            <div className="header">reset()</div>
            <p>It sets the value of the property to the initial value.</p>
            <PrismCode
              component="pre"
              className="language-javascript"
            >{`Example({
  selection: 'N/A',
  resetSelection: function() {
    this.selection.reset(); // returns selection back to 'N/A'
  },
  render() {
    <div />
  }
})`}</PrismCode>

            <p>
              By the way, you can reset all properties in a view model with{" "}
              <a href="#AdvancedReset">viewmodel.reset()</a>.
            </p>
          </div>
        </div>

        <div className="item">
          <i className="pointing right icon" />
          <div className="content">
            <div className="header">depend()</div>
            <p>
              Causes the current function to depend on the property without
              actually invoking it.
            </p>
            <PrismCode
              component="pre"
              className="language-javascript"
            >{`Example({
  selection: null,
  autorun: function() {
    this.selection.depend();
    console.log( "selection changed" );
  },
  render() {
    <div />
  }
})`}</PrismCode>

            <p>
              .depend() is really just an explicit way to depend on a property.
              For example you can get the same result if you invoke the
              property's getter (call it without parameters):
            </p>

            <PrismCode
              component="pre"
              className="language-javascript"
            >{`Example({
  selection: null,
  autorun: function() {
    this.selection(); // Depend on selection.
    console.log( "selection changed" );
  },
  render() {
    <div />
  }
})`}</PrismCode>
          </div>
        </div>

        <div className="item">
          <i className="pointing right icon" />
          <div className="content">
            <div className="header">changed()</div>
            <p>
              Fires a change notification for the property, without modifying
              its value.
            </p>
            <PrismCode
              component="pre"
              className="language-javascript"
            >{`Example({
  selection: null,
  rerunSelectionDeps: function() {
    this.selection.changed();
  },
  render() {
    <div />
  }
})`}</PrismCode>
          </div>
        </div>

        <div className="item">
          <i className="pointing right icon" />
          <div className="content">
            <div className="header">valid()</div>
            <p>
              Returns true if the property has a value that satisfies all
              validations.
            </p>
            <PrismCode
              component="pre"
              className="language-javascript"
            >{`Example({
  password: ViewModel.property.string.notBlank.min(15),
  log() {
    if ( this.password.valid() ) {
      console.log( "Password is valid" );
    }
  },
  render() {
    <div />
  }
})`}</PrismCode>
          </div>
        </div>

        <div className="item">
          <i className="pointing right icon" />
          <div className="content">
            <div className="header">invalid()</div>
            <p>
              Returns true if the property has a value that doesn't satisfy all
              validations.
            </p>
            <PrismCode
              component="pre"
              className="language-javascript"
            >{`Example({
  password: ViewModel.property.string.notBlank.min(15),
  log() {
    if ( this.password.invalid() ) {
      console.log( "Password is invalid" );
    }
  },
  render() {
    <div />
  }
})`}</PrismCode>
          </div>
        </div>

        <div className="item">
          <i className="pointing right icon" />
          <div className="content">
            <div className="header">validMessage()</div>
            <p>
              Returns text given in the 'validMessage' validation. It will
              always return the same message whether the value is valid or
              invalid. To get a message depending on the validation use
              '.message()' instead.
            </p>
            <PrismCode
              component="pre"
              className="language-javascript"
            >{`Example({
  password: ViewModel.property.string.notBlank.min(15).validMessage('Good Password'),
  log() {
    console.log( this.password.validMessage() );
  },
  render() {
    <div />
  }
})`}</PrismCode>
          </div>
        </div>

        <div className="item">
          <i className="pointing right icon" />
          <div className="content">
            <div className="header">invalidMessage()</div>
            <p>
              Returns text given in the 'invalidMessage' validation. It will
              always return the same message whether the value is valid or
              invalid. To get a message depending on the validation use
              '.message()' instead.
            </p>
            <PrismCode
              component="pre"
              className="language-javascript"
            >{`Example({
  password: ViewModel.property.string
    .notBlank
    .min(15)
    .invalidMessage('Password must be at least 15 characters long.'),
  log() {
    console.log( this.password.invalidMessage() );
  },
  render() {
    <div />
  }
})`}</PrismCode>
          </div>
        </div>

        <div className="item">
          <i className="pointing right icon" />
          <div className="content">
            <div className="header">message()</div>
            <p>
              Returns text given in the 'validMessage' validation if the value
              is valid. Returns text given in the 'invalidMessage' validation if
              the value is invalid.
            </p>
            <PrismCode
              component="pre"
              className="language-javascript"
            >{`Example({
  password: ViewModel.property.string
    .notBlank
    .min(15)
    .validMessage('Good Password')
    .invalidMessage('Password must be at least 15 characters long.'),
  log() {
    console.log( this.password.message() );
  },
  render() {
    <div />
  }
})`}</PrismCode>
          </div>
        </div>

        <div className="item">
          <i className="pointing right icon" />
          <div className="content">
            <div className="header">validating()</div>
            <p>Returns true if the property has a pending async validation.</p>
            <PrismCode
              component="pre"
              className="language-javascript"
            >{`Example({
  password: ViewModel.property.string
    .validateAsync((value, done) => {
      // Simulate an async call to the server
      // Reject a value that ends with 'X'
      setTimeout(() => (value.endsWith("X") ? done(false) : done(true)), 50)
    }),
  render() {
    <i class="ui icon spinner" b="if: password.validating" />
  }
})`}</PrismCode>
          </div>
        </div>

        <div className="item">
          <i className="pointing right icon" />
          <div className="content">
            <div className="header">validatingMessage()</div>
            <p>
              The message used while the property is being validated
              asynchronously.
            </p>
            <PrismCode
              component="pre"
              className="language-javascript"
            >{`Example({
  username: ViewModel.property.string
    .validatingMessage('Checking username is available')
    .validateAsync((value, done) => {
      // Check that username is available
    }),
  render() {
    <span b="text: username.validatingMessage" />
  }
})`}</PrismCode>
          </div>
        </div>
      </div>

      <p>
        See <a href="#AdvancedValidation">validation</a> for more information.
      </p>
    </div>;
  }
});
