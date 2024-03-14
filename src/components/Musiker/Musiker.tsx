import { NavLink } from "react-router-dom";
import "..//..//assets/styles.scss";

export default function Musiker({
  name,
  location,
  instrument,
  experience,
  genre,
}: any) {
  return (
    <div className="musiker__container">
      <div className="musiker__container-image">
        <img src="/src/assets/images/people/sofie.jpg" alt="img" />
      </div>

      <div className="musiker__container-description">
        <h3>{name}</h3>
        <p>{location}</p>
        <h4>
          <b>Instrument:</b> {instrument} Player
        </h4>
        <h4>
          <b>Genre:</b> {genre} Music
        </h4>
        <h4>
          <b>Experience:</b> <span>{experience}+ Years</span>
        </h4>
      </div>
    </div>
  );
}
