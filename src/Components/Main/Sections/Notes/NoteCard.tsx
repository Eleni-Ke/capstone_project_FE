import { useState } from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import { INote } from "../../../../redux/interfaces/INote";
import {
  deleteNote,
  getAllNotes,
} from "../../../../redux/actions/notesActions";
import { Button, Card, Modal } from "react-bootstrap";
import { CiTrash } from "react-icons/ci";
import NoteChangeModal from "./NoteChangeModal";

interface IProps {
  note: INote;
}

const NoteCard = (props: IProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useAppDispatch();
  const accessToken = localStorage.getItem("accessToken");

  const deleteCurrentNote = () => {
    dispatch(deleteNote(props.note._id!, accessToken!));
    dispatch(getAllNotes(accessToken!));
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete this note?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteCurrentNote}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Card className="single-card">
        <div className="edit-delete-button">
          <NoteChangeModal note={props.note} />
          <button onClick={handleShow}>
            <CiTrash />
          </button>
        </div>
        <Card.Title>{props.note.title}</Card.Title>
        <Card.Body>
          <div className="card-text">
            <p>{props.note.text}</p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default NoteCard;
