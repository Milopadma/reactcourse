import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  render() {
    // Consumer component is used to consume the
    // value provided by the Provider component.
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => (value === "english" ? "Submit" : "Voorleggen")}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
