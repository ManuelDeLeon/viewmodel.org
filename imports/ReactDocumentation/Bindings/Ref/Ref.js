import { PrismCode } from "react-prism";
Ref({
  show: false,
  autorun: function() {
    const show = this.show();

    // Set a property on a child component (a control so to speak)
    this.blueLabel.show(show);

    // Manipulate an html element directly
    if (show) {
      this.redLabel.style.display = "block";
    } else {
      this.redLabel.style.display = "none";
    }
  },
  render() {
    <div class="ui segment">
      <h2 class="ui header">ref</h2>
      <a class="anchor active" id="BindingsRef" />
      <p>
        The ref binding gives you a way to interact with an html element or
        sub-component without resorting to selectors. When you reference a
        component you get a hold of the component instance. This allows you to
        use sub-components as controls/widgets.
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`b="ref: elementName"`}</PrismCode>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`this.elementName`}</PrismCode>

      <h3>ref demo</h3>

      <div class="ui segment basic">
        <div class="ui grid">
          <div class="four wide column">
            <a b="toggle: show" class="ui button">
              {" "}
              Toggle Label
            </a>
          </div>
          <div class="four wide column">
            <label b="ref: redLabel" class="ui red label">
              Referencing an element
            </label>
          </div>
          <div class="four wide column">
            <BlueLabel b="ref: blueLabel" />
          </div>
        </div>
      </div>

      <PrismCode component="pre" className="language-javascript">{`Example({
  show: false,
  autorun: function() {
    const show = this.show();

    // Set a property on a child component (a control so to speak)
    this.blueLabel.show(show);

    // Manipulate an html element directly
    if ( show ) {
      this.redLabel.style.display = 'block';
    } else {
      this.redLabel.style.display = 'none';
    }
  },
  render() {
    <div>
      <a b="toggle: show" class="ui button"> Toggle Label</a>
      <label b="ref: redLabel" class="ui red label" >Referencing an element</label>
      <BlueLabel b="ref: blueLabel" />
    </div>
  }
});

BlueLabel({
  show: false,
  render(){
    <label b="if: show" class="ui blue label">
      Referencing a sub component
    </label>
  }
});`}</PrismCode>

      <p>
        You can also use ref to format controls with Javascript. Here's a
        dropdown using Semantic UI.
      </p>
      <hr />
      <CreditCard />
      <hr />
      <PrismCode component="pre" className="language-javascript">{`CreditCard({
  creditCard: '',
  rendered(){
    $(this.creditCardDropdown).dropdown();
  },
  render(){
    <form>
      <div class="field">
        <label b="text: 'Selected: ' + creditCard" />
      </div>
      <div class="field">
        <label>Card Type</label>
        <div class="ui selection dropdown" b="ref: creditCardDropdown">
          <input b="value: creditCard" type="hidden" name="card[type]" />
          <div class="default text">Type</div>
          <i class="dropdown icon"></i>
          <div class="menu">
            <div class="item" data-value="visa">
              <i class="visa icon"></i>
              Visa
            </div>
            <div class="item" data-value="amex">
              <i class="amex icon"></i>
              American Express
            </div>
            <div class="item" data-value="discover">
              <i class="discover icon"></i>
              Discover
            </div>
          </div>
        </div>
      </div>
    </form>
  }
})`}</PrismCode>
    </div>;
  }
});
