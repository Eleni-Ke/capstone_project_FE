import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../redux/hooks";
import NavBar from "../../Navbar/NavBar";
import CharacterAddModal from "./CharacterAddModal";
import CharacterCard from "./CharacterCard";

const Characters = () => {
  const allCharacters = useAppSelector((state) => state.characters.characters);
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="d-flex">
      <NavBar />
      <div className="d-flex flex-column w-100 position-absolute">
        <div className="background-table">
          <div className="main-section main-characters">
            <div className="banner-characters banner">
              <h2 className="section-title">The Characters</h2>
            </div>
            {allCharacters &&
              allCharacters.length > 0 &&
              allCharacters.map((character: any) => {
                return (
                  <CharacterCard character={character} key={character._id} />
                );
              })}
          </div>
        </div>
      </div>
      <CharacterAddModal />
    </div>
  );
};

export default Characters;
