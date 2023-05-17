import { INote } from "../interfaces/INote";
import { GET_PLACES } from "./placeActions";

export const GET_NOTES = "GET_NOTES";
export const POST_NOTE = "POST_NOTE";
export const RESET_NOTES = "RESET_NOTES";

export const addNote = (newNote: INote, accessToken: string) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BE_URL}/notes`, {
        method: "POST",
        body: JSON.stringify(newNote),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch(getAllNotes(accessToken));
        console.log("New note: ", data);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllNotes = (accessToken: string) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BE_URL}/notes`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_NOTES,
          payload: data,
        });
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const putNote = (
  noteId: string,
  noteChange: INote,
  accessToken: string
) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/notes/${noteId}`,
        {
          method: "PUT",
          body: JSON.stringify(noteChange),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch(getAllNotes(accessToken));
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteNote = (noteId: string, accessToken: string) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/notes/${noteId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-type": "application/json",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        dispatch(getAllNotes(accessToken));
      } else {
        console.log("try again!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
