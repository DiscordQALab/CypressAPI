describe("Playlist", () => {
  it("Add one or more items to a user's playlist.", () => {
    cy.playlistAddItems().should((res) => {
      expect(res.status).to.eq(201)
      expect(res.body).to.have.property('snapshot_id')
    })
  })
})
