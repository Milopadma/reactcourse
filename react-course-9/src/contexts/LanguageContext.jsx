import React from "react";

// Create a new context object
const Context = React.createContext("english");

// Create a new component that will be used to wrap the entire app
// and provide the context object to all the components inside of it.
export class LanguageStore extends React.Component {
  state = { language: "english", color: "primary" };

  onLanguageChange = (language, color) => {
    this.setState({ language, color });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
