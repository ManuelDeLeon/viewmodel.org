import { PrismCode } from "react-prism";
Events({
  render() {
    <div class="ui segment">
      <h2 class="ui header">Events</h2>
      <a class="anchor active" id="BasicsEvents" />
      <p>
        You can bind any event to a function of the component. Let's add a
        button to reset our little form:
      </p>

      <PrismCode component="pre" className="language-javascript">{`Person({
  firstName: '',
  lastName: '',
  fullName() {
    return this.firstName() + ' ' + this.lastName();
  },
  resetFields() {
    this.firstName('');
    this.lastName('');
  },
  render() {
    <div>
      First Name: <input b="value: firstName" />
      Last Name: <input b="value: lastName" />
      <label b="text: 'Hello ' + fullName" />
      <button b="click: resetFields">Reset Fields</button>
    </div>
  }
})`}</PrismCode>

      <p>
        Here we're binding the click event of the button to the function
        resetFields. You can use any event available to an element and bind it
        to a function.
      </p>

      <p>
        In resetFields we're clearing the properties manually but what if the
        default value is different than empty? We'd have two places to update
        our code. ViewModel properties have a .reset() method of their own (one
        of the reasons properties are converted to "function properties"). Let's
        use that instead:
      </p>

      <PrismCode component="pre" className="language-javascript">{`Person({
  firstName: '',
  lastName: '',
  fullName() {
    return this.firstName() + ' ' + this.lastName();
  },
  resetFields() {
    this.firstName.reset();
    this.lastName.reset();
  },
  render() {
    <div>
      First Name: <input b="value: firstName" />
      Last Name: <input b="value: lastName" />
      <label b="text: 'Hello ' + fullName" />
      <button b="click: resetFields">Reset Fields</button>
    </div>
  }
})`}</PrismCode>

      <p>
        So far so good but ViewModel has one more trick to help with form data.
        Components have a .reset() method themselves which resets the entire
        component to its default values. Let's use that in resetFields:
      </p>

      <PrismCode component="pre" className="language-javascript">{`Person({
  firstName: '',
  lastName: '',
  fullName() {
    return this.firstName() + ' ' + this.lastName();
  },
  resetFields() {
    this.reset();
  },
  render() {
    <div>
      First Name: <input b="value: firstName" />
      Last Name: <input b="value: lastName" />
      <label b="text: 'Hello ' + fullName" />
      <button b="click: resetFields">Reset Fields</button>
    </div>
  }
})`}</PrismCode>

      <p>
        We can take it further and call reset from the button's click binding
        and get rid of the resetFields function (almost always a good thing to
        get rid of code):
      </p>

      <PrismCode component="pre" className="language-javascript">{`Person({
  firstName: '',
  lastName: '',
  fullName() {
    return this.firstName() + ' ' + this.lastName();
  },
  render() {
    <div>
      First Name: <input b="value: firstName" />
      Last Name: <input b="value: lastName" />
      <label b="text: 'Hello ' + fullName" />
      <button b="click: reset">Reset Fields</button>
    </div>
  }
})`}</PrismCode>

      <hr />
      <h3>Result:</h3>
      <Person />
    </div>;
  }
});
