import Cookies from "js-cookie";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMeInfo } from "../../../../redux/actions";
import { getAllCharacters } from "../../../../redux/actions/characterActions";
import { getAllNotes } from "../../../../redux/actions/notesActions";
import { getAllPlaces } from "../../../../redux/actions/placeActions";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import NavBar from "../../Navbar/NavBar";
import InteractiveBackground from "./InteractiveBackground";

const Home = () => {
  let currentUser = useAppSelector((state) => state.currentUser.currentUser);

  const dispatch = useAppDispatch();
  const accessToken = localStorage.getItem("accessToken");

  const navigate = useNavigate();

  useEffect(() => {
    const tokenCookie = Cookies.get("accessToken");
    if (tokenCookie) {
      localStorage.setItem("accessToken", tokenCookie);
      dispatch(getMeInfo(tokenCookie!));
      dispatch(getAllCharacters(tokenCookie!));
      dispatch(getAllPlaces(tokenCookie!));
      dispatch(getAllNotes(accessToken!));
    } else {
      if (!accessToken) {
        navigate("/");
      }
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
        <div className="position-absolute w-100 home-title-container">
          <h2 className="section-title">Welcome {currentUser?.username}</h2>
        </div>

        <InteractiveBackground />
        <div className="sign">
          <Link to="/characters" className="characters-sign sign-link">
            Characters
          </Link>
          <Link
            to="/characters/relationships"
            className="relationships-sign sign-link"
          >
            Relationships
          </Link>
          <Link to="/places" className="places-sign sign-link">
            Places
          </Link>
          <Link to="/notes" className="notes-sign sign-link">
            Notes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
