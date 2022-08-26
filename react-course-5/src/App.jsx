import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import Translate from "./components/Translate";
import Users from "./components/Users";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework.",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components.",
  },
];

const options = [
  //for dropdown
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

//for page routing
const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === "/list") {
    return <Search />;
  }
};

const showDropdownComponent = () => {
  if (window.location.pathname === "/dropdown") {
    return (
      <div>
        <h3>Dropdown</h3>
        <button onClick={() => setShowDropdown(!showDropdown)}>
          toggle dropdown
        </button>
        {showDropdown ? (
          <Dropdown
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
          />
        ) : null}
      </div>
    );
  }
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

export default function App() {
  const [selected, setSelected] = useState(options[0]); //for dropdown
  const [showDropdown, setShowDropdown] = useState(true); //for dropdown

  return (
    <div>
      <h1 className="ui header one center aligned">React Widgets</h1>
      <br />
      {showAccordion()}
      {showList()}
      {showDropdownComponent()}
      {showTranslate()}
    </div>
  );
}
