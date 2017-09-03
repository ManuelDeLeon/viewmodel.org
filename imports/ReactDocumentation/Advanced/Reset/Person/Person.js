Person({
  firstName: '',
  lastName: 'n/a',
  render() {
    <form class="ui form" style="width: 40%">
      <div class="field">
        <label>First Name:</label>
        <input type="text" b="value: firstName"/>
      </div>
      <div class="field">
        <label>Last Name:</label>
        <input type="text" b="value: lastName"/>
      </div>
      <button type="button" class="ui blue button" b="click: reset">Reset Fields</button>
    </form>
  }
})