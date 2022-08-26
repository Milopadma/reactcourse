import { useState, useEffect } from "react";

//controls what shows in the screen depending on url path
const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname); //update the current path to trigger the route component re-render
    };

    window.addEventListener("popstate", onLocationChange); //listens for the popstate event from Link component

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return currentPath === path ? children : null; //if the url path matches the path in the route, show the children
};

export default Route;
