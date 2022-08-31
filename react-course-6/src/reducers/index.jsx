import { combineReducers } from "redux";

const songsReducers = () => {
  return [
    { title: " NO SCRUBS ", duration: "4:05" },
    { title: " MACARENA ", duration: "2:30" },
    { title: " ALL STAR", duration: "3:15" },
    { title: " I WANT IT THAT WAY ", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({ 
  songs: songsReducers,
  selectedSong: selectedSongReducer,
});
