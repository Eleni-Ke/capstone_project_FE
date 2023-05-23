import { access } from "fs";
import { IStory } from "../interfaces/IStory";

export const GET_STORIES = "GET_STORIES";
export const RESET_STORIES = "RESET_STORIES";

export const addStory = (newStory: IStory, accessToken: string) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BE_URL}/stories`, {
        method: "POST",
        body: JSON.stringify(newStory),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.ok) {
        const data = await res.json();

        dispatch(getAllStories(accessToken));
        console.log("New Story: ", data);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllStories = (accessToken: string) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BE_URL}/stories`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_STORIES,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const putStory = (
  storyId: string,
  changedStory: IStory,
  accessToken: string
) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/stories/${storyId}`,
        {
          method: "PUT",
          body: JSON.stringify(changedStory),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch(getAllStories(accessToken));
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteStory = (storyId: string, accessToken: string) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/stories/${storyId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        dispatch(getAllStories(accessToken));
      } else {
        console.log("try again!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
