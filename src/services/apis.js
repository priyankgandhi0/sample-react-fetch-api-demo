import APP_CONSTANTS from "../config/constants"

export const getPosts = () => {
  return fetch(`${APP_CONSTANTS.API_BASE_URL}/posts`);
}

export const getAlbums = () => {
  return fetch(`${APP_CONSTANTS.API_BASE_URL}/albums`);
}