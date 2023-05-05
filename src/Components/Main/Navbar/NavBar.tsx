import { Nav, Navbar } from "react-bootstrap";
import { GiSpellBook } from "react-icons/gi";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { GiSewingString, GiNotebook } from "react-icons/gi";
import { TbCirclesRelation } from "react-icons/tb";
import { RiLogoutCircleLine } from "react-icons/ri";
import { setCurrentUser } from "../../../redux/actions";
import { useAppDispatch } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { RESET_CHARACTERS } from "../../../redux/actions/characterActions";
import { RESET_PLACES } from "../../../redux/actions/placeActions";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logout = () => {
    // const emptyUser = {
    //   _id: "",
    //   username: "",
    //   email: "",
    // };
    localStorage.removeItem("accessToken");
    dispatch({
      type: RESET_CHARACTERS,
    });
    dispatch({
      type: RESET_PLACES,
    });

    Cookies.remove("accessToken");
    navigate("/");
  };
  return (
    <Navbar className="navbar flex-column sticky-top">
      <Navbar.Brand href="/home" className="mx-auto">
        <GiSpellBook />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end navbar-icons flex-column"
      >
        <Nav.Link href="/characters">
          <IoPeopleCircleOutline />
        </Nav.Link>
        <Nav.Link href="/places">
          <GrMapLocation />
        </Nav.Link>
        <Nav.Link href="#">
          <GiSewingString />
        </Nav.Link>
        <Nav.Link href="#">
          <GiNotebook />
        </Nav.Link>
        <Nav.Link href="#">
          <TbCirclesRelation />
        </Nav.Link>
        <Nav.Link onClick={logout} className="logout-btn">
          <RiLogoutCircleLine />
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
