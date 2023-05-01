import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../redux/hooks";
import NavBar from "../../Navbar/NavBar";

const Home = () => {
  let currentUser = useAppSelector((state) => state.currentUser.currentUser);
  return (
    <div className="d-flex">
      <NavBar />
      <div className="home-main">
        <h1>Welcome {currentUser?.username}</h1>
        <Link to="/characters">
          <img
            src="https://cdn.shopify.com/s/files/1/0850/2114/files/tips_to_help_heighten_senses_480x480.png?v=1624399167"
            alt="character"
            className="character-image"
          />
        </Link>
        <Link to="/places">
          <img
            src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2020/01/Chancellors-Swiss-Cottage.jpg"
            alt="place"
            className="place-image"
          />
        </Link>
        <Link to="#">
          <img
            src="https://c8.alamy.com/compde/cpc302/der-grosse-maskenball-second-empire-zeitraum-kleid-anlasslich-der-veranstaltung-vichy-feiert-napoleon-iii-vichy-cpc302.jpg"
            alt="scene"
            className="scene-image"
          />
        </Link>
        <Link to="#">
          <p className="quote">This is a very interesting quote</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
