import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { addRelationship } from "../../../../../redux/actions/characterActions";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { ICharacter } from "../../../../../redux/interfaces/ICharacter";

interface IProps {
  character: ICharacter;
}

const AddRelationshipModal = (props: IProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [partner, setPartner] = useState("");
  let [relationshipType, setRelationshipType] = useState("");
  //let [relationships, setRelationships] = useState<IRelationship[]>([]);
  const dispatch = useAppDispatch();
  const accessToken = localStorage.getItem("accessToken");

  let allCharacters = useAppSelector((state) => state.characters.characters);

  let charactersWithoutCurrent = allCharacters.filter(
    (e: any) => e._id !== props.character._id
  );

  let onlyIdFromPartners = props.character.relationships.map(
    (obj) => obj.partner
  );

  let charactersToAdd = charactersWithoutCurrent.filter(
    (e: any) => !onlyIdFromPartners.includes(e._id)
  );

  const addNewRelationship = () => {
    dispatch(
      addRelationship(
        props.character._id,
        [
          {
            partner: partner,
            relationshipType: relationshipType,
          },
        ],
        accessToken!
      )
    );
    setPartner("");
    setRelationshipType("");
    handleClose();
  };

  return (
    <>
      <button onClick={handleShow}>Add a relationship</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a relationship here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formPartnerName">
              <Form.Label>Partner *</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setPartner(e.target.value)}
                required={true}
              >
                <option value="">Choose partner</option>
                {charactersToAdd.map((character: any) => (
                  <option key={character._id} value={character._id}>
                    {character.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Type of relationship *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter relationship type."
                value={relationshipType}
                onChange={(e) => setRelationshipType(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewRelationship}>
            Save relationship
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddRelationshipModal;
