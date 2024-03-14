import { useEffect, useState } from "react";
import sofie from "../../assets/images/people/sofie.jpg";
import "..//..//assets/styles.scss";
import LatestPost from "../../components/LatestPost/LatestPost";
import axios from "axios";

const Profile = () => {
  const [musiker, setMusiker] = useState([]);

  useEffect(() => {
    try {
      axios({
        method: "GET",
        url: "http://localhost:3000/info/",
      }).then((response) => {
        console.log(response.data);
        setMusiker(response.data);
        console.log(musiker);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  function getCurrentURL() {
    return window.location.href.slice(-1).toString();
  }

  const testUrl = getCurrentURL();

  console.log(testUrl);

  const profileName = musiker.map((musiker) => {
    return musiker.name;
  });
  const profileSurname = musiker.map((musiker) => {
    return musiker.surname;
  });
  const profilLocation = musiker.map((musiker) => {
    return musiker.location;
  });
  const profilDescription = musiker.map((musiker) => {
    return musiker.description;
  });
  const profilInstrument = musiker.map((musiker) => {
    return musiker.instrument;
  });
  const profilGenre = musiker.map((musiker) => {
    return musiker.genre;
  });

  console.log(profileName[testUrl]);

  return (
    <>
      {/* {musiker.length ? (
        <>*/}
      {/* {musiker.map((musiker) => ( */}
      <div className="full-container">
        <div className="profile-container">
          <img
            src={sofie}
            alt=""
            className="profile-photo-img"
            height="71"
            width="71"
          />
          <h1 className="profile-title">
            {profileName[testUrl] + " " + profileSurname[testUrl]}
          </h1>
          <p className="date-info">{profilLocation[testUrl]}</p>
          {/* <button className="profile-opret-btn">Opret profil</button> */}
        </div>
        <div className="profile-container2">
          <h1 className="profile-title2">Profiltesk</h1>
          <p className="profile-info">{profilDescription[testUrl]}</p>
        </div>
        <div className="instrumenter-container">
          <h2 className="profile-title2">Mine instrumenter</h2>
          <div className="profile-container3">
            <div className="instrumenter-container__genrer">
              <h2 className="profile-title2">{profilInstrument[testUrl]}</h2>
              <a href="">{profilGenre[testUrl]}</a>
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
      {/* ))} */}
      {/*</>
      ) : (
        <div>Loading...</div>
      )} */}
    </>
  );
};
export default Profile;
