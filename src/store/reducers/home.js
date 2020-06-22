// Actions
export const FETCH_POST_INITIAL = "FETCH_POST_INITIAL";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILED = "FETCH_POST_FAILED";

// Intial State
const initialState = {
  loading: false,
  posts: [
    {
      id: 1,
      postedBy: "Suryaprakash",
      createdAt: new Date(),
      category: "General",
      anonymous: false,
      content:
        "<p>Good market for iPhone and its apps, the rising number of IT companies offering iPhone apps development services and lack of thoroughly talented developers are the main reasons resulting in increasing demand for the fluent iOS dev<strong>elopers across </strong>the globe. Highest salaries one can expect in the IT sector and world of opportunities available in this sector makes iPhone development one of the most desired or chosen professions of the present times.</p>",
      upvotes: ["ssurya", "ss", "ss", "hehe", "sjs"],
      comments: [
        {
          id: 1,
          comment: "this is string",
          commentedBy: "Suryaprakash",
          anonymouse: false,
          createdAt: new Date(),
        },
        {
          id: 2,
          comment: "No I don't like the question change the question",
          commentedBy: "Suryaprakash",
          anonymous: true,
          createdAt: new Date(),
        },
      ],
    },
    {
      id: 2,
      postedBy: "Suryaprakash",
      createdAt: new Date(),
      category: "Competitive",
      anonymous: true,
      content:
        "<p>Good market for iPhone and its apps, the rising number of IT companies offering iPhone apps development services and lack of thoroughly talented developers are the main reasons resulting in increasing demand for the fluent iOS dev<strong>elopers across </strong>the globe. Highest salaries one can expect in the IT sector and world of opportunities available in this sector makes iPhone development one of the most desired or chosen professions of the present times.</p>",
      upvotes: ["ssurya", "ss", "ss", "hehe", "sjs"],
      comments: [
        {
          id: 1,
          comment: "this is string",
          commentedBy: "Suryaprakash",
          anonymous: false,
          createdAt: new Date(),
        },
        {
          id: 2,
          comment: "No I don't like the question change the question",
          commentedBy: "Suryaprakash",
          anonymous: true,
          createdAt: new Date(),
        },
      ],
    },
    {
      id: 3,
      postedBy: "Suryaprakash",
      createdAt: new Date(),
      category: "Interview",
      anonymous: false,
      content:
        "<p>Good market for iPhone and its apps, the rising number of IT companies offering iPhone apps development services and lack of thoroughly talented developers are the main reasons resulting in increasing demand for the fluent iOS dev<strong>elopers across </strong>the globe. Highest salaries one can expect in the IT sector and world of opportunities available in this sector makes iPhone development one of the most desired or chosen professions of the present times.</p>",
      upvotes: ["ssurya", "ss", "ss", "hehe", "sjs"],
      comments: [
        {
          id: 1,
          comment: "this is string",
          commentedBy: "Suryaprakash",
          anonymouse: false,
          createdAt: new Date(),
        },
        {
          id: 2,
          comment: "No I don't like the question change the question",
          commentedBy: "Suryaprakash",
          anonymous: true,
          createdAt: new Date(),
        },
      ],
    },
  ],
  error: null,
};

// Action Creator

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
    default:
      return state;
  }
}
