import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BsArrowUpCircle, BsPlusCircle } from "react-icons/bs";
import { addNote, getAllNotes } from "../../../../redux/actions/notesActions";
import { useAppDispatch } from "../../../../redux/hooks";

const NoteAddModal = () => {
  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useAppDispatch();

  const [show, setShow] = useState(false);
  let [title, setTitle] = useState("");
  let [text, setText] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addNewNote = () => {
    dispatch(
      addNote(
        {
          title: title,
          text: text,
        },
        accessToken!
      )
    );
    setTitle("");
    setText("");
    dispatch(getAllNotes(accessToken!));
    handleClose();
  };
  return (
    <>
      <div className="bottom-right-icons">
        <button onClick={handleShow}>
          <BsPlusCircle />
        </button>
        <a href="#top">
          <BsArrowUpCircle />
        </a>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a note here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formAddNoteTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required={true}
              />
            </Form.Group>
            <Form.Group controlId="formAddNoteText">
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
          <Button variant="primary" onClick={addNewNote}>
            Save note
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NoteAddModal;
