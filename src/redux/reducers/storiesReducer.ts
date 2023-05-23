import { GET_STORIES, RESET_STORIES } from "../actions/storyActions";

const initialState = {
  stories: [],
};

const storiesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_STORIES:
      return {
        ...state,
        stories: action.payload,
      };
    case RESET_STORIES:
      return initialState;

    default:
      return state;
  }
};

export default storiesReducer;
