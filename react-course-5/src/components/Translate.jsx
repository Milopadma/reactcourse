import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";

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
  return (
    <Dropdown
    label= {"select a language"}
      selected={language}
      options={options}
      onSelectedChange={setLanguage}
    />
  );
}
