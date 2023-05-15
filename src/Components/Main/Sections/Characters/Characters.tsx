import { useEffect } from "react";
import { getAllCharacters } from "../../../../redux/actions/characterActions";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import NavBar from "../../Navbar/NavBar";
import CharacterAddModal from "./CharacterAddModal";
import CharacterCard from "./CharacterCard";

const Characters = () => {
  ("accessToken");
  const allCharacters = useAppSelector((state) => state.characters.characters);

  return (
    <div className="d-flex">
      <NavBar />
      <div className="d-flex flex-column w-100 position-absolute">
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
