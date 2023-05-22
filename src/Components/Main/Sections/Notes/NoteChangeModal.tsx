import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { CiEdit } from "react-icons/ci";
import { getAllNotes, putNote } from "../../../../redux/actions/notesActions";
import { useAppDispatch } from "../../../../redux/hooks";
import { INote } from "../../../../redux/interfaces/INote";

interface IProps {
  note: INote;
}

const NoteChangeModal = (props: IProps) => {
  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useAppDispatch();
  const currentNote = props.note;
  const [show, setShow] = useState(false);
  let [title, setTitle] = useState(currentNote.title);
  let [text, setText] = useState(currentNote.text);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeNote = () => {
    dispatch(
      putNote(
        currentNote._id!,
        {
          title: title,
          text: text,
        },
        accessToken!
      )
    );
    dispatch(getAllNotes(accessToken!));
    handleClose();
  };
  return (
    <>
      <button onClick={handleShow}>
        <CiEdit />
      </button>
      <Modal show={show} onHide={handleClose}>
        <div className="notes-modal-background modal-background">
          <div className="hole-one hole"></div>
          <div className="hole-two hole"></div>
        </div>
        <Modal.Header closeButton>
          <Modal.Title>Change the note here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formChangeNoteTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required={true}
              />
            </Form.Group>
            <Form.Group controlId="formChangeNoteText">
              <Form.Label>Text</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required={true}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={changeNote}>
            Save note
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NoteChangeModal;
