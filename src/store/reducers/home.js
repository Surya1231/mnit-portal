import { initialPostData } from "../../data/static/postData";

// Actions
export const FETCH_POST_INITIAL = "FETCH_POST_INITIAL";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILED = "FETCH_POST_FAILED";
export const ADD_NEW_POST = "ADD_NEW_POST";
export const ADD_NEW_COMMENT = "ADD_NEW_COMMENT";
export const ADD_NEW_UPVOTE = "ADD_NEW_UPVOTE";

// Intial State
const initialState = {
  loading: false,
  posts: initialPostData,
  error: null,
};

// Action Creator

export const createNewPost = (post) => {
  return {
    type: ADD_NEW_POST,
    payload: post,
  };
};

export const addNewComment = (id, comment) => {
  return {
    type: ADD_NEW_COMMENT,
    payload: {
      id: id,
      comment: comment,
    },
  };
};

export const addNewUpvote = (id, user) => {
  return {
    type: ADD_NEW_UPVOTE,
    payload: {
      id: id,
      user: user,
    },
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
    default:
      return state;
  }
}
