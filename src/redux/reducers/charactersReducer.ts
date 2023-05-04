import {
  GET_CHARACTERS,
  POST_CHARACTER,
  RESET_CHARACTERS,
} from "../actions/characterActions";

const initialState = {
  characters: [],
};

const charactersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case POST_CHARACTER:
      return {
        ...state,
        characters: action.payload,
      };
    case RESET_CHARACTERS:
      return initialState;
    default:
      return state;
  }
};

export default charactersReducer;
