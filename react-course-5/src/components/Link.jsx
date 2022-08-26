const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      //if the meta key or ctrl key is pressed, open in a new tab (do normal behavior)
      return;
    }
    event.preventDefault();
    window.history.pushState(null, "", href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent); //broadcast the event to all the windows
  };
  return (
    <a className={className} onClick={onClick} href={href}>
      {children} 
      {/* the children refers to the Header text elements */}
    </a>
  );
};

export default Link;
