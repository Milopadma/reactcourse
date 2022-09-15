import React from "react";
import UserCreate from "./components/UserCreate";

class App extends React.Component {
  state = { language: "english" };

  // callback function for the onClick event
  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          <h1>Select a language:</h1>
          <i
            className="flag uk"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
