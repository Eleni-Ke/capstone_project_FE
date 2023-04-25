import { BsArrowUpCircle, BsPlusCircle } from "react-icons/bs";
import NavBar from "../../Navbar/NavBar";
import CharacterCard from "./CharacterCard";

const Characters = () => {
  return (
    <div className="d-flex">
      <NavBar />
      <div className="d-flex flex-column w-100">
        <div className="banner-characters banner">
          <h2>The Characters</h2>
        </div>
        <div className="main-section main-characters">
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
        </div>
      </div>
      <div className="bottom-right-icons">
        <BsPlusCircle />
        <BsArrowUpCircle />
      </div>
    </div>
  );
};

export default Characters;
