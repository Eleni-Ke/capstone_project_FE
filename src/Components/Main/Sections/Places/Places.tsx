import NavBar from "../../Navbar/NavBar";
import PlaceCard from "./PlaceCard";
import PlaceAddModal from "./PlaceAddModal";
import { useAppSelector } from "../../../../redux/hooks";

const Places = () => {
  ("accessToken");
  const allPlaces = useAppSelector((state) => state.places.places);

  return (
    <div className="d-flex places-container">
      <NavBar />
      <div className="d-flex flex-column w-100 position-absolute">
        <div className="background-table">
          <div className="main-section main-places">
            <div className="banner-places banner">
              <h2 className="section-title">Places in story.</h2>
            </div>
            {allPlaces &&
              allPlaces.length > 0 &&
              allPlaces.map((place: any) => {
                return <PlaceCard place={place} key={place._id} />;
              })}
          </div>
        </div>
      </div>
      <PlaceAddModal />
    </div>
  );
};

export default Places;
