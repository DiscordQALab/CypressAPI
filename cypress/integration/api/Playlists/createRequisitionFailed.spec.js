/// <reference types="cypress"/>

const faker = require("faker");

describe("Requisition the failed", () => {
  it("Open with requisition failed", () => {
    const playlist = {
      name: `playlist-${faker.datatype.uuid()}`,
      description: faker.random.words(10),
      public: false,
    };

    cy.api_createRequisitionFailed(playlist).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.name).to.equal(playlist.undefined);
      expect(response.body.description).to.equal(playlist.undefined);
    });
  });
})