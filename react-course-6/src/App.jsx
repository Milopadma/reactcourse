import { selectSong } from "./actions/index.jsx";
import SongList from "./components/SongList.jsx";
import SongDetail from "./components/SongDetail.jsx";

//using react-redux and redux, App component is no longer responsible for passing down props
// and listening to events

function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
