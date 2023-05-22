import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BsArrowUpCircle, BsPlusCircle } from "react-icons/bs";
import { addPlace, getAllPlaces } from "../../../../redux/actions/placeActions";
import { useAppDispatch } from "../../../../redux/hooks";

const PlaceAddModal = () => {
  const [show, setShow] = useState(false);
  let [placeName, setPlaceName] = useState("");
  let [placeDescription, setPlaceDescription] = useState("");
  let [owner, setOwner] = useState("");
  let [smells, setSmells] = useState("");
  let [type, setType] = useState("");
  let [lighting, setLighting] = useState("");
  let [events, setEvents] = useState("");

  const accessToken = localStorage.getItem("accessToken");

  const dispatch = useAppDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addNewPlace = () => {
    dispatch(
      addPlace(
        {
          placeName: placeName,
          description: placeDescription,
          owner: owner,
          smells: smells,
          type: type,
          lighting: lighting,
          events: events,
        },
        accessToken!
      )
    );
    setPlaceName("");
    setPlaceDescription("");
    setOwner("");
    setSmells("");
    setType("");
    setLighting("");
    setEvents("");
    dispatch(getAllPlaces(accessToken!));
    handleClose();
  };
  return (
    <>
      <div className="bottom-right-icons">
        <button onClick={handleShow}>
          <BsPlusCircle />
        </button>
        <a href="#top">
          <BsArrowUpCircle />
        </a>
      </div>
      <Modal show={show} onHide={handleClose} className="addNewElementModal">
        <div className="modal-background place-modal-background">
          <div className="hole-one hole"></div>
          <div className="hole-two hole"></div>
          <div className="hole-three hole"></div>
        </div>
        <Modal.Header closeButton>
          <Modal.Title>Add a place here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formPlaceName">
              <Form.Label>Name of the place *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={placeName}
                onChange={(e) => setPlaceName(e.target.value)}
                required={true}
              />
            </Form.Group>
            <Form.Group controlId="formPlaceDescription">
              <Form.Label>Description *</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter description"
                value={placeDescription}
                onChange={(e) => setPlaceDescription(e.target.value)}
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
          <Button variant="primary" onClick={addNewPlace}>
            Save place
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PlaceAddModal;
