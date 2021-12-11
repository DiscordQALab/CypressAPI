import { playlist_id, tracks, baseUrl_v1 } from '../../../support/utils';
describe("Remove tracks from playlist", () => {
  let dataTracks;
  before(() => {
    cy.fixture('playlist').then((data) => {
      dataTracks = data;
    })
  })
  it("Remove tracks from a user's playlist.", () => {
    cy.removeItemPlaylistItems(playlist_id, dataTracks.track_valid, dataTracks.track2_valid)
      .should((res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.have.property('snapshot_id')
      }) 
  })

  it("Remove item invalid", () => {
    cy.removeItemPlaylistItems(playlist_id, dataTracks.track_invalid)
      .should((res) => {
        expect(res.status).to.eq(400)
        expect(res.body.error.message).to.have.string('JSON body contains an invalid track uri')
      })
  })

  it.only("Contract", () => {
    cy.removeItemPlaylistItems(playlist_id, dataTracks.track_correct)
      .should((res) => {
        expect('snapshot_id').to.be.a('string')
      })
  })
})
