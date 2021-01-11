import createDataContext from "./createDataContext";
import Cookies from "universal-cookie";
import backend from "../api/backend";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return {
        ...state,
        isLoggedIn: true,
        did: action.payload.did,
      };
    case "signout":
      return {
        ...state,
        isLoggedIn: false,
        did: null,
        mylikes: null,
      };
    case "update_likes":
      return {
        ...state,
        mylikes: action.payload.mylikes,
        my_name: action.payload.my_name,
        my_img_url: action.payload.my_img_url,
        my_address: action.payload.my_address,
      };
    case "like":
      return {
        ...state,
        mylikes: [
          ...state.mylikes,
          {
            contract: action.payload.contract,
            token_id: action.payload.token_id,
          },
        ],
      };
    case "unlike":
      return {
        ...state,
        mylikes: state.mylikes.filter(
          (item) =>
            !(
              item.contract === action.payload.contract &&
              item.token_id === action.payload.token_id
            )
        ),
      };
    case "like_counts_changed":
      return {
        ...state,
        last_like_count_change: action.payload.last_like_count_change,
      };
    default:
      return state;
  }
};

const attemptSigninFromCookie = (dispatch) => {
  return async () => {
    const cookies = new Cookies();
    const did = cookies.get("did");

    if (did) {
      dispatch({
        type: "signin",
        payload: {
          did,
        },
      });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    dispatch({ type: "signout" });
  };
};

const like = (dispatch) => {
  return async ({ contract, token_id }) => {
    dispatch({
      type: "like",
      payload: { contract, token_id },
    });
  };
};

const unlike = (dispatch) => {
  return async ({ contract, token_id }) => {
    dispatch({
      type: "unlike",
      payload: { contract, token_id },
    });
  };
};

const likeCountsChanged = (dispatch) => {
  return async () => {
    dispatch({
      type: "like_counts_changed",
      payload: {
        last_like_count_change: Date.now(),
      },
    });
  };
};

const getMyLikes = (dispatch) => {
  return async () => {
    var mylikes = [];
    var my_name = null;
    var my_img_url = null;
    var my_address = null;

    const cookies = new Cookies();
    const did = cookies.get("did");

    if (did) {
      const response = await backend
        .get("/v1/mylikes", {
          headers: { Authorization: "Bearer " + did },
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 401) {
              // Our DID is expired or invalid, erase it now
              cookies.remove("did");
              dispatch({ type: "signout" });
            }
          }
        });
      if (response) {
        mylikes = response.data.data.like_list;
        my_name = response.data.data.my_name;
        my_img_url = response.data.data.my_img_url;
        my_address = response.data.data.my_address;
      }
    }

    dispatch({
      type: "update_likes",
      payload: {
        mylikes,
        my_name,
        my_img_url,
        my_address,
      },
    });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    attemptSigninFromCookie,
    signout,
    getMyLikes,
    like,
    unlike,
    likeCountsChanged,
  },
  {
    isLoggedIn: false,
    did: null,
    mylikes: null,
    last_like_count_change: null,
    my_name: null,
    my_img_url: null,
  }
);
