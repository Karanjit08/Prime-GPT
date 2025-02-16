import { TMDB_API_KEY } from "./constants";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + TMDB_API_KEY
    }
  };

