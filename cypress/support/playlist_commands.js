const token = Cypress.env("token");
const Authorization = `Bearer ${token}`;
const baseUrl_v1 = 'https://api.spotify.com/v1'
const playlist_id = `${baseUrl_v1}/playlists/3HNZW0BkK2xONS2tgRq0tT`
const tracks = `${playlist_id}/tracks?uris=spotify%3Atrack%3A06xAXT9rka5ZGu19gcbufd`

Cypress.Commands.add('playlistAddItems', () => {
  cy.request({
    method: "POST",
    url: tracks,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization,
    }
  })
})

Cypress.Commands.add('removePlaylistItems', () => {
  cy.request({
    method: "DELETE",
    url: playlist_id + "/tracks",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization,
    },
    body: {
      "tracks": [{ 
        "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" 
      }]
    }
  })
})