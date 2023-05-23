import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import { IoIosConstruct } from "react-icons/io";

const Settings = () => {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="d-flex">
      <NavBar />
      <div className="d-flex flex-column w-100">
        <div className="background-table d-flex justify-content-center align-items-center">
          <div className="p-3 contruction-message">
            <IoIosConstruct />
            <p>
              This new feature is currently being built! <br /> Stay tuned to
              see when you can use it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
