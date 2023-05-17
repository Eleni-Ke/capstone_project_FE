import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { CiEdit } from "react-icons/ci";
import {
  getAllCharacters,
  putCharacter,
} from "../../../../redux/actions/characterActions";
import { useAppDispatch } from "../../../../redux/hooks";
import { ICharacter } from "../../../../redux/interfaces/ICharacter";

interface IProps {
  character: ICharacter;
}

const CharacterChangeModal = (props: IProps) => {
  const accessToken = localStorage.getItem("accessToken");

  const dispatch = useAppDispatch();
  const currentCharacter = props.character;

  const [show, setShow] = useState(false);

  let [name, setName] = useState(currentCharacter.name);
  let [description, setDescription] = useState(currentCharacter.description);
  let [age, setAge] = useState(currentCharacter.age);
  let [appearance, setAppearance] = useState(currentCharacter.appearance);
  let [strengths, setStrengths] = useState(currentCharacter.strengths);
  let [weaknesses, setWeaknesses] = useState(currentCharacter.weaknesses);
  let [superPower, setSuperPower] = useState(currentCharacter.superPower);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeCharacter = () => {
    dispatch(
      putCharacter(
        currentCharacter._id,
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
    dispatch(getAllCharacters(accessToken!));
    handleClose();
  };
  return (
    <>
      <button onClick={handleShow}>
        <CiEdit />
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change the character here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formChangeCharacterName">
              <Form.Label>Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
              />
            </Form.Group>
            <Form.Group controlId="formChangeCharacterDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
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
          <Button variant="primary" onClick={changeCharacter}>
            Save character
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CharacterChangeModal;
