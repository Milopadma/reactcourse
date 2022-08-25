import { useState } from "react";

export default function Dropdown({ options }) {
  const [Selection, setSelection] = useState(null);
  const renderedOptions = options.map((option) => {
    return (
      <div key={option.label}>
        <button>{option.label}</button>
      </div>
    );
  });

  return (
    <div>
      <h1>Dropdown</h1>
      <div className="ui selection dropdown">
        <div className="field"></div>
        <label className="label">Select Option</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">Select Option</div>
          <div className="menu visible transition">{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
}
