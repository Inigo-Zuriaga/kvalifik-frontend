import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles.scss";

export default function Footer() {
  const [tokenTrue, setTokenTrue] = useState(localStorage.getItem("token"));

  return (
    <footer>
      <nav className="footer-nav">
        <NavLink className="footer-nav__logo" end to="/">
          Musik Samspil
        </NavLink>
        <div className="footer-list">
          <div>
            <NavLink className="footer-list__item" to="/">
              Home
            </NavLink>
            {tokenTrue && tokenTrue != "undefined" ? (
              <div>
                <NavLink className="footer-list__item" to="/FindMusiker">
                  Find musiker
                </NavLink>
                <NavLink className="footer-list__item" to="/FindEnsemble">
                  Find ensemble
                </NavLink>
                <NavLink className="footer-list__item" to="/FindPost">
                  Find Post
                </NavLink>
                <NavLink className="footer-list__item" to="/Profil">
                  Profil
                </NavLink>
              </div>
            ) : null}
          </div>
          <div className="footer-socials">
            <NavLink
              className="fa-brands fa-square-instagram"
              to="/ig"
            ></NavLink>
            <NavLink
              className="fa-brands fa-square-facebook"
              to="/fb"
            ></NavLink>
          </div>
          <img src="/src/assets/images/footer-melody.jpg" alt="Melody" />
        </div>
      </nav>
    </footer>
  );
}
