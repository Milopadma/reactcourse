import React from "react";

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.props.onLanguageChange("english", "primary")}
        />
        <i
          className="flag nl"
          onClick={() => this.props.onLanguageChange("dutch", "red")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
