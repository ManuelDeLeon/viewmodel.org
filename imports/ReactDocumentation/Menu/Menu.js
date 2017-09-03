Menu({
  rendered() {
    $(".accordion").accordion();
  },
  render() {
    <div class="ui sticky "
         style="position: fixed;
          overflow: auto;
          overflow-x: hidden;
          width: 170px;
          height: 500px;
          background-color: white">
      <h2 class="ui top header" style="margin-top: 5px; margin-left: 20px;">
        ViewModel
      </h2>
      <hr />
      <div class="ui vertical following fluid accordion text menu ">
        <Introduction />
        <Basics />
        <Advanced />
        <Bindings />
      </div>
    </div>
  }
});