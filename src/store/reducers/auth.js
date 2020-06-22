// Actions
export const AUTH_LOCAL_USER = "AUTH_LOCAL_USER";
export const AUTH_USER_SUCCESS = "AUTH_USER_SUCCESS";
export const AUTH_USER_FAIL = "AUTH_USER_FAIL";
export const AUTH_USER_LOGOUT = "AUTH_USER_LOGOUT";

const localStorageUser = "mnit_user";

// Intial State
const initialState = {
  loading: false,
  user: null,
  err: false,
  errInfo: {},
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

export const authenticateUser = (user, otp) => {
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
          loading: false,
          err: false,
        };
      return state;
    }
    case AUTH_USER_SUCCESS: {
      localStorage.setItem(localStorageUser, action.payload.user);
      return {
        ...state,
        err: false,
        loading: false,
        user: action.payload.user,
      };
    }
    case AUTH_USER_FAIL: {
      return {
        ...state,
        err: true,
        loading: false,
        errInfo: action.payload,
      };
    }
    case AUTH_USER_LOGOUT: {
      localStorage.removeItem(localStorageUser);
      return {
        ...state,
        err: false,
        loading: false,
        user: null,
      };
    }
    default:
      return state;
  }
}
