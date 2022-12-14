import React, { useState } from "react";

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((items, index) => {
    const active = index === activeIndex ? "active" : "";
    // render each item in the array
    return (
      <React.Fragment key={items.title}>
        <div
          className={`title ${active}`}
          onClick={() => {
            onTitleClick(index);
          }}
        >
          <i className="dropdown icon"> </i>
          {items.title}
        </div>
        <div className={`content ${active}`}>
          <p>{items.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>; // return the rendered items
}
