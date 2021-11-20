describe("Playlist", () => {
  it("Remove one or more items from a user's playlist.", () => {
    cy.removePlaylistItems().should((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('snapshot_id')
    })
  })
  
})