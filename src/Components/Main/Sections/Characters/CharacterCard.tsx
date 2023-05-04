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
        <Card.Img src="https://cdn.shopify.com/s/files/1/0850/2114/files/tips_to_help_heighten_senses_480x480.png?v=1624399167" />
        <div>
          <ul>
            <li>Description: {props.character.description}</li>
            <li>Looks: blablabla</li>
            <li>
              Description: description of the character in some words. Blabla
              blablablabla
            </li>
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
