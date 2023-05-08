import { RESET_CURRENT_USER, SET_CURRENT_USER } from "../actions";

const initialState = {
  currentUser: {},
};

const currentUserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case RESET_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
};

export default currentUserReducer;
