/// <reference types="cypress"/>

const faker = require("faker");

describe("Search Playlist", () => {
  it("Playlist search success", () => {
    cy.api_listPlaylist().then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
