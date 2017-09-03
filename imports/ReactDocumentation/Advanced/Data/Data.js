import { PrismCode } from "react-prism";
Data({
  render(){
    <div class="ui segment">
      <h2 class="ui header">.data</h2>
      <a class="anchor active" id="AdvancedData"></a>
      <p>
        This method returns a plain javascript object with the values of the viewmodel properties. It will not include function results.
      </p>



      <PrismCode component="pre" className="language-javascript">{`component.data()`}</PrismCode>
<PrismCode component="pre" className="language-javascript">{`Person({
  first: 'Alan',
  last: 'Brito',
  full() {
    return this.first() + ' ' + this.last();
  },
  log() {
    var obj = this.data();
    console.log(obj);
  },
  render() {
    <div>
      <button b="click: log, text: 'Log ' + full" />
    </div>
  }
})`}</PrismCode>

      <p>In this case the log function will output:</p>
      <PrismCode component="pre" className="language-javascript">{`{ first: 'Alan', last: 'Brito' }`}</PrismCode>

<hr />
  <Person />
    </div>
  }
});