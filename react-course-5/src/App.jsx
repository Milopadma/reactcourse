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
function App() {
  const [selected, setSelected] = useState(options[0]); //for dropdown
  const [showDropdown, setShowDropdown] = useState(true); //for dropdown

  return (
    <div className="App">
      <h1>React Widgets</h1>
      <br />
      {/* <h3>Accordion</h3> */}
      {/* <Accordion items={items} /> */}
      {/* <h3>Wikipedia Search</h3>
      <Search /> */}
      {/* <h3>Dropdown</h3>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        toggle dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
      <Translate />
      {/* <Users /> */}
    </div>
  );
}

export default App;
