ViewModel.share({
  house: {
    address: '123 Main St.'
  }
});

Person({
  share: 'house',
  address: '',
  render() {
    <div class="item">
      <div class="content">
        <input type="text" b="value: name" />
        <input type="text" b="value: address" />
      </div>
    </div>
  }
});