import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import Translate from "./components/Translate";
import Users from "./components/Users";
import Route from "./components/Route";

import Header from "./components/Header";

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

// const showDropdownComponent = () => {
//   if (window.location.pathname === "/dropdown") {
//     return (
//       <div>
//         <h3>Dropdown</h3>
//         <button onClick={() => setShowDropdown(!showDropdown)}>
//           toggle dropdown
//         </button>
//         {showDropdown ? <Dropdown /> : null}
//       </div>
//     );
//   }
// };

export default function App() {
  const [selected, setSelected] = useState(options[0]); //for dropdown
  const [showDropdown, setShowDropdown] = useState(true); //for dropdown

  return (
    <div>
      <br />
      <h1 className="ui header one center aligned">React Widgets</h1>
      {/* nav */}
      <Header /> 
      <br />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="select a color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
    </div>
  );
}
