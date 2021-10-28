///<reference types="cypress"/>

const token = Cypress.env("token");
const Authorization = `Bearer ${token}`;
describe("Buscar todas playlists", () => {
  it("Buscar lista", () => {
    cy.request({
      method: "GET",
      url: Cypress.env("url_getPlaylist"),
      headers: {
        Authorization,
      },
    }).should((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("items");
    });
  });
});
