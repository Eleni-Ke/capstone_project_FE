import { Card } from "react-bootstrap";
import { CiEdit, CiTrash } from "react-icons/ci";

const PlaceCard = () => {
  return (
    <Card className="single-card">
      <div className="edit-delete-button">
        <CiEdit />
        <CiTrash />
      </div>
      <Card.Title>NAME OF PLACE</Card.Title>
      <Card.Body>
        <Card.Img src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2020/01/Chancellors-Swiss-Cottage.jpg" />
        <Card.Text>
          <ul>
            <li>Location: blablabla</li>
            <li>Type: cottage</li>
            <li>
              Description: description of the cottage in some words. Blabla
              blablablabla
            </li>
            <li>Smells: blabla blabla blabla</li>
            <li>Colours: blabla blabla blabla</li>
            <li>Characters: bla, blaa and blaaa</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PlaceCard;
