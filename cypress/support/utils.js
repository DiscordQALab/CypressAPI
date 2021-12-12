const token = Cypress.env("token");

export const authorization = `Bearer ${token}`; 
export const baseUrl_v1 = 'https://api.spotify.com/v1'
export const playlist_id = `${baseUrl_v1}/playlists/3HNZW0BkK2xONS2tgRq0tT`
export const tracks = `${playlist_id}/tracks?uris=spotify%3Atrack%3A06xAXT9rka5ZGu19gcbufd`

export const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
};