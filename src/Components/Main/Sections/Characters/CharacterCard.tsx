import { Card } from "react-bootstrap";
import { TbSitemap } from "react-icons/tb";

const CharacterCard = () => {
  return (
    <Card className="single-card">
      <Card.Title>NAME</Card.Title>
      <Card.Body>
        <Card.Img src="https://cdn.shopify.com/s/files/1/0850/2114/files/tips_to_help_heighten_senses_480x480.png?v=1624399167" />
        <Card.Text>
          <ul>
            <li>Birthday: blablabla</li>
            <li>Looks: blablabla</li>
            <li>
              Description: description of the character in some words. Blabla
              blablablabla
            </li>
            <li>Smells: blabla blabla blabla</li>
            <li>Other: blabla blabla blabla</li>
            <li>Relationship with: bla, blaa and blaaa</li>
          </ul>
        </Card.Text>
        <TbSitemap className="relationships-icon" />
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
