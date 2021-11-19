/// <reference types="cypress"/>

describe("Search Playlist", () => {
  it("Playlist search success", () => {
    cy.api_listfailedAuth().then((response) => {
      expect(response.status).to.equal(401);
    });
  });
});
