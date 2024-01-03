export const LOAD_USERS = "LOAD_USERS";
export const UNAUTHORIZED = "UNAUTHORIZED";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const dataReducer = (state, action) => {
  const actions = {
    LOAD_USERS: {
      ...state,
      users: action.payload,
    },
    UNAUTHORIZED: {
      ...state,
      message: action.message,
    },
    LOGIN: {
      ...state,
      localToken: action.token,
      localEmail: action.email,
    },
    LOGOUT: {
      removeLocal: action.removeLocal,
    },
  };

  return actions[action.type] || new Error(`Unknown action type: ${action}`);
};

export default dataReducer;
