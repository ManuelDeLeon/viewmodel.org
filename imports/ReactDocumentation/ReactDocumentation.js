ReactDocumentation({
  render() {
    <div class="ui two column centered grid" style="width: 1024px">
      <div id="react-menu" class="four wide column">
        <Menu />
      </div>
      <div class="twelve wide column" style="width: 740px">
        <Logo />
        <Introduction />
        <Basics b="defer: true" />
        <Advanced b="defer: true" />
        <Bindings b="defer: true" />
        <Finally b="defer: true" />
      </div>
    </div>;
  }
});
