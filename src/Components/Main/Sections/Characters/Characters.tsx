import { useEffect } from "react";
import { getAllCharacters } from "../../../../redux/actions/characterActions";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import NavBar from "../../Navbar/NavBar";
import CharacterAddModal from "./CharacterAddModal";
import CharacterCard from "./CharacterCard";

const Characters = () => {
  const dispatch = useAppDispatch();
  const accessToken = localStorage.getItem("accessToken");
  const allCharacters = useAppSelector((state) => state.characters.characters);

  useEffect(() => {
    dispatch(getAllCharacters(accessToken!));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="d-flex">
      <NavBar />
      <div className="d-flex flex-column w-100">
        <div className="banner-characters banner">
          <h2>The Characters</h2>
        </div>
        <div className="main-section main-characters">
          {allCharacters && allCharacters.length > 0 ? (
            allCharacters.map((character: any) => {
              return (
                <CharacterCard character={character} key={character._id} />
              );
            })
          ) : (
            <p> Create your first Character here!</p>
          )}
        </div>
      </div>
      <CharacterAddModal />
    </div>
  );
};

export default Characters;
