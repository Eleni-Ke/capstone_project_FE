import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { CiEdit, CiTrash } from "react-icons/ci";
import { useAppDispatch } from "../../../../redux/hooks";
import { IPlace } from "../../../../redux/interfaces/IPlace";
import {
  deletePlace,
  getAllPlaces,
} from "../../../../redux/actions/placeActions";

interface IProps {
  place: IPlace;
}

const PlaceCard = (props: IProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useAppDispatch();
  const accessToken = localStorage.getItem("accessToken");

  const deleteCurrentPlace = () => {
    dispatch(deletePlace(props.place._id, accessToken!));
    dispatch(getAllPlaces(accessToken!));
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete this place?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteCurrentPlace}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Card className="single-card">
        <div className="edit-delete-button">
          <CiEdit />
          <button onClick={handleShow}>
            <CiTrash />
          </button>
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
    </>
  );
};

export default PlaceCard;
