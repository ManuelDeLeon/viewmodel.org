import { PrismCode } from "react-prism";
Find({
  render(){
    <div class="ui segment">
      <h2 class="ui header">find & findOne</h2>
      <a class="anchor active" id="AdvancedFind"></a>
      <p>
        Use these functions if you need to communicate with a component directly and you can't use shared properties. An example of this is with an element created by a JavaScript library. They both take an optional string with the name of the component and an optional function to find a component.
      </p>

      <h3>Returns all Person components</h3>
<PrismCode component="pre" className="language-javascript">{`ViewModel.find('Person')`}</PrismCode>

      <h3>Returns a single Person component</h3>
<PrismCode component="pre" className="language-javascript">{`ViewModel.findOne('Person')`}</PrismCode>

      <h3>Returns all Person components with age >= 18</h3>
<PrismCode component="pre" className="language-javascript">{`ViewModel.find('Person', (c) => c.age() >= 18 )`}</PrismCode>

      <h3>Returns the first component with the customId of 66</h3>
<PrismCode component="pre" className="language-javascript">{`ViewModel.findOne((c) => c.customId && c.customId() === 66 )`}</PrismCode>

    </div>
  }
});