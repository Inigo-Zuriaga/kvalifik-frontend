import { NavLink } from "react-router-dom";
import "..//..//assets/styles.scss";

export default function EnsembleCard({
  title,
  location,
  musicians,
  description,
  instrument,
  experience,
}: any) {
  return (
    <NavLink to="/Ensemble" className="ensemble__card-container">
      <div className="ensemble__card-data">
        <div>
          <h3>{title}</h3>

          <p>{location}</p>
        </div>
        <p>
          <b>Perion:</b> <br /> <span>{experience}+</span>
        </p>
      </div>

      <div className="ensemble__card-description">
        <p>{description}</p>
        <div>
          <p>Musicians needed: {musicians}</p>
          <h4>{instrument}</h4>
        </div>
      </div>
    </NavLink>
  );
}
