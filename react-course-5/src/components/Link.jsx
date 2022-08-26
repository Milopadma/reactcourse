const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    event.preventDefault();
    window.history.pushState(null, "", href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent); //broadcast the event to all the windows
  };
  return (
    <a className={className} onClick={onClick} href={href}>
      {children}
    </a>
  );
};

export default Link;
