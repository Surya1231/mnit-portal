// Actions
export const FETCH_POST_INITIAL = "FETCH_POST_INITIAL";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILED = "FETCH_POST_FAILED";

// Intial State
const initialState = {
  loading: false,
  post: [],
  err: false,
  errInfo: {},
};

// Action Creator

// Reducer
export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_INITIAL: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_POST_SUCCESS: {
      return {
        ...state,
        err: false,
        loading: false,
        post: action.payload,
      };
    }
    case FETCH_POST_FAILED: {
      return {
        ...state,
        err: true,
        loading: false,
        errInfo: action.payload,
      };
    }
    default:
      return state;
  }
}
