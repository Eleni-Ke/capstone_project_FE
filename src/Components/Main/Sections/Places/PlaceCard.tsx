import { Card } from "react-bootstrap";
import { CiEdit, CiTrash } from "react-icons/ci";
import { IPlace } from "../../../../redux/interfaces/IPlace";

interface IProps {
  place: IPlace;
}

const PlaceCard = (props: IProps) => {
  return (
    <Card className="single-card">
      <div className="edit-delete-button">
        <CiEdit />
        <CiTrash />
      </div>
      <Card.Title>{props.place.placeName}</Card.Title>
      <Card.Body>
        {props.place.images.length > 0 ? (
          <Card.Img src={props.place.images[0]} />
        ) : (
          <Card.Img src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2020/01/Chancellors-Swiss-Cottage.jpg" />
        )}

        <div>
          <ul>
            <li>Description: {props.place.description}</li>
            <li>ID: {props.place._id}</li>

            <li>Smells: blabla blabla blabla</li>
            <li>Colours: blabla blabla blabla</li>
            <li>Characters: bla, blaa and blaaa</li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PlaceCard;
