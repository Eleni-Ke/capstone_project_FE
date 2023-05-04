import { Card } from "react-bootstrap";
import { CiEdit, CiTrash } from "react-icons/ci";
import { TbSitemap } from "react-icons/tb";
import { ICharacter } from "../../../../redux/interfaces/ICharacter";

interface IProps {
  character: ICharacter;
}

const CharacterCard = (props: IProps) => {
  return (
    <Card className="single-card">
      <div className="edit-delete-button">
        <CiEdit />
        <CiTrash />
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
  );
};

export default CharacterCard;
