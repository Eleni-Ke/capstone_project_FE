import NavBar from "../Navbar/NavBar";

const Settings = () => {
  return (
    <div className="d-flex">
      <NavBar />
      <div className="d-flex flex-column w-100 position-absolute">
        <div className="background-table"></div>
      </div>
    </div>
  );
};

export default Settings;
