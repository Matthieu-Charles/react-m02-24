/* eslint-disable react/prop-types */
import "./Smiley.css";

function Smiley(props) {
  return (
    <div onClick={() => props.setFeeling(props.smiley.image)}>
      {props.smiley.image}
    </div>
  );
}

export default Smiley;
