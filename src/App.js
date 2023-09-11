import { useState } from "react";
import "./App.css";
import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import Spotify from "./util/spotifyApi";

function App() {
  const [tracks, setTracks] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  function addToPlaylist(trackTitle, trackArtist, trackAlbum, trackUri) {
    if (playlist.some((track) => track.uri === trackUri)) {
      window.alert("Song already added to the playlist.");
      return;
    }

    setPlaylist((prev) => [
      {
        title: trackTitle,
        artist: trackArtist,
        album: trackAlbum,
        uri: trackUri,
      },
      ...prev,
    ]);
    setTracks((prev) => prev.filter((track) => track.uri !== trackUri));
  }

  function removeFromPlaylist(trackUri) {
    setPlaylist((prev) => prev.filter((track) => track.uri !== trackUri));
  }

  async function search(term) {
    if (term) {
      const newTracks = await Spotify.search(term);
      console.log(newTracks);
      setTracks(newTracks);
    }
  }

  async function createNewPlaylist(title, contents) {
    const userProfile = await Spotify.getCurrentUserProfile();
    Spotify.createPlaylist(title, contents);
  }

  return (
    <>
      <Header />
      <Main
        createNewPlaylist={createNewPlaylist}
        search={search}
        setPlaylist={setPlaylist}
        tracks={tracks}
        playlist={playlist}
        addToPlaylist={addToPlaylist}
        removeFromPlaylist={removeFromPlaylist}
      />
    </>
  );
}

export default App;
