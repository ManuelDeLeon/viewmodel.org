Person({
  firstName: '',
  lastName: '',
  fullName() {
    return this.firstName() + ' ' + this.lastName();
  },
  render() {
    <form class="ui form" style="width: 40%">
      <div class="field">
        <label>First Name:</label>
        <input type="text" b="value: firstName" />
      </div>
      <div class="field">
        <label>Last Name:</label>
        <input type="text" b="value: lastName" />
      </div>
      <div class="field">
        <label b="text: 'Hello ' + fullName" />
      </div>
      <a class="ui button" b="click: reset">Reset Fields</a>
    </form>
  }
})