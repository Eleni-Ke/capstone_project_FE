export const GET_PLACES = "GET_PLACES";
export const POST_PLACE = "POST_PLACE";
export const RESET_PLACES = "RESET_PLACES";

export const addPlace = (newPlace: any, accessToken: string) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BE_URL}/places`, {
        method: "POST",
        body: JSON.stringify(newPlace),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: POST_PLACE,
          payload: data,
        });
        console.log("New Place: ", data);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllPlaces = (accessToken: string) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BE_URL}/places`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_PLACES,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOnePlace = (placeId: string, accessToken: string) => {
  return async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/places/:${placeId}`,
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

export const changePlace = (
  placeId: string,
  placeChange: any,
  accessToken: string
) => {
  return async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/places/:${placeId}`,
        {
          method: "PUT",
          body: JSON.stringify(placeChange),
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

export const deletePlace = (placeId: string, accessToken: string) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/places/${placeId}`,
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
      } else {
        console.log("try again!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
