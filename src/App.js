import { useState } from "react";
import "./App.css";
import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import Spotify from "./util/spotifyApi";

function App() {
  const [tracks, setTracks] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState("");

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

  function renamePlaylist(name) {
    setPlaylistTitle(name);
  }

  async function search(term) {
    if (term) {
      const newTracks = await Spotify.search(term);
      console.log(newTracks);

      setTracks(newTracks);
    }
  }

  async function createNewPlaylist() {
    const userProfile = await Spotify.getCurrentUserProfile();
    Spotify.createPlaylist("TESTOWA 1");
  }

  return (
    <>
      <h1 onClick={createNewPlaylist}>TESTOWA PLAYLISTA</h1>
      <Header />
      <Main
        search={search}
        setPlaylist={setPlaylist}
        tracks={tracks}
        playlist={playlist}
        addToPlaylist={addToPlaylist}
        removeFromPlaylist={removeFromPlaylist}
        playlistTitle={playlistTitle}
        renamePlaylist={renamePlaylist}
      />
    </>
  );
}

export default App;
