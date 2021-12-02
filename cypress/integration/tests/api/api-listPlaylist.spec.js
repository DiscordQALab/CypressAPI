/// <reference types="cypress"/>

const faker = require("faker");

describe("Search Playlist", () => {
  it("Playlist search success", () => {
    cy.api_listPlaylist().then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("Playlist Failed Authentication", () => {
    cy.api_listFailedAuth().then((response) => {
      expect(response.status).to.equal(401);
    });
  });
});
