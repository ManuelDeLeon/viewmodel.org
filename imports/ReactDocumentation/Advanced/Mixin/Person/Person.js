ViewModel.mixin({
  house: {
    address: '123 Main St.'
  }
});

Person({
  mixin: 'house',
  name: '',
  render() {
    <div class="item">
      <div class="content">
        <input type="text" b="value: name" />
        <input type="text" b="value: address" />
      </div>
    </div>
  }
});