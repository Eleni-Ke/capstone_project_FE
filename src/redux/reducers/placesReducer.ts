import { GET_PLACES, POST_PLACE, RESET_PLACES } from "../actions/placeActions";

const initialState = {
  places: [],
};

const placesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PLACES:
      return {
        ...state,
        places: action.payload,
      };
    case POST_PLACE:
      return {
        ...state,
        places: [...state.places, action.payload],
      };
    case RESET_PLACES:
      return initialState;
    default:
      return state;
  }
};

export default placesReducer;
