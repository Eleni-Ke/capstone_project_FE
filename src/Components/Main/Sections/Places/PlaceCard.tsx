import { useState } from "react";
import { Button, Card, Carousel, Modal } from "react-bootstrap";
import { CiTrash } from "react-icons/ci";
import { useAppDispatch } from "../../../../redux/hooks";
import { IPlace } from "../../../../redux/interfaces/IPlace";
import {
  addPlaceImage,
  deletePlace,
  getAllPlaces,
} from "../../../../redux/actions/placeActions";
import PlaceChangeModal from "./PlaceChangeModal";
import { MdOutlinePhotoCamera } from "react-icons/md";

interface IProps {
  place: IPlace;
}

const PlaceCard = (props: IProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useAppDispatch();
  const accessToken = localStorage.getItem("accessToken");

  const addImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      addPlaceImage(props.place._id, event.target.files?.[0], accessToken!)
    );
  };

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
          <PlaceChangeModal place={props.place} />
          <button onClick={handleShow}>
            <CiTrash />
          </button>
        </div>
        <Card.Title>{props.place.placeName}</Card.Title>
        <Card.Body>
          <div className="card-image">
            {props.place.images && props.place.images.length > 0 ? (
              <Carousel interval={null}>
                {props.place.images.map((image) => {
                  return (
                    <Carousel.Item>
                      <img src={image} alt="place" />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            ) : (
              <Card.Img src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2020/01/Chancellors-Swiss-Cottage.jpg" />
            )}
            <label className="change-avatar-input">
              {" "}
              <MdOutlinePhotoCamera />
              <input className="input" type="file" onChange={addImage} />
            </label>
          </div>
          <div className="card-text">
            <ul>
              <li>
                <strong>Description: </strong>
                {props.place.description}
              </li>
              {props.place.owner && (
                <li>
                  <strong>Owner: </strong>
                  {props.place.owner}
                </li>
              )}
              {props.place.smells && (
                <li>
                  <strong>Smells: </strong>
                  {props.place.smells}
                </li>
              )}
              {props.place.type && (
                <li>
                  <strong>Type: </strong>
                  {props.place.type}
                </li>
              )}
              {props.place.lighting && (
                <li>
                  <strong>Lighting: </strong>
                  {props.place.lighting}
                </li>
              )}
              {props.place.events && (
                <li>
                  <strong>Events: </strong>
                  {props.place.events}
                </li>
              )}
            </ul>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default PlaceCard;
