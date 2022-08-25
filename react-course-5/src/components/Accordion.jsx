import React from "react";

export default function Accordion({ items }) {
  const renderedItems = items.map((items) => {
    // render each item in the array
    return (
      <React.Fragment key={items.title}>
        <div className="title active">
          <i className="dropdown icon"> </i>
          {items.title}
        </div>
        <div className="content active">
          <p>{items.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>; // return the rendered items
}
