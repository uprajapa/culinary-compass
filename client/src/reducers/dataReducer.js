export const UNAUTHORIZED = "UNAUTHORIZED";
export const MODAL = "MODAL";
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
    MODAL: {
      ...state,
      isModalOpen: !state.isModalOpen,
    },
  };

  return actions[action.type] || new Error(`Unknown action type: ${action}`);
};

export default dataReducer;
