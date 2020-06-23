import { initialPostData } from "../../data/static/postData";

// Actions
export const FETCH_POST_INITIAL = "FETCH_POST_INITIAL";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILED = "FETCH_POST_FAILED";
export const ADD_NEW_POST = "ADD_NEW_POST";
export const ADD_NEW_COMMENT = "ADD_NEW_COMMENT";
export const ADD_NEW_UPVOTE = "ADD_NEW_UPVOTE";
export const SET_HOME_ACTION_ERROR = "SET_HOME_ACTION_ERROR";
export const CLEAR_HOME_ACTION_ERROR = "CLEAR_HOME_ACTION_ERROR";

// Intial State
const initialState = {
  loading: false,
  posts: initialPostData,
  error: null,
  actionError: null,
};

// Action Creator

export const fetchPostInitial = () => {
  return {
    type: FETCH_POST_INITIAL,
  };
};

export const fetchPost = () => {
  return (dispatch, getState) => {
    dispatch(fetchPostInitial);
    //Call
  };
};

export const createNewPost = (post) => {
  return (dispatch, getState) => {
    //Asyc Call to add post
    dispatch({
      type: ADD_NEW_POST,
      payload: post,
    });
  };
};

export const addNewComment = (id, comment) => {
  return (dispatch, getState) => {
    //Async call
    dispatch({
      type: ADD_NEW_COMMENT,
      payload: {
        id: id,
        comment: comment,
      },
    });
  };
};

export const addNewUpvote = (id, user) => {
  return (dispatch, getState) => {
    //Async call
    dispatch(
      setHomeActionError("Server Error! Failed to Upvote Please try again")
    );
    dispatch({
      type: ADD_NEW_UPVOTE,
      payload: {
        id: id,
        user: user,
      },
    });
  };
};

export const setHomeActionError = (err) => {
  return {
    type: SET_HOME_ACTION_ERROR,
    payload: err,
  };
};

export const clearHomeActionError = () => {
  return {
    type: CLEAR_HOME_ACTION_ERROR,
  };
};

// Reducer
export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_INITIAL: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case FETCH_POST_SUCCESS: {
      return {
        ...state,
        error: null,
        loading: false,
        posts: action.payload,
      };
    }

    case FETCH_POST_FAILED: {
      return {
        ...state,
        error: action.payload,
        loading: false,
        errInfo: action.payload,
      };
    }

    case ADD_NEW_POST: {
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    }

    case ADD_NEW_COMMENT: {
      return {
        ...state,
        posts: state.posts.map((item) => {
          if (item.id === action.payload.id) {
            item.comments = [action.payload.comment, ...item.comments];
            return item;
          } else return item;
        }),
      };
    }

    case ADD_NEW_UPVOTE: {
      return {
        ...state,
        posts: state.posts.map((item) => {
          if (item.id === action.payload.id) {
            item.upvotes = [action.payload.user, ...item.upvotes];
            console.log("Yaha aaya tha me");
            return item;
          } else return item;
        }),
      };
    }

    case SET_HOME_ACTION_ERROR: {
      return {
        ...state,
        actionError: action.payload,
      };
    }

    case CLEAR_HOME_ACTION_ERROR: {
      return {
        ...state,
        actionError: null,
      };
    }

    default:
      return state;
  }
}
