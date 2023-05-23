import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { CiTrash } from "react-icons/ci";
import {
  deleteStory,
  getAllStories,
} from "../../../../redux/actions/storyActions";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { IStory } from "../../../../redux/interfaces/IStory";

interface IProps {
  story: IStory;
}

const StoryCard = (props: IProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useAppDispatch();
  const accessToken = localStorage.getItem("accessToken");
  //   const allStories = useAppSelector((state) => state.stories.stories);
  const allPlaces = useAppSelector((state) => state.places.places);
  const allCharacters = useAppSelector((state) => state.characters.characters);
  const currentStory = props.story;

  const deleteCurrentStory = () => {
    dispatch(deleteStory(props.story._id!, accessToken!));
    dispatch(getAllStories(accessToken!));
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete this event?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteCurrentStory}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Card className="single-card">
        <div className="edit-delete-button">
          {/* <StoryChangeModal character={props.story} /> */}
          <button onClick={handleShow}>
            <CiTrash />
          </button>
        </div>
        <Card.Title>{currentStory.title}</Card.Title>
        <Card.Body>
          <div className="card-text">
            <ul>
              <li>
                <strong>The event: </strong>
                {currentStory.event}
              </li>
              <li>
                <strong>Characters in event: </strong>
                {currentStory.characters &&
                  currentStory.characters.map((characterId) => {
                    const character = allCharacters.find(
                      (e: any) => e._id === characterId
                    );
                    return <span key={character._id}>{character.name}</span>;
                  })}
              </li>
              <li>
                <strong>Places in event: </strong>
                {currentStory.places &&
                  currentStory.places.map((placeId) => {
                    const place = allPlaces.find((e: any) => e._id === placeId);
                    return <span key={place._id}>{place.placeName}</span>;
                  })}
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default StoryCard;
