import { useState, useEffect, useRef } from "react";
import Axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  useEffect(() => {
    const translate = async () => {
      const { data } = await Axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    translate();
  }, [language, text]);
  return (
    <div>
      <h1>{translated}</h1>
    </div>
  );
};

export default Convert;
