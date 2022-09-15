import React from "react";
import UserCreate from "./components/UserCreate";
import LanguageContext from "./contexts/LanguageContext";

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
        {/* Provider component is used to provide 
        a value to all child components*/}
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
