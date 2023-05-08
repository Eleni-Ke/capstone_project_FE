import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { CiEdit, CiTrash } from "react-icons/ci";
import { TbSitemap } from "react-icons/tb";
import {
  deleteCharacter,
  getAllCharacters,
} from "../../../../redux/actions/characterActions";
import { useAppDispatch } from "../../../../redux/hooks";
import { ICharacter } from "../../../../redux/interfaces/ICharacter";
import CharacterChangeModal from "./CharacterChangeModal";

interface IProps {
  character: ICharacter;
}

const CharacterCard = (props: IProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useAppDispatch();
  const accessToken = localStorage.getItem("accessToken");

  const deleteCurrentCharacter = () => {
    dispatch(deleteCharacter(props.character._id, accessToken!));
    dispatch(getAllCharacters(accessToken!));
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Are you sure you want to delete this character?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteCurrentCharacter}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Card className="single-card">
        <div className="edit-delete-button">
          <CharacterChangeModal character={props.character} />
          <button onClick={handleShow}>
            <CiTrash />
          </button>
        </div>
        <Card.Title>{props.character.name}</Card.Title>
        <Card.Body>
          {props.character.images.length > 0 ? (
            <Card.Img src={props.character.images[0]} />
          ) : (
            <Card.Img src="https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg" />
          )}
          <div>
            <ul>
              <li>Description: {props.character.description}</li>
              <li>ID: {props.character._id}</li>

              <li>Smells: blabla blabla blabla</li>
              <li>Other: blabla blabla blabla</li>
              <li>Relationship with: bla, blaa and blaaa</li>
            </ul>
          </div>
          <TbSitemap className="relationships-icon" />
        </Card.Body>
      </Card>
    </>
  );
};

export default CharacterCard;
