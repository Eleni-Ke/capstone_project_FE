export const GET_CHARACTERS = "GET_CHARACTERS";
export const POST_CHARACTER = "POST_CHARACTER";
export const RESET_CHARACTERS = "RESET_CHARACTERS";

export const addCharacter = (newCharacter: any, accessToken: string) => {
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
        dispatch({
          type: POST_CHARACTER,
          payload: data,
        });
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
        `${process.env.REACT_APP_BE_URL}/characters/:${characterId}`,
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

export const changeCharacter = (
  characterId: string,
  characterChange: any,
  accessToken: string
) => {
  return async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/characters/:${characterId}`,
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
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCharacter = (characterId: string, accessToken: string) => {
  return async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/characters/:${characterId}`,
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
      }
    } catch (error) {
      console.log(error);
    }
  };
};
