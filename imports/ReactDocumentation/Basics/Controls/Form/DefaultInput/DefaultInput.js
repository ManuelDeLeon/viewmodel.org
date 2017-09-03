DefaultInput({
  label: '',
  placeholder: '',
  text: '',
  render(){
    <div class="field">
      <label b="text: label" />
      <input type="text" b="value: text" placeholder={this.placeholder()} />
    </div>
  }
});