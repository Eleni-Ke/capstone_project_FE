export const addCharacter = (newCharacter: any, accessToken: string) => {
  return async () => {
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
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
