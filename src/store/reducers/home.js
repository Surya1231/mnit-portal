import { successNoty, errorNoty } from "../../components/common/notification";

export const ADD_NEW_POST = "ADD_NEW_POST";
export const ADD_NEW_COMMENT = "ADD_NEW_COMMENT";
export const ADD_NEW_UPVOTE = "ADD_NEW_UPVOTE";
export const HOME_ACTION_ERROR = "HOME_ACTION_ERROR";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const homeActionError = (error) => {
  return {
    type: HOME_ACTION_ERROR,
    error,
  };
};

export const createNewPost = (post) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("posts")
      .add(post)
      .then((res) => {
        dispatch({
          type: ADD_NEW_POST,
          res,
        });
      })
      .catch((error) => {
        dispatch(homeActionError(error));
      });
  };
};

export const addNewComment = (id, comment) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("posts")
      .doc(id)
      .collection("comments")
      .add(comment)
      .then((res) => {
        dispatch({
          type: ADD_NEW_COMMENT,
          id,
          res,
        });
      })
      .catch((error) => {
        dispatch(homeActionError(error));
      });
  };
};

export const addNewUpvote = (id, user) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("posts")
      .doc(id)
      .collection("upvotes")
      .add({ upvotedBy: user })
      .then((res) => {
        dispatch({
          type: ADD_NEW_UPVOTE,
          id,
          res,
        });
      })
      .catch((error) => {
        dispatch(homeActionError(error));
      });
  };
};

// Reducer
export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_POST: {
      successNoty("Your post has been added Successfully ");
      return state;
    }

    case ADD_NEW_COMMENT: {
      return state;
    }

    case ADD_NEW_UPVOTE: {
      return state;
    }

    case HOME_ACTION_ERROR: {
      errorNoty(action.error);
      return state;
    }

    default:
      return state;
  }
}
