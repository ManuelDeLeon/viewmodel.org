Finally({
  rendered() {
    const hash = window.location.hash;
    window.location.hash = hash + "X";
    window.location.hash = hash;
  },
  render() {
    <div />;
  }
});
