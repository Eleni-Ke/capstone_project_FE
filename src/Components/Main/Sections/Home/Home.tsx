import Cookies from "js-cookie";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getMeInfo } from "../../../../redux/actions";
import { getAllCharacters } from "../../../../redux/actions/characterActions";
import { getAllNotes } from "../../../../redux/actions/notesActions";
import { getAllPlaces } from "../../../../redux/actions/placeActions";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import NavBar from "../../Navbar/NavBar";
import InteractiveBackground from "./InteractiveBackground";

const Home = () => {
  let currentUser = useAppSelector((state) => state.currentUser.currentUser);
  let characters = useAppSelector((state) => state.characters);
  let places = useAppSelector((state) => state.places);
  let notes = useAppSelector((state) => state.notes);

  const dispatch = useAppDispatch();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const tokenCookie = Cookies.get("accessToken");
    if (tokenCookie) {
      localStorage.setItem("accessToken", tokenCookie);
      dispatch(getMeInfo(tokenCookie!));
      dispatch(getAllCharacters(tokenCookie!));
      dispatch(getAllPlaces(tokenCookie!));
      dispatch(getAllNotes(accessToken!));
    } else {
      dispatch(getAllCharacters(accessToken!));
      dispatch(getAllNotes(accessToken!));
      dispatch(getAllPlaces(accessToken!));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="d-flex">
      <NavBar />
      <div className="home-main position-absolute">
        <h2>Welcome {currentUser?.username}</h2>
        <InteractiveBackground />
        <Link to="/characters">
          {characters.characters.length > 0 &&
          characters.characters[0].images.length > 0 ? (
            <img
              src={characters.characters[0].images[0]}
              alt="character"
              className="character-image"
            />
          ) : (
            <img
              src="https://cdn.shopify.com/s/files/1/0850/2114/files/tips_to_help_heighten_senses_480x480.png?v=1624399167"
              alt="character"
              className="character-image"
            />
          )}
        </Link>
        <Link to="/places">
          {places.places > 0 && places.places[0].images.length > 0 ? (
            <img
              src={places.places[0].images[0]}
              className="place-image"
              alt="places"
            />
          ) : (
            <img
              src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2020/01/Chancellors-Swiss-Cottage.jpg"
              alt="place"
              className="place-image"
            />
          )}
        </Link>
        {/* <Link to="#">
          <img
            src="https://c8.alamy.com/compde/cpc302/der-grosse-maskenball-second-empire-zeitraum-kleid-anlasslich-der-veranstaltung-vichy-feiert-napoleon-iii-vichy-cpc302.jpg"
            alt="scene"
            className="scene-image"
          />
        </Link>
        <Link to="#">
          <p className="quote">This is a very interesting quote</p>
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
