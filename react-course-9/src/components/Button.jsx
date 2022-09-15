import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  //hook up context object to class component
  static contextType = LanguageContext;

  render() {
    return <button className="ui button primary">Submit</button>;
  }
}

export default Button;
