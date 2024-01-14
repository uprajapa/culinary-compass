export const UNAUTHORIZED = "UNAUTHORIZED";
export const MODAL_LOGIN = "MODAL_LOGIN";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const dataReducer = (state, action) => {
  const actions = {
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
    MODAL_LOGIN: {
      ...state,
      isModalOpenLogin: !state.isModalOpenLogin,
    },
  };

  return actions[action.type] || new Error(`Unknown action type: ${action}`);
};

export default dataReducer;
