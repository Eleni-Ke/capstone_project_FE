import NavBar from "../../Navbar/NavBar";
import PlaceCard from "./PlaceCard";
import PlaceAddModal from "./PlaceAddModal";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

const Places = () => {
  ("accessToken");
  const allPlaces = useAppSelector((state) => state.places.places);

  return (
    <div className="d-flex">
      <NavBar />
      <div className="d-flex flex-column w-100 position-absolute">
        <div className="banner-places banner">
          <h2>Places in story.</h2>
        </div>
        <div className="main-section main-places">
          {allPlaces && allPlaces.length > 0 ? (
            allPlaces.map((place: any) => {
              return <PlaceCard place={place} key={place._id} />;
            })
          ) : (
            <p>Create your first Place here!</p>
          )}
        </div>
      </div>
      <PlaceAddModal />
    </div>
  );
};

export default Places;
