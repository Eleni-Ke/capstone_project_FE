import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { CiTrash } from "react-icons/ci";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { TbSitemap } from "react-icons/tb";
import {
  addCharacterImage,
  deleteCharacter,
  getAllCharacters,
} from "../../../../redux/actions/characterActions";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { ICharacter } from "../../../../redux/interfaces/ICharacter";
import CharacterChangeModal from "./CharacterChangeModal";
import AddRelationshipModal from "./Relationships/AddRelationshipModal";

interface IProps {
  character: ICharacter;
}

const CharacterCard = (props: IProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useAppDispatch();
  const accessToken = localStorage.getItem("accessToken");

  const allCharacters = useAppSelector((state) => state.characters.characters);

  const addImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      addCharacterImage(
        props.character._id,
        event.target.files?.[0],
        accessToken!
      )
    );
  };

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
          <div className="card-image">
            {props.character.images.length > 0 ? (
              <Card.Img src={props.character.images[0]} />
            ) : (
              <Card.Img src="https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg" />
            )}
            <label className="change-avatar-input">
              <MdOutlinePhotoCamera />
              <input className="input" type="file" onChange={addImage} />
            </label>
          </div>
          <div className="card-text">
            <ul>
              <li>
                {" "}
                <strong>Description: </strong>
                {props.character.description}
              </li>
              <li>
                <strong>ID: </strong>
                {props.character._id}
              </li>
              <li>
                <strong>Relationships:</strong>
                {props.character.relationships.map((relationship) => {
                  const partner = allCharacters.find(
                    (e: any) => e._id === relationship.partner
                  );
                  return (
                    <p>
                      {relationship.relationshipType}: {partner.name}
                    </p>
                  );
                })}
                <AddRelationshipModal character={props.character} />
              </li>
            </ul>
          </div>
          <a href="/characters/relationships">
            <TbSitemap className="relationships-icon" />
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default CharacterCard;
