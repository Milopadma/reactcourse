import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

export default function Translate() {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text); // debounce the text input

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);


  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label={"select a language"}
        selected={language}
        options={options}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3>Translated Text;</h3>
      <Convert text={text} language={language} />
    </div>
  );
}
