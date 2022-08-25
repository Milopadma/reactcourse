import { useState, useEffect } from "react";
import Axios from "axios";

export default function Search() {
  const [Term, setTerm] = useState("ReactJS"); //state hook for the search term
  const [Results, setResults] = useState([]); //state hook for the results
  useEffect(() => {
    const SearchWiki = async () => {
      //search function
      const { data } = await Axios.get(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json&srsearch=${Term}`
      );
      setResults(data.query.search);
    };

    const timeoutID = setTimeout(() => {
      if (Term) {
        SearchWiki();
        console.log("called");
      }
    }, 250);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [Term]); //second argument controls when the effect runs,
  //if nothing, it runs on initial and every render.
  //if empty array, it runs on initial render.
  //if you pass an array, it runs on initial and every render when the array changes.

  const renderedReults = Results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content"></div>
        <div className="content">
          <div className="header">{result.title}</div>
          <div className="description">
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>{" "}
            {/* !risky */}
          </div>
          <div className="right floated content">
            <a
              className="ui button"
              href={`https://en.wikipedia.org/?curid=${result.pageid}`}
            >
              Go
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="field">
          <label>Enter search term: </label>
          <input
            className="input"
            type="text"
            value={Term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <div className="ui segment">{renderedReults}</div>
        </div>
      </div>
    </div>
  );
}
