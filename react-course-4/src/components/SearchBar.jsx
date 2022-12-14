import React from "react";

// export default class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { term: "" };
//   }

//   onInputChange = (term) => { //when the user types in the search bar, this function is called
//     this.setState({ term });
//   };

//   onFormSubmit = (event) => { //when the user submits the form, this function is called, callback function passed in as a prop
//     event.preventDefault();
//     this.props.onFormSubmit(this.state.term);
//   };

//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form className="ui form" onSubmit={this.onFormSubmit}>
//           <div className="field">
//             <label>Video search</label>
//             <input
//               type="text"
//               value={this.state.term}
//               onChange={(event) => this.onInputChange(event.target.value)}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

import { useState } from "react";

//refactoring to class compononent to functional component
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    //when the user submits the form, this function is called, callback function passed in as a prop
    event.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video search</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
