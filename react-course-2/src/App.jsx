// function App() {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return (
//     <div>
//         current latitude:
//     </div>
//   )
// }
//functional component refactored to class based component
import React from "react";
import GeolocationAndTime from "./GeolocationAndTime";

class App extends React.Component {
  render() {
    return <GeolocationAndTime />;
  }
}

export default App;
