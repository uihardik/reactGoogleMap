// action types
const FETCH_LOCATION = "FETCH_LOCATION";
const STORE_SUCCESS = "STORE_SUCCESS";
const LOCATION_FAILURE = "LOCATION_FAILURE";

// reducer with initial state
const initialState = {
  fetching: false,
  country:[],
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOCATION:
      return { ...state, fetching: true, error: null };
    case STORE_SUCCESS:
      return { ...state, fetching: false, country: [...state.country, action.place]};
    case LOCATION_FAILURE:
      return { ...state, fetching: false, country: null, error: action.error };
    default:
      return state;
  }
}
