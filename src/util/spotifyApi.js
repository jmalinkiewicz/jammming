const clientId = "f1956d7d138743f4877774cd722b7be4"; // Insert client ID here.
const redirectUri =
  "https://6500858e46c99402ef7fc196--spontaneous-raindrop-24444c.netlify.app/callback"; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.
let accessToken;
let userProfile;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      console.log(accessToken);
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      const expiresIn = Number(expiresInMatch[1]);
      accessToken = accessTokenMatch[1];
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-private%20playlist-modify-public%20user-read-private%20user-read-email&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  async getCurrentUserProfile() {
    const urlToFetch = "https://api.spotify.com/v1/me";

    const response = await fetch(urlToFetch, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const jsonResponse = await response.json();
    userProfile = jsonResponse;
    return jsonResponse;
  },

  async search(keyword) {
    if (!accessToken) {
      this.getAccessToken();
    }

    const urlToFetch = `https://api.spotify.com/v1/search?q=${keyword}&type=track`;

    const response = await fetch(urlToFetch, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);

    const tracks = jsonResponse.tracks.items.map((element) => {
      return {
        name: element.name,
        artist: element.artists.map((elem) => elem.name),
        album: element.album.name,
        uri: element.uri,
      };
    });

    return tracks;
  },

  async createPlaylist(title, contents) {
    const urlToCreate = `https://api.spotify.com/v1/users/${userProfile.id}/playlists`;

    const responsePlaylist = await fetch(urlToCreate, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: title,
        description: "Playlist created using JAMMMING",
        public: false,
      }),
    });

    const playlist = await responsePlaylist.json();
    const urlToPopulate = `https://api.spotify.com/v1/playlists/${playlist.id}/tracks`;

    const responsePopulatePlaylist = await fetch(urlToPopulate, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uris: contents,
        position: 0,
      }),
    });
  },
};

export default Spotify;
