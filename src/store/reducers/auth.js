// Actions
export const AUTH_LOCAL_USER = "AUTH_LOCAL_USER";
export const AUTH_USER_SUCCESS = "AUTH_USER_SUCCESS";
export const AUTH_USER_FAIL = "AUTH_USER_FAIL";
export const AUTH_USER_LOGOUT = "AUTH_USER_LOGOUT";

const localStorageUser = "mnit_user";

// Intial State
const initialState = {
  user: null,
  error: false,
  errorInfo: null,
};

// Action Creator
export const logoutAuthUser = () => {
  return {
    type: AUTH_USER_LOGOUT,
  };
};

export const authLocalUser = () => {
  return {
    type: AUTH_LOCAL_USER,
  };
};

export const authenticateUser = (user) => {
  return {
    type: AUTH_USER_SUCCESS,
    payload: {
      user: user,
    },
  };
};

// Reducer
export function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOCAL_USER: {
      if (localStorage.getItem(localStorageUser) != null)
        return {
          ...state,
          user: localStorage.getItem(localStorageUser),
        };
      return state;
    }
    case AUTH_USER_SUCCESS: {
      localStorage.setItem(localStorageUser, action.payload.user);
      return {
        ...state,
        error: false,
        user: action.payload.user,
      };
    }
    case AUTH_USER_FAIL: {
      return {
        ...state,
        error: true,
        errorInfo: action.payload,
      };
    }
    case AUTH_USER_LOGOUT: {
      localStorage.removeItem(localStorageUser);
      return {
        ...state,
        error: false,
        user: null,
      };
    }
    default:
      return state;
  }
}
