import NavBar from "../../Navbar/NavBar";
import PlaceCard from "./PlaceCard";
import { BsArrowUpCircle, BsPlusCircle } from "react-icons/bs";

const Places = () => {
  return (
    <div className="d-flex">
      <NavBar />
      <div className="d-flex flex-column w-100">
        <div className="banner-places banner">
          <h2>Places in storyland. (or name of country/planet/whatever)</h2>
        </div>
        <div className="main-section main-places">
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
        </div>
      </div>
      <div className="bottom-right-icons">
        <BsPlusCircle />
        <BsArrowUpCircle />
      </div>
    </div>
  );
};

export default Places;
