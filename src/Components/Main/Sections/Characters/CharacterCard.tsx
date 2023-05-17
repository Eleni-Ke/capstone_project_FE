import { useState } from "react";
import { Button, Card, Carousel, Modal } from "react-bootstrap";
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
            {props.character.images && props.character.images.length > 0 ? (
              <Carousel interval={null}>
                {props.character.images.map((image) => {
                  return (
                    <Carousel.Item>
                      <img src={image} alt="character" />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
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
              {props.character.age && (
                <li>
                  <strong>Age: </strong>
                  {props.character.age}
                </li>
              )}
              {props.character.appearance && (
                <li>
                  <strong>Appearance: </strong>
                  {props.character.appearance}
                </li>
              )}
              {props.character.strengths && (
                <li>
                  <strong>Strengths: </strong>
                  {props.character.strengths}
                </li>
              )}
              {props.character.weaknesses && (
                <li>
                  <strong>Weaknesses: </strong>
                  {props.character.weaknesses}
                </li>
              )}
              {props.character.superPower && (
                <li>
                  <strong>Super Power: </strong>
                  {props.character.superPower}
                </li>
              )}
              <li>
                <strong>Relationships:</strong>
                {props.character.relationships &&
                  props.character.relationships.map((relationship) => {
                    const partner = allCharacters.find(
                      (e: any) => e._id === relationship.partner
                    );
                    if (partner) {
                      return (
                        <p key={partner._id}>
                          {relationship.relationshipType}: {partner.name}
                        </p>
                      );
                    } else {
                      return <p>This partner has just been deleted</p>;
                    }
                  })}
                <AddRelationshipModal character={props.character} />
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CharacterCard;
