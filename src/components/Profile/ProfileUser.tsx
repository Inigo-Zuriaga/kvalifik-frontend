import { useEffect, useState } from "react";
import sofie from "../../assets/images/people/sofie.jpg";
import "..//..//assets/styles.scss";
import LatestPost from "../LatestPost/LatestPost";
import jwtDecode from "jwt-decode";

function ProfileUser() {
  const [musiker, setMusiker] = useState([]);
  const [tokenTrue, setTokenTrue] = useState(localStorage.getItem("token"));

  if (tokenTrue && tokenTrue != "undefined") {
    //token exist
    const decoded = jwtDecode(tokenTrue);
    console.log(decoded);

    var profilename = decoded.user.name + " " + decoded.user.surname;
    var location = decoded.user.location;
    var instrument = decoded.user.instrument;
    var genre = decoded.user.genre;
    var experience = decoded.user.experience;
    var description = decoded.user.description;
  }
  if (!tokenTrue || tokenTrue == "undefined") {
    //token no exist
    localStorage.removeItem("token");
  }

  //   const id = '63bc0cf76909baa7312ed73d' ;
  // const musikerWithEmail = musiker.filter(musician => musician._id === id);

  return (
    <>
      <div className="full-container">
        <div className="profile-container">
          <img
            src={sofie}
            alt=""
            className="profile-photo-img"
            height="71"
            width="71"
          />
          <h1 className="profile-title">{profilename}</h1>
          <p className="date-info">{location}</p>
          {/* <button className="profile-opret-btn">Opret profil</button> */}
        </div>
        <div className="profile-container2">
          <h1 className="profile-title2">Profiltesk</h1>
          <p className="profile-info">{description}</p>
        </div>
        <div className="instrumenter-container">
          <h2 className="profile-title2">Mine instrumenter</h2>
          <div className="profile-container3">
            <div className="instrumenter-container__genrer">
              <h2 className="profile-title2">{instrument}</h2>
              <a href="">{genre}</a>
              {/* <a href="">Symfonisk</a>
              <a href="">Barok</a>
              <a href="">Folkemusik</a> */}
            </div>
          </div>

          {/* <div className="profile-container3">
            <div className="instrumenter-container__genrer">
              <h2 className="profile-title2">Clarinet</h2>
              <a href="">Romantisk</a>
              <a href="">Symfonisk</a>
              <a href="">Barok</a>
              <a href="">Folkemusik</a>
            </div>
          </div> */}
        </div>
        <div className="profile-container4">
          <LatestPost />
        </div>
      </div>
    </>
  );
}
export default ProfileUser;
