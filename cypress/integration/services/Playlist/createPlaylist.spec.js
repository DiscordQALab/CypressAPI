///<reference types="cypress"/>

const token = Cypress.env("token");
const Authorization = `Bearer ${token}`;
describe("Criação de playlist", () => {
  it("Nova playlist", () => {
    cy.request({
      method: "POST",
      url:
        Cypress.env("url_post") +
        "/v1/users/31xlpjnmedc23sogwwwlshhmxa6a/playlists",
      headers: {
        Authorization,
      },
      body: {
        name: "Escola do Rock",
        description: "Músicas de Filmes",
        public: false,
      },
    }).should((res) => {
      expect(res.status).to.eq(201);
    });
  });
});
