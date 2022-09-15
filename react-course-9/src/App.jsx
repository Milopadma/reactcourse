import React from "react";
//components
import UserCreate from "./components/UserCreate";
import LanguageSelector from "./components/LanguageSelector";
//contexts
// import ColorContext from "./contexts/ColorContext";
import { LanguageStore } from "./contexts/LanguageContext";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <UserCreate />
        </LanguageStore>
      </div>
    );
  }
}

export default App;
