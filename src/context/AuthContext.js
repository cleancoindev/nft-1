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
        isLoggedIn: false,
        did: null,
        mylikes: null,
      };
    case "update_likes":
      return {
        ...state,
        mylikes: action.payload.mylikes,
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

const getMyLikes = (dispatch) => {
  return async () => {
    var mylikes = [];

    const cookies = new Cookies();
    const did = cookies.get("did");

    if (did) {
      const response = await backend.get("/v1/mylikes", {
        headers: { Authorization: "Bearer " + did },
      });
      mylikes = response.data.data;
    }

    dispatch({
      type: "update_likes",
      payload: {
        mylikes: mylikes,
      },
    });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { attemptSigninFromCookie, signout, getMyLikes, like, unlike },
  {
    isLoggedIn: false,
    did: null,
    mylikes: null,
  }
);
