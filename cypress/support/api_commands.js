/// <reference types="cypress"/>

const spotify_token = Cypress.env("spotify_token");
const Authorization = `Bearer ${spotify_token}`;

Cypress.Commands.add("api_createPlaylist", (playlist) => {
  cy.request({
    method: "POST",
    url:
      Cypress.env("url_base") +
      "/v1/users/31xlpjnmedc23sogwwwlshhmxa6a/playlists",
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
Cypress.Commands.add("api_createAuthorizationFailed", (playlist) => {
  cy.request({
    method: "POST",
    url:
      Cypress.env("url_base") +
      "/v1/users/31xlpjnmedc23sogwwwlshhmxa6a/playlists",
    headers: {},
    failOnStatusCode: false,
    body: {
      name: playlist.name,
      description: playlist.description,
      public: false,
    },
  });
});

Cypress.Commands.add("api_createRequisitionFailed", (playlist) => {
  cy.request({
    method: "POST",
    url:
      Cypress.env("url_base") +
      "/v1/users/31xlpjnmedc23sogwwwlshhmxa6a/playlists",
    headers: {
      Authorization,
    },
    failOnStatusCode: false,
    body: {},
  });
});

Cypress.Commands.add("api_listPlaylist", () => {
  cy.request({
    method: "GET",
    url: Cypress.env("url_base") + "/v1/me/playlists",
    headers: {
      Authorization,
    },
  });
});

Cypress.Commands.add("api_listFailedAuth", () => {
  cy.request({
    method: "GET",
    url: Cypress.env("url_base") + "/v1/me/playlists",
    failOnStatusCode: false,
  });
});
