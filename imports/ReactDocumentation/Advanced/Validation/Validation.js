import { PrismCode } from "react-prism";
Validation({
  firstName: ViewModel.property.string.notBlank
    .validMessage("First name looks good")
    .invalidMessage("First message can't be blank or end with an X")
    .validatingMessage("Checking first name doesn't end with an X")
    .validateAsync((value, done) => {
      // Simulate an async call to the server
      setTimeout(() => (value.endsWith("X") ? done(false) : done(true)), 500);
    }),
  lastName: ViewModel.property.string
    .validate(function(value) {
      return this.firstName() === "n/a" ? value : true;
    })
    .invalidMessage("Last name required when First is 'n/a'"),
  age: ViewModel.property.integer
    .min(18)
    .default("") // Override the default value of zero
    .invalidMessage("Must be at least 18 years old")
    .validMessage("Is an adult (at least legally)"),
  address: "", // It's a string so it defaults to ViewModel.property.string
  render() {
    <div class="ui segment">
      <h2 class="ui header">Validation</h2>
      <a class="anchor active" id="AdvancedValidation" />
      <p>
        Validating properties (typically form data) in ViewModel is achieved by
        declaring the properties with 'ViewModel.property'. In the following
        example the name property is a string and it must not be blank (null,
        undefined, empty, spaces).
      </p>
      <PrismCode component="pre" className="language-javascript">{`Example({
  name: ViewModel.property.string.notBlank,
  render() {
    <div />
  }
})`}</PrismCode>

      <p>
        Later on you can check whether the name property has a valid value with:
      </p>

      <PrismCode
        component="pre"
        className="language-javascript"
      >{`viewmodel.name.valid()`}</PrismCode>

      <p>
        See <a href="#AdvancedProperties">view model properties</a> for more
        information.
      </p>
      <h3>Validation demo</h3>
      <p>
        In this example first name can't be blank or end in an 'X' (checked
        asynchronously), last name required when First is 'n/a', age must be an
        integer greater or equal to 18, address has to be a string.
      </p>
      <div class="ui padded segment">
        <div class="ui two column grid">
          <div class="ui column">
            <form class="ui form">
              <div class="field" b="class: { error: firstName.invalid }">
                <label>First Name</label>
                <div
                  b="class: { loading: firstName.validating }"
                  class="ui icon input "
                >
                  <input
                    type="text"
                    b="value: firstName, attr: { title: firstName.message }"
                  />
                  <i class="icon" b="if: firstName.validating" />
                  <i
                    class="thumbs outline icon"
                    b="if: !firstName.validating, class: { down: firstName.invalid }"
                  />
                </div>
              </div>
              <div class="field" b="class: { error: lastName.invalid }">
                <label>Last Name</label>
                <div class="ui icon input ">
                  <input type="text" b="value: lastName" />
                  <i
                    class="thumbs down outline icon"
                    b="if: lastName.invalid"
                  />
                </div>
              </div>
              <div class="field" b="class: { error: age.invalid }">
                <label>Age</label>
                <div class="ui icon input ">
                  <input
                    type="text"
                    b="value: age, attr: { title: age.message }"
                  />
                  <i class="thumbs down outline icon" b="if: age.invalid" />
                </div>
              </div>
              <div class="field">
                <label>Address</label>
                <div class="ui icon input ">
                  <input type="text" b="value: address" />
                </div>
              </div>
              <div class="ui blue button" b="class: { disabled: !valid }">
                Log Name
              </div>
            </form>
          </div>
          <div class="ui column">
            <label>Errors:</label>

            <ul class="ui list">
              {this.invalidMessages().map((message, i) => {
                return <li key={i}>{message}</li>;
              })}
            </ul>

            <hr />

            <label>Valid Messages:</label>
            <ul class="ui list">
              {this.validMessages().map((message, i) => {
                return <li key={i}>{message}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>

      <PrismCode component="pre" className="language-javascript">{`Example({

  firstName: ViewModel.property.string.notBlank
    .validMessage('First name looks good')
    .invalidMessage("First message can't be blank or end with an X")
    .validatingMessage("Checking first name doesn't end with an X")
    .validateAsync((value, done) => {
      // Simulate an async call to the server
      setTimeout(() => (value.endsWith("X") ? done(false) : done(true)), 500)
    }),

  lastName: ViewModel.property.string
    .validate(function(value) { return this.firstName() === "n/a" ? value : true })
    .invalidMessage("Last name required when First is 'n/a'"),

  age: ViewModel.property.integer.min(18)
    .default("") // Override the default value of zero
    .invalidMessage("Must be at least 18 years old")
    .validMessage("Is an adult (at least legally)"),

  address: '', // It's a string so it defaults to ViewModel.property.string,

  render() {
    <div class="ui padded segment">
      <div class="ui two column grid">
        <div class="ui column">
          <form class="ui form">

            <div class="field" b="class: { error: firstName.invalid }">
              <label>First Name</label>
              <div class="ui icon input " b="class: { loading: firstName.validating }">
                <input type="text" b="value: firstName, attr: { title: firstName.message }"/>
                <i class="icon" b="if: firstName.validating"></i>
                <i class="thumbs outline icon" b="if: !firstName.validating, class: { down: firstName.invalid }"></i>
              </div>
            </div>

            <div class="field" b="class: { error: lastName.invalid }">
              <label>Last Name</label>
              <div class="ui icon input " >
                <input type="text" b="value: lastName" />
                <i class="thumbs down outline icon" b="if: lastName.invalid"></i>
              </div>
            </div>

            <div class="field" b="class: { error: age.invalid }">
              <label>Age</label>
              <div class="ui icon input " >
                <input type="text" b="value: age, attr: { title: age.message }" />
                <i class="thumbs down outline icon" b="if: age.invalid"></i>
              </div>
            </div>

            <div class="field" >
              <label>Address</label>
              <div class="ui icon input ">
                <input type="text" b="value: address" />
              </div>
            </div>

            <div class="ui blue button" b="class: { disabled: !valid }">Log Name</div>

          </form>
        </div>
        <div class="ui column">
          <label>Errors:</label>

          <ul class="ui list">
            {this.invalidMessages().map((message, i) => {
              return <li key={i}>{message}</li>
            })}
          </ul>

          <hr />

          <label>Valid Messages:</label>
          <ul class="ui list">
            {this.validMessages().map((message, i) => {
              return <li key={i}>{message}</li>
            })}
          </ul>

        </div>
      </div>
    </div>
  }
})`}</PrismCode>

      <h3>Must know</h3>
      <p>
        You only need to know three things to work with validations: validate,
        validateAsync, and default. Every other validation is just a shortcut
        for 'validate'.
      </p>
      <div class="ui relaxed list">
        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">validate( function(value){"{"} } )</div>
            <p>
              The validation will pass if the function returns true for the
              given value. You can call it multiple times if it makes your code
              clearer.
            </p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">
              validateAsync( function(value, done){"{"} } )
            </div>
            <p>
              The validation will pass if the asynchronous function calls the
              done callback with true (for the given value).
            </p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">default( value )</div>
            <p>Provides a default value for the property.</p>
          </div>
        </div>
      </div>

      <h3>Should know</h3>
      <p>
        When doing validations you typically have to display sucess/fail
        messages to the user. You can specify which messages to use when the
        property is valid, invalid, or validating (asynchronously).
      </p>
      <div class="ui relaxed list">
        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">
              validMessage('Message when value is valid')
            </div>
            <p>The message to use when the value of the property is valid.</p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">
              invalidMessage('Message when value is invalid')
            </div>
            <p>The message to use when the value of the property is invalid.</p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">
              validatingMessage('Message when value is validating')
            </div>
            <p>
              The message to use when the value of the property is still in the
              process of being invalidated.
            </p>
          </div>
        </div>
      </div>

      <h3>Nice to know:</h3>
      <p>You don't really need these but they're nice shortcuts.</p>
      <div class="ui relaxed list">
        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">string</div>
            <p>The property contains a string.</p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">notBlank</div>
            <p>
              The string property doesn't contain a blank value (null,
              undefined, empty, spaces).
            </p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">number</div>
            <p>
              The property contains a number. For convenience when using input
              controls (the most common use case) strings are tried to be
              converted to numbers.
            </p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">integer</div>
            <p>
              The property contains an integer. For convenience when using input
              controls (the most common use case) strings are tried to be
              converted to numbers.
            </p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">boolean</div>
            <p>The property contains a boolean (true/false) value.</p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">object</div>
            <p>The property contains an object.</p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">date</div>
            <p>The property contains a date.</p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">array</div>
            <p>The property contains an array.</p>
          </div>
        </div>
      </div>

      <h3>If you're interested</h3>
      <div class="ui relaxed list">
        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">equal(value)</div>
            <p>The property is equal to the given value.</p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">notEqual(value)</div>
            <p>The property is not equal to the given value.</p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">min(value)</div>
            <p>
              For string properties the length is at least the given value.<br />
              For number/integer/date properties the content is at least the
              given value.<br />
              To compare other types use the 'validate(function)' validation.
            </p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">max(value)</div>
            <p>
              For string properties the length is at most the given value.<br />
              For number/integer/date properties the content is at most the
              given value.<br />
              To compare other types use the 'validate(function)' validation.
            </p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">between( min, max )</div>
            <p>
              The property is equal or greater than minValue and also equal or
              lesser than maxValue.<br />
              For strings the length is used.
            </p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">notBetween( min, max )</div>
            <p>
              The property is greater than maxValue or lesser than minValue.<br />
              For strings the length is used.
            </p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">regex(regularExpression)</div>
            <p>The property value passes the given regular expression.</p>
          </div>
        </div>
      </div>

      <h3>If you're insane</h3>
      <p>
        If you ever think it's a good idea to convert values bound to a text
        box, step away from the keyboard, take a deep breath, and rethink what
        you're doing because it will probably be a mess. It's much better to let
        the user enter whatever they want in an input and simply warn them that
        the input is invalid.
      </p>
      <div class="ui relaxed list">
        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">convert</div>
            <p>
              Tries to convert the values to the correct type before updating
              the property. e.g. ViewModel.property.number.convert will call
              parseFloat on values before updating the property.
            </p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">
              convertIn( function(value) {"{"} return modifiedValue; } )
            </div>
            <p>
              Specify a function to run before the value is saved to the
              property. This is a chance to modify the value before saving it to
              the property.
            </p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">
              convertOut( function(value) {"{"} return modifiedValue; } )
            </div>
            <p>
              Specify a function to run when you access a property. This is a
              chance to modify the value when a property is read.
            </p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">beforeUpdate( function(value) {"{"} } )</div>
            <p>Do something before the property is updated with a new value.</p>
          </div>
        </div>

        <div class="item">
          <i class="pointing right icon" />
          <div class="content">
            <div class="header">afterUpdate( function(value) {"{"} } )</div>
            <p>Do something after the property is updated with a new value.</p>
          </div>
        </div>
      </div>
    </div>;
  }
});
