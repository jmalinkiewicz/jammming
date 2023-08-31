import { useState } from "react";
import "./App.css";
import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import Spotify from "./util/spotifyApi";

function App() {
  const [tracks, setTracks] = useState([
    {
      title: "Call Me",
      author: "Gigi Masin",
      album: "Wind",
      id: 0,
      uri: "spotify:0",
    },
    {
      title: "snowfall",
      author: "Øneheart, reidenshi",
      album: "snowfall",
      id: 1,
      uri: "spotify:1",
    },
    {
      title: "Poison Tree",
      author: "Grouper",
      album: "Inca Ore / Grouper",
      id: 2,
      uri: "spotify:2",
    },
  ]);

  const [playlist, setPlaylist] = useState([
    {
      title: "this feeling",
      author: "Øneheart",
      album: "this feeling",
      id: 3,
      uri: "spotify:3",
    },
  ]);
  const [playlistTitle, setPlaylistTitle] = useState("");
  const [tracksUri, setTracksUri] = useState([]);

  function addToPlaylist(
    trackTitle,
    trackAuthor,
    trackAlbum,
    trackID,
    trackUri
  ) {
    setPlaylist((prev) => [
      {
        title: trackTitle,
        author: trackAuthor,
        album: trackAlbum,
        id: trackID,
        uri: trackUri,
      },
      ...prev,
    ]);
    setTracks((prev) => prev.filter((track) => track.id !== trackID));
  }

  function removeFromPlaylist(trackID) {
    setPlaylist((prev) => prev.filter((track) => track.id !== trackID));
  }

  function renamePlaylist(name) {
    setPlaylistTitle(name);
  }

  return (
    <>
      <h1 onClick={Spotify.getAccessToken}>XDDDDDDDDDD</h1>
      <Header />
      <Main
        setPlaylist={setPlaylist}
        tracks={tracks}
        playlist={playlist}
        addToPlaylist={addToPlaylist}
        removeFromPlaylist={removeFromPlaylist}
        playlistTitle={playlistTitle}
        renamePlaylist={renamePlaylist}
        setTracksUri={setTracksUri}
      />
    </>
  );
}

export default App;
