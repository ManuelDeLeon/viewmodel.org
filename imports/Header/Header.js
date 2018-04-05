Header({
  render() {
    <div class="ui fixed main menu inverted" style="height: 45px">
      <div class="title item">
        <a href="/">
          <img src="/images/viewmodel_logo_inv.png" />
        </a>
      </div>

      <div class="left menu">
        <div class="item">
          <iframe
            src="https://platform.twitter.com/widgets/tweet_button.html?size=m&url=https%3A%2F%2Fviewmodel.org&text=MVVM%20%2B%20React%20%3D%20ViewModel.&hashtags=mvvm%2Creact"
            width="80"
            height="25"
            title="Twitter Tweet Button"
            style="border: 0; overflow: hidden;"
          />
          <iframe
            src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=124&layout=button&action=like&size=small&show_faces=true&share=true&height=46&appId"
            width="124"
            height="46"
            style="border:none;overflow:hidden;margin-top: 20px"
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"
          />
        </div>
      </div>

      <div class="right menu ">
        <div class="item">
          <a
            target="_blank"
            href="https://viewmodelblaze.azurewebsites.net/blaze"
          >
            Blaze
          </a>
        </div>

        <div class="item">
          <a
            target="_blank"
            href="https://github.com/ManuelDeLeon/viewmodel-react/issues"
          >
            Help
          </a>
        </div>
      </div>
    </div>;
  }
});
