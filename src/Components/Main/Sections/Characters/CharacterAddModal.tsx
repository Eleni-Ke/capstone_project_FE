import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BsArrowUpCircle, BsPlusCircle } from "react-icons/bs";
import {
  addCharacter,
  getAllCharacters,
} from "../../../../redux/actions/characterActions";
import { useAppDispatch } from "../../../../redux/hooks";

const CharacterAddModal = () => {
  const [show, setShow] = useState(false);
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [age, setAge] = useState("");
  let [appearance, setAppearance] = useState("");
  let [strengths, setStrengths] = useState("");
  let [weaknesses, setWeaknesses] = useState("");
  let [superPower, setSuperPower] = useState("");

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
          age: age,
          appearance: appearance,
          strengths: strengths,
          weaknesses: weaknesses,
          superPower: superPower,
        },
        accessToken!
      )
    );
    setName("");
    setDescription("");
    setAge("");
    setAppearance("");
    setStrengths("");
    setWeaknesses("");
    setSuperPower("");
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
      <Modal show={show} onHide={handleClose} className="addNewElementModal">
        <div className="modal-background character-modal-background">
          <div className="hole-one hole"></div>
          <div className="hole-two hole"></div>
          <div className="hole-three hole"></div>
        </div>
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
                as="textarea"
                rows={4}
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required={true}
              />
            </Form.Group>
            <Form.Group controlId="formCharacterAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required={false}
              />
            </Form.Group>
            <Form.Group controlId="formCharacterAppearance">
              <Form.Label>Appearance</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter appearance"
                value={appearance}
                onChange={(e) => setAppearance(e.target.value)}
                required={false}
              />
            </Form.Group>
            <Form.Group controlId="formCharacterStrengths">
              <Form.Label>Strengths</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter strengths"
                value={strengths}
                onChange={(e) => setStrengths(e.target.value)}
                required={false}
              />
            </Form.Group>
            <Form.Group controlId="formCharacterWeaknesses">
              <Form.Label>Weaknesses</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter weaknesses"
                value={weaknesses}
                onChange={(e) => setWeaknesses(e.target.value)}
                required={false}
              />
            </Form.Group>
            <Form.Group controlId="formCharacterPower">
              <Form.Label>Super power</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter super power"
                value={superPower}
                onChange={(e) => setSuperPower(e.target.value)}
                required={false}
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
