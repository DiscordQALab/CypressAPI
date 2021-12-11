import { token, headers } from '../support/utils';

Cypress.Commands.add('playlistAddItems', () => {
  cy.request({
    method: "POST",
    url: tracks,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization,
    }
  })
})

Cypress.Commands.add('removeItemPlaylistItems', (playlist_id, track_valid, track2_valid) => {
  cy.request({
    failOnStatusCode: false,
    method: "DELETE",
    url: `${playlist_id}/tracks`,
    headers: headers,
    body:
    {
      "tracks": [
        {
          "uri": `spotify:track:${track_valid}`
        },
        {
          "uri": `spotify:track:${track2_valid}`
        }
      ]

    }
  }
  )
})