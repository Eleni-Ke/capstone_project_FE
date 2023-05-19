import { ICharacter } from "../interfaces/ICharacter";
import { IRelationship } from "../interfaces/IRelationship";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const POST_CHARACTER = "POST_CHARACTER";
export const RESET_CHARACTERS = "RESET_CHARACTERS";

export const addCharacter = (newCharacter: ICharacter, accessToken: string) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BE_URL}/characters`, {
        method: "POST",
        body: JSON.stringify(newCharacter),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.ok) {
        const data = await res.json();

        dispatch(getAllCharacters(accessToken));
        console.log("New Character: ", data);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllCharacters = (accessToken: string) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BE_URL}/characters`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_CHARACTERS,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOneCharacter = (characterId: string, accessToken: string) => {
  return async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/characters/${characterId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const putCharacter = (
  characterId: string,
  characterChange: ICharacter,
  accessToken: string
) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/characters/${characterId}`,
        {
          method: "PUT",
          body: JSON.stringify(characterChange),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch(getAllCharacters(accessToken));
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCharacter = (characterId: string, accessToken: string) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/characters/${characterId}`,
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
        dispatch(getAllCharacters(accessToken));
      } else {
        console.log("try again!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addRelationship = (
  characterId: string,
  relationships: IRelationship[],
  accessToken: string
) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/characters/${characterId}/relationship`,
        {
          method: "POST",
          body: JSON.stringify({ relationships }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        dispatch(getAllCharacters(accessToken));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteRelationship = (
  characterId: string,
  partnerId: string,
  accessToken: string
) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/characters/${characterId}/relationship/${partnerId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        dispatch(getAllCharacters(accessToken));
      } else {
        console.log("try again!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addCharacterImage = (
  characterId: string,
  image: any,
  accessToken: string
) => {
  return async (dispatch: any) => {
    try {
      const formData = new FormData();
      formData.append("characterImage", image);
      let res = await fetch(
        `${process.env.REACT_APP_BE_URL}/characters/${characterId}/image`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (res.ok) {
        const data = res.json();
        console.log(data);
        dispatch(getAllCharacters(accessToken));
      } else {
        console.log("There has been an error uploading the image.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
