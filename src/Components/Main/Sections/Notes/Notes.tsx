import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../redux/hooks";
import NavBar from "../../Navbar/NavBar";
import NoteAddModal from "./NoteAddModal";
import NoteCard from "./NoteCard";

const Notes = () => {
  const allNotes = useAppSelector((state) => state.notes.notes);
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="d-flex notes-container">
      <NavBar />
      <div className="d-flex flex-column w-100 position-absolute">
        <div className="background-table">
          <div className="main-section main-notes">
            <div className="banner-notes banner">
              <h2 className="section-title">Notes.</h2>
            </div>
            {allNotes &&
              allNotes.length > 0 &&
              allNotes.map((note: any) => {
                return <NoteCard note={note} key={note._id} />;
              })}
          </div>
        </div>
      </div>
      <NoteAddModal />
    </div>
  );
};
export default Notes;
