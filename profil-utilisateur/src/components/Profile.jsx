import Card from "react-bootstrap/Card";
import CardImage from "./Photo";
import CardName from "./Name";
import CardBio from "./Bio";

const info = {
  imageUrl: "https://placehold.co/400",
  bio: "La bio de la personne en question",
  name: "Prénom NOM",
};

function Profile({ feelingOfTheDay }) {
  return (
    <Card style={{ width: "18rem" }}>
      <CardImage props={feelingOfTheDay} />
      <Card.Body>
        <CardName props={info.name}></CardName>
        <CardBio props={info.bio}></CardBio>
      </Card.Body>
    </Card>
  );
}

export default Profile;
