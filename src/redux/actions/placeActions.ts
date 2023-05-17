import { IPlace } from "../interfaces/IPlace";

export const GET_PLACES = "GET_PLACES";
export const POST_PLACE = "POST_PLACE";
export const RESET_PLACES = "RESET_PLACES";

export const addPlace = (newPlace: IPlace, accessToken: string) => {
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

        dispatch(getAllPlaces(accessToken));
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

export const putPlace = (
  placeId: string,
  placeChange: IPlace,
  accessToken: string
) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/places/${placeId}`,
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
        dispatch(getAllPlaces(accessToken));
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
        dispatch(getAllPlaces(accessToken));
      } else {
        console.log("try again!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addPlaceImage = (
  placeId: string,
  image: any,
  accessToken: string
) => {
  return async (dispatch: any) => {
    try {
      const formData = new FormData();
      formData.append("placeImage", image);
      let res = await fetch(
        `${process.env.REACT_APP_BE_URL}/places/${placeId}/image`,
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
        dispatch(getAllPlaces(accessToken));
      } else {
        console.log("There has been an error uploading the image.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
