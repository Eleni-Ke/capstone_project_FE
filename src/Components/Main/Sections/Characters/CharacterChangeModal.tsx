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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeCharacter = () => {
    dispatch(
      putCharacter(
        currentCharacter._id,
        {
          name: name,
          description: description,
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
