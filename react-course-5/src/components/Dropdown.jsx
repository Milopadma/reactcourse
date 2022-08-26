import { useState, useEffect, useRef } from "react";

export default function Dropdown({ options, selected, onSelectedChange, label }) {
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
  const onBodyClick = (event) => {
    if (ref.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  document.body.addEventListener("click", onBodyClick, { capture: true });

  return () => {
    document.body.removeEventListener("click", onBodyClick, {
      capture: true,
    });
  };
}, []);

  return (
    <div>
      <h1>Dropdown</h1>
      <div ref={ref} className="ui form">
        <div className="field"></div>
        <label className="label">{label}</label>
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
