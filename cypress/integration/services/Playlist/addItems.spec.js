describe("Playlist", () => {
  it.only("Add Items to Playlist", () => {
    cy.playlistAddItems().should((res) => {
      expect(res.status).to.eq(201)
      expect(res.body).to.have.property('snapshot_id')
    });
  });
});
