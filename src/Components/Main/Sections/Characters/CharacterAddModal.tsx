import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BsArrowUpCircle, BsPlusCircle } from "react-icons/bs";
import {
  addCharacter,
  getAllCharacters,
} from "../../../../redux/actions/characterActions";
import { useAppDispatch } from "../../../../redux/hooks";

interface IRelationship {
  partner: string;
  relationshipType: string;
}

const CharacterAddModal = () => {
  const [show, setShow] = useState(false);
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [relationships, setRelationships] = useState<IRelationship[]>([]);

  const accessToken = localStorage.getItem("accessToken");

  const dispatch = useAppDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addNewCharacter = () => {
    dispatch(
      addCharacter(
        {
          name: name,
          description: description,
        },
        accessToken!
      )
    );
    setName("");
    setDescription("");
    dispatch(getAllCharacters(accessToken!));
    handleClose();
  };

  return (
    <>
      <div className="bottom-right-icons">
        <button onClick={handleShow}>
          <BsPlusCircle />
        </button>
        <button>
          <a href="#top">
            <BsArrowUpCircle />
          </a>
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a character here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCharacterName">
              <Form.Label>Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
              />
            </Form.Group>
            <Form.Group controlId="formCharacterDescription">
              <Form.Label>Description *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required={true}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewCharacter}>
            Save character
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CharacterAddModal;
