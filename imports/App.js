const Reload = require("meteor/reload").Reload;
App({
  prepareReload() {
    const that = this;
    that.vmExplorer.loadLastState();
    Reload._onMigrate(() => {
      that.vmExplorer.saveLastState();
      return [true];
    });
  },
  render() {
    <div>
      <ViewModelExplorer
        b="defer: true, ref: vmExplorer"
        rendered={() => this.prepareReload()}
      />
      <Header />
      <div class="ui one column centered grid">
        <div id="body-main" class="column">
          <ReactDocumentation />
        </div>
      </div>
    </div>;
  }
});
