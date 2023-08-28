const client_id = "f1956d7d138743f4877774cd722b7be4";
const redirect_uri = "http://localhost:3000/callback";

const state = generateRandomString(16);

localStorage.setItem(stateKey, state);
const scope = "user-read-private user-read-email playlist-modify-public";

let url = "https://accounts.spotify.com/authorize";
url += "?response_type=token";
url += "&client_id=" + encodeURIComponent(client_id);
url += "&scope=" + encodeURIComponent(scope);
url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
url += "&state=" + encodeURIComponent(state);

async function requestToken(url) {
  const response = await fetch(url);
}
