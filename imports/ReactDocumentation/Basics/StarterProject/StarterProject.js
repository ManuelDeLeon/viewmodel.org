import { PrismCode } from "react-prism";
StarterProject({
  render() {
    <div class="ui segment">
      <h2 class="ui header">Starter Project</h2>
      <a class="anchor active" id="BasicsStarterProject" />
      <p>
        You can use the{" "}
        <a
          target="_blank"
          href="https://github.com/ManuelDeLeon/viewmodel-react-starter"
        >
          viewmodel-react-starter
        </a>{" "}
        project to play with ViewModel.
      </p>

      <p>Download the starter project:</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`git clone https://github.com/ManuelDeLeon/viewmodel-react-starter.git`}</PrismCode>

      <p>Install dependencies:</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`cd viewmodel-react-starter
npm install`}</PrismCode>

      <p>Run tests:</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`npm test`}</PrismCode>

      <p>Start the app:</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`npm start`}</PrismCode>

      <h3>Meteor</h3>
      <p>
        If you're using Meteor then check out the{" "}
        <a
          target="_blank"
          href="https://github.com/ManuelDeLeon/viewmodel-react-starter-meteor"
        >
          viewmodel-react-starter-meteor
        </a>{" "}
        project.
      </p>
    </div>;
  }
});
