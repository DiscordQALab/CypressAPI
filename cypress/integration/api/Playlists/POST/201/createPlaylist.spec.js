/// <reference types="cypress"/>

const faker = require("faker");

describe("Create Playlist", () => {
  it("Playlist create with success", () => {
    const playlist = {
      name: `playlist-${faker.datatype.uuid()}`,
      description: faker.random.words(10),
      public: false,
    };

    cy.api_createPlaylist(playlist).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.name).to.equal(playlist.name);
      expect(response.body.description).to.equal(playlist.description);
    });
  });
});
