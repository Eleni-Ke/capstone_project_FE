import { GET_NOTES, RESET_NOTES } from "../actions/notesActions";

const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case RESET_NOTES:
      return initialState;
    default:
      return state;
  }
};
export default notesReducer;
