export const UNAUTHORIZED = "UNAUTHORIZED";
export const MODAL_LOGIN = "MODAL_LOGIN";
export const MODAL_RECIPE = "MODAL_RECIPE";
export const MODAL_EDIT = "MODAL_EDIT";
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
    MODAL_RECIPE: {
      ...state,
      isModalOpenRecipe: !state.isModalOpenRecipe,
    },
    MODAL_EDIT: {
      ...state,
      isModalOpenEdit: !state.isModalOpenEdit,
    },
  };

  return actions[action.type] || new Error(`Unknown action type: ${action}`);
};

export default dataReducer;
