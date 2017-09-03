App({
  render() {
    <div>
      <ViewModelExplorer b="defer: true" />
      <Header />
      <div class="ui one column centered grid">
        <div id="body-main" class="column">
          <ReactDocumentation />
        </div>
      </div>
    </div>;
  }
});
