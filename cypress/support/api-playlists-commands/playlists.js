/// <reference types="cypress"/>

import "@bahmutov/cy-api/support";

const spotify_token = Cypress.env("spotify_token");
const Authorization = `Bearer ${spotify_token}`;

Cypress.Commands.add("api_createPlaylist", (playlist) => {
  cy.api({
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
Cypress.Commands.add("api_createAuthorizationFailed", (playlist) => {
  cy.api({
    method: "POST",
    url: "/v1/users/31xlpjnmedc23sogwwwlshhmxa6a/playlists",
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
  cy.api({
    method: "POST",
    url:"/v1/users/31xlpjnmedc23sogwwwlshhmxa6a/playlists",
    headers: {
      Authorization,
    },
    failOnStatusCode: false,
    body: {},
  });
});

Cypress.Commands.add("api_listPlaylist", () => {
  cy.api({
    method: "GET",
    url: "/v1/me/playlists",
    headers: {
      Authorization,
    },
  });
});

Cypress.Commands.add("api_listFailedAuth", () => {
  cy.api({
    method: "GET",
    url: "/v1/me/playlists",
    failOnStatusCode: false,
  });
});
