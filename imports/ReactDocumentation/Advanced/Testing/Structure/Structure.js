Structure({
  showSub: false,
  colors: [],
  render() {
    <div>
      <Sub b="if: showSub" />
      <div b="repeat: colors, text: repeatObject" />
    </div>
  }
});