import { Nav, Navbar } from "react-bootstrap";
import { GiSpellBook } from "react-icons/gi";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { GiSewingString, GiNotebook } from "react-icons/gi";
import { TbCirclesRelation } from "react-icons/tb";
import { RiLogoutCircleLine } from "react-icons/ri";
import { RESET_CURRENT_USER } from "../../../redux/actions";
import { useAppDispatch } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { RESET_CHARACTERS } from "../../../redux/actions/characterActions";
import { RESET_PLACES } from "../../../redux/actions/placeActions";
import { RESET_NOTES } from "../../../redux/actions/notesActions";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("accessToken");
    dispatch({
      type: RESET_CHARACTERS,
    });
    dispatch({
      type: RESET_PLACES,
    });
    dispatch({
      type: RESET_CURRENT_USER,
    });
    dispatch({
      type: RESET_NOTES,
    });

    Cookies.remove("accessToken");
    navigate("/");
  };
  return (
    <Navbar className="navbar flex-column fixed-top">
      <Navbar.Brand href="/home" className="mx-auto">
        <GiSpellBook />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end navbar-icons flex-column"
      >
        <Nav.Link href="/characters" className="character-link">
          <IoPeopleCircleOutline />
          <br />
          Characters
        </Nav.Link>
        <Nav.Link href="/places" className="places-link">
          <GrMapLocation />
          <br />
          Places
        </Nav.Link>
        <Nav.Link href="/storyLine" className="story-link">
          <GiSewingString />
          <br />
          Story
        </Nav.Link>
        <Nav.Link href="/notes" className="notes-link">
          <GiNotebook />
          <br />
          Notes
        </Nav.Link>
        <Nav.Link
          href="/characters/relationships"
          className="relationship-link"
        >
          <TbCirclesRelation />
          <br />
          Relationships
        </Nav.Link>
        <Nav.Link onClick={logout} className="logout-btn">
          <RiLogoutCircleLine />
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
