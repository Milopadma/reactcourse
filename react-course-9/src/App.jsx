import React from "react";
import UserCreate from "./components/UserCreate";
import LanguageContext from "./contexts/LanguageContext";
import ColorContext from "./contexts/ColorContext";

class App extends React.Component {
  state = { language: "english", color: "primary" };

  // callback function for the onClick event
  onLanguageChange = (language, color) => {
    this.setState({ language, color });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          <h1>Select a language:</h1>
          <i
            className="flag uk"
            onClick={() => this.onLanguageChange("english", "primary")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch", "red")}
          />
        </div>
        {/* Provider components are used to provide 
        a value to all child components*/}
        {/* // using multiple providers */}
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value={this.state.color}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
