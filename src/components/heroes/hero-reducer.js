import * as types from './hero-actions';

const initialState = {
  heroes: [],
  hero: {
    id: "",
    firstName: "",
    lastName: "",
    house: "",
    knownAs: "",
  },
  isLoading: false,
  error: "",
}

export const heroReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.FETCH_HERO_REQUEST:
      return {...state, isLoading: true}
    case types.FETCH_HERO_SUCCESS:
        return {...state, isLoading: false, heroes: action.payload} 
    case types.FETCH_HERO_FAIL:
        return {...state, isLoading: false, error: action.error}
    default:
      return state;
  }
}