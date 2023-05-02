import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BsArrowUpCircle, BsPlusCircle } from "react-icons/bs";

const PlaceAddModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                //value={userEmail}
                //onChange={(e) => setUserEmail(e.target.value)}
                required={true}
              />
            </Form.Group>
            <Form.Group controlId="formPlaceDescription">
              <Form.Label>Description *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                //value={userEmail}
                //onChange={(e) => setUserEmail(e.target.value)}
                required={true}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save place
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PlaceAddModal;
