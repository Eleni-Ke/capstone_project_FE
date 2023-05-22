import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { CiEdit } from "react-icons/ci";
import { getAllPlaces, putPlace } from "../../../../redux/actions/placeActions";
import { useAppDispatch } from "../../../../redux/hooks";
import { IPlace } from "../../../../redux/interfaces/IPlace";

interface IProps {
  place: IPlace;
}

const PlaceChangeModal = (props: IProps) => {
  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useAppDispatch();
  const currentPlace = props.place;

  const [show, setShow] = useState(false);

  let [name, setName] = useState(currentPlace.placeName);
  let [description, setDescription] = useState(currentPlace.description);
  let [owner, setOwner] = useState(currentPlace.owner);
  let [smells, setSmells] = useState(currentPlace.smells);
  let [type, setType] = useState(currentPlace.type);
  let [lighting, setLighting] = useState(currentPlace.lighting);
  let [events, setEvents] = useState(currentPlace.events);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const changePlace = () => {
    dispatch(
      putPlace(
        currentPlace._id!,
        {
          placeName: name,
          description: description,
          owner: owner,
          smells: smells,
          type: type,
          lighting: lighting,
          events: events,
        },
        accessToken!
      )
    );
    dispatch(getAllPlaces(accessToken!));
    handleClose();
  };
  return (
    <>
      <button onClick={handleShow}>
        <CiEdit />
      </button>
      <Modal show={show} onHide={handleClose}>
        <div className="modal-background place-modal-background">
          <div className="hole-one hole"></div>
          <div className="hole-two hole"></div>
          <div className="hole-three hole"></div>
        </div>
        <Modal.Header closeButton>
          <Modal.Title>Change the place here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formChangePlaceName">
              <Form.Label>Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
              />
            </Form.Group>
            <Form.Group controlId="formChangePlaceDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required={true}
              />
            </Form.Group>
            <Form.Group controlId="formPlaceOwner">
              <Form.Label>Owner</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter owner"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                required={false}
              />
            </Form.Group>
            <Form.Group controlId="formPlaceSmells">
              <Form.Label>Smells </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter smells"
                value={smells}
                onChange={(e) => setSmells(e.target.value)}
                required={false}
              />
            </Form.Group>
            <Form.Group controlId="formPlaceType">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required={false}
              />
            </Form.Group>
            <Form.Group controlId="formPlaceLighting">
              <Form.Label>Lighting</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter lighting"
                value={lighting}
                onChange={(e) => setLighting(e.target.value)}
                required={false}
              />
            </Form.Group>
            <Form.Group controlId="formPlaceEvents">
              <Form.Label>Events</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter events"
                value={events}
                onChange={(e) => setEvents(e.target.value)}
                required={false}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={changePlace}>
            Save place
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PlaceChangeModal;
