import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles.scss";

function NavBar() {
  //when we create a useState we create the variable OPEN and SETOPEN the open who calls the variable OPEN. Then we give a value to OPEN '(false)'
  const [open, setOpen] = useState(false);

  const [tokenTrue, setTokenTrue] = useState(localStorage.getItem("token"));


  if (!tokenTrue || tokenTrue == "undefined") {
    localStorage.removeItem("token");
  }

  function handleNavigate() {
    setOpen(!open);
  }
  function handleNavigate2() {
    setOpen(!open);
    localStorage.removeItem("token");
  }

  return (
    <header>
      <nav className="mobile-nav">
        <NavLink className="mobile-nav__logo" end to="/">
          Musik Samspil
          <span>Skabt af DAOS - Dansk Amatørorkester Samvirke</span>
        </NavLink>

        {open ? ( //if OPEN is true
          <>
            <i className="fas fa-times" onClick={handleNavigate}></i>
          </>
        ) : (
          //else
          <i className="fas fa-bars" onClick={handleNavigate}></i>
        )}
        <div className={open ? "menu-list" : "menu-list__hidden"}>
          <div>
            <NavLink
              className="menu-list__item"
              onClick={handleNavigate}
              to="/"
            >
              Home
            </NavLink>
            {tokenTrue && tokenTrue != "undefined" ? (
              <div>
                <NavLink
                  className="menu-list__item"
                  onClick={handleNavigate}
                  to="/FindMusiker"
                >
                  Find musician
                </NavLink>
                <NavLink
                  className="menu-list__item"
                  onClick={handleNavigate}
                  to="/FindEnsemble"
                >
                  Find ensemble
                </NavLink>
                <NavLink
                  className="menu-list__item"
                  onClick={handleNavigate}
                  to="/FindPost"
                >
                  Find post
                </NavLink>
                <NavLink
                  className="menu-list__item"
                  onClick={handleNavigate}
                  to="/ProfilUser"
                >
                  Profile
                </NavLink>
              </div>
            ) : null}
          </div>

          {!tokenTrue || tokenTrue == "undefined" ? (
            <div>
              <NavLink
                className="menu-list__item bruger-btn"
                onClick={handleNavigate}
                to="/Signing"
              >
                Sign Up
              </NavLink>
              <NavLink
                className="menu-list__item login-btn"
                onClick={handleNavigate}
                to="/Login"
              >
                Log In
              </NavLink>
            </div>
          ) : (
            <NavLink
              className="menu-list__item login-btn"
              onClick={handleNavigate2}
              to="/"
            >
              Logout
            </NavLink>
          )}
        </div>
      </nav>
      <div
        className={open ? "overlay" : "overlay__hidden"}
        onClick={handleNavigate}
      ></div>
    </header>
  );
}

export default NavBar;
