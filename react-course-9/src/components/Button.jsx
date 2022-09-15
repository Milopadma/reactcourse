import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  render() {
    // Consumer component is used to consume the
    // value provided by the Provider component.
    return (
      <ColorContext.Consumer>
        {/* Consumers need to get passed a function as its child*/}
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => (value === "english" ? "Submit" : "Voorleggen")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
