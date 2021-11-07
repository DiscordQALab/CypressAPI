/// <reference types="cypress"/>

const faker = require("faker");

describe("Create Playlist Failed", () => {
  it("Playlist create Failed", () => {
    const playlist = {
      name: `playlist-${faker.datatype.uuid()}`,
      description: faker.random.words(10),
      public: false,
    };

    cy.api_authorizationFailed(playlist).then((response) => {
      expect(response.status).to.equal(401);
      expect(response.body.name).to.equal(playlist.undefined);
      expect(response.body.description).to.equal(playlist.undefined);
    });
  });
});