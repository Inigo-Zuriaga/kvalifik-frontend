import { NavLink } from "react-router-dom";
import "..//..//assets/styles.scss";

export default function Post({
  title,
  location,
  musicians,
  description,
  instrument,
  experience,
}: any) {
  return (
    <NavLink to="#" className="post-container">
      <div className="title-container">
        <img src="/src/assets/images/landing-page/post-img.jpg" alt="img" />
        <div>
          <h3>{title}</h3>
          <div className="location-numbers">
            <p>{location}</p>
            <div></div>
            <p>{musicians}</p>
          </div>
        </div>
      </div>

      <div className="description-container">
        <p>{description}</p>
        <div className="description-container__instrument">
          <h4>{instrument}</h4>
          <p>
            Experience <span>{experience}+</span>
          </p>
        </div>
      </div>
    </NavLink>
  );
}
