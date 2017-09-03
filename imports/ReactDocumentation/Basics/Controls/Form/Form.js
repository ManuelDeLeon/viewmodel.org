Form({
  logName() {
    console.log( this.name.text() );
  },
  render(){
    <form class="ui form" style="width: 40%">
      <DefaultInput b="ref: name" label="Name:" placeholder="Your name" />
      <button type="button" class="ui button" b="click: logName">Log Name</button>
      <label b="text: name.text" />
    </form>
  }
});