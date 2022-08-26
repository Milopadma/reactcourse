import { useState, useEffect, useRef } from "react";
import Axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text); // debounce the text input

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  useEffect(() => {
    const translate = async () => {
      const { data } = await Axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    translate();
  }, [language, debouncedText]);
  return (
    <div>
      <h1>{translated}</h1>
    </div>
  );
};

export default Convert;
