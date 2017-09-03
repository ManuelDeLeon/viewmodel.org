CreditCard({
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
          <input b="value: creditCard" type="hidden" name="card[type]" b="ref: creditCardInput" />
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
})