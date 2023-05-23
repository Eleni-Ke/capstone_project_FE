import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BsArrowUpCircle, BsPlusCircle } from "react-icons/bs";
import {
  addStory,
  getAllStories,
} from "../../../../redux/actions/storyActions";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { ICharacter } from "../../../../redux/interfaces/ICharacter";
import { IPlace } from "../../../../redux/interfaces/IPlace";
import Select from "react-select";

const AddStoryModal = () => {
  const [show, setShow] = useState(false);
  let [title, setTitle] = useState("");
  let [event, setEvent] = useState("");
  let [characters, setCharacters] = useState<string[]>([]);
  let [places, setPlaces] = useState<string[]>([]);
  const accessToken = localStorage.getItem("accessToken");

  const dispatch = useAppDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let charactersToAdd = useAppSelector((state) => state.characters.characters);

  let placesToAdd = useAppSelector((state) => state.places.places);

  const addNewStory = () => {
    dispatch(
      addStory(
        {
          title: title,
          event: event,
          characters: characters,
          places: places,
        },
        accessToken!
      )
    );
    setTitle("");
    setEvent("");
    setCharacters([]);
    setPlaces([]);
    dispatch(getAllStories(accessToken!));
    handleClose();
  };

  let characterOptions = charactersToAdd.map((character: ICharacter) => ({
    value: character._id,
    label: character.name,
  }));

  let addedCharacters = charactersToAdd.filter((character: ICharacter) =>
    characters.includes(character._id!)
  );

  let addedCharactersValue = addedCharacters.map((char: ICharacter) => ({
    value: char._id,
    label: char.name,
  }));

  const placeOptions = placesToAdd.map((place: IPlace) => ({
    value: place._id,
    label: place.placeName,
  }));

  let addedPlaces = placesToAdd.filter((place: IPlace) =>
    places.includes(place._id!)
  );

  let addedPlacesValue = addedPlaces.map((pl: IPlace) => ({
    value: pl._id,
    label: pl.placeName,
  }));
  return (
    <>
      <div className="bottom-right-icons">
        <button onClick={handleShow}>
          <BsPlusCircle />
        </button>
        <button>
          <a href="#top">
            <BsArrowUpCircle />
          </a>
        </button>
      </div>
      <Modal show={show} onHide={handleClose} className="addNewElementModal">
        <div className="modal-background character-modal-background">
          <div className="hole-one hole"></div>
          <div className="hole-two hole"></div>
          <div className="hole-three hole"></div>
        </div>
        <Modal.Header closeButton>
          <Modal.Title>Add a new event here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formStoryTitle">
              <Form.Label>Title *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required={true}
              />
            </Form.Group>
            <Form.Group controlId="formStoryEvent">
              <Form.Label>Event *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event"
                value={event}
                onChange={(e) => setEvent(e.target.value)}
                required={true}
              />
            </Form.Group>
            <Form.Group controlId="formAddCharacterToStory">
              <Form.Label>Characters </Form.Label>
              <Select
                options={characterOptions}
                isMulti
                placeholder="Choose characters"
                value={addedCharactersValue}
                onChange={(selectedOptions) => {
                  const selectedValues = selectedOptions.map(
                    (option: any) => option.value
                  );

                  setCharacters(selectedValues);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formAddPlacesToStory">
              <Form.Label>Places </Form.Label>
              <Select
                options={placeOptions}
                isMulti
                placeholder="Choose places"
                value={addedPlacesValue}
                onChange={(selectedOptions) => {
                  const selectedValues = selectedOptions.map(
                    (option: any) => option.value
                  );
                  setPlaces(selectedValues);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewStory}>
            Save event
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddStoryModal;
