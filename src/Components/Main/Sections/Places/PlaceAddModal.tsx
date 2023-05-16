import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BsArrowUpCircle, BsPlusCircle } from "react-icons/bs";
import { addPlace, getAllPlaces } from "../../../../redux/actions/placeActions";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

const PlaceAddModal = () => {
  const [show, setShow] = useState(false);
  let [placeName, setPlaceName] = useState("");
  let [placeDescription, setPlaceDescription] = useState("");

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
        },
        accessToken!
      )
    );
    setPlaceName("");
    setPlaceDescription("");
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
      <Modal show={show} onHide={handleClose}>
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
                type="text"
                placeholder="Enter description"
                value={placeDescription}
                onChange={(e) => setPlaceDescription(e.target.value)}
                required={true}
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
