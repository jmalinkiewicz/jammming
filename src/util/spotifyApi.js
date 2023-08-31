import generateState from "./generateState";

const clientId = "f1956d7d138743f4877774cd722b7be4"; // Insert client ID here.
const redirect_Uri = "http://localhost:3000/callback"; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      console.log(accessToken);
      return;
    } else if (!accessToken) {
      const url = "https://accounts.spotify.com/authorize";
      const scope = "playlist-modify-public playlist-modify-private";
      const state = generateState(16);

      const destination = `${url}?response_type=token&client_id=${clientId}&scope=${encodeURIComponent(
        scope
      )}&redirect_uri=${encodeURIComponent(redirect_Uri)}&state=${state}`;

      window.location.assign(destination);

      const queryString = window.location.href;

      const redirectedURL = new URL(queryString);
      const urlParams = new URLSearchParams(redirectedURL.hash.substring(1));

      const accessToken = urlParams.get("access_token");
      console.log(accessToken);
    }
  },
  search(keyword) {
    const url = "https://api.spotify.com/v1/tracks";
  },
};

export default Spotify;
