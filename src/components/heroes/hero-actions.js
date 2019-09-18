/* action types */
export const FETCH_HERO_REQUEST = "FETCH_HERO_REQUEST";
export const FETCH_HERO_SUCCESS = "FETCH_HERO_SUCCESS";
export const FETCH_HERO_FAIL = "FETCH_HERO_FAIL";

/* action creators */
export const fetchHeroes = () => ({
  type: FETCH_HERO_REQUEST
})
