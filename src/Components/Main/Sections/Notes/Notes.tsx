import { useAppSelector } from "../../../../redux/hooks";
import NavBar from "../../Navbar/NavBar";
import NoteAddModal from "./NoteAddModal";
import NoteCard from "./NoteCard";

const Notes = () => {
  ("accessToken");
  const allNotes = useAppSelector((state) => state.notes.notes);
  return (
    <div className="d-flex">
      <NavBar />
      <div className="d-flex flex-column w-100 position-absolute">
        <div className="background-table">
          <div className="main-section main-notes">
            <div className="banner-notes banner">
              <h2>Notes.</h2>
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
