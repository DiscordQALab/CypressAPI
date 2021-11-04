/// <reference types="cypress"/>

const spotify_token = Cypress.env("spotify_token");
const Authorization = `Bearer ${spotify_token}`;

Cypress.Commands.add("api_createPlaylist", (playlist) => {
  cy.request({
    method: "POST",
    url: "/v1/users/31xlpjnmedc23sogwwwlshhmxa6a/playlists",
    headers: {
      Authorization,
    },
    body: {
      name: playlist.name,
      description: playlist.description,
      public: false,
    },
  });
});
