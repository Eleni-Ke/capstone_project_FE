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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const changePlace = () => {
    dispatch(
      putPlace(
        currentPlace._id,
        {
          name: name,
          description: description,
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={changePlace}>
            Save character
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PlaceChangeModal;
