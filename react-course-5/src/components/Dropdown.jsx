import { useState, useEffect, useRef } from "react";

export default function Dropdown({ options, selected, onSelectedChange }) {
  const [Open, setOpen] = useState(false);
  const ref = useRef();

  const renderedOptions = options.map((option) => {
    //dont show currently selected option in the dropdown
    if (option.value === selected.value) {
      return null;
    }
    //show the options in the dropdown
    return (
      <div key={option.label}>
        <button className="item" onClick={() => onSelectedChange(option)}>
          {option.label}
        </button>
      </div>
    );
  });

  useEffect(() => {
    document.body.addEventListener(
      //listen to clicks outside the dropdown
      "click",
      () => {
        if (ref.current.contains(event.target)) {
          //if the click is inside the dropdown, do nothing
          return;
        }
        //if the click is outside the dropdown
        setOpen(false);
      },
      { capture: true }
    );
  }, []);

  return (
    <div>
      <h1>Dropdown</h1>
      <div ref={ref} className="ui form">
        <div className="field"></div>
        <label className="label">Select Option</label>
        <div
          onClick={() => setOpen(!Open)} //reverse the open state
          className={`ui selection dropdown ${Open ? "visible active" : ""}`} //show the dropdown if open is true
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${Open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}
