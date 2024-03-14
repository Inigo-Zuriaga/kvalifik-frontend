import axios from "axios"; //for fetching the data from backend
import { useEffect, useState } from "react";
import Musiker from "../../components/Musiker/Musiker";
import "..//..//assets/styles.scss";
import Modal from "react-modal";
import Filtre from "../../components/Filtre/FiltreMusician";
import { NavLink } from "react-router-dom";

export default function FindMusiker() {
  const [musiker, setMusiker] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("myemail");

  function handleClick() {
    setName(name);
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  return (
    <>
      <section className="findMusiker-section">
        <div className="findMusiker-headerdiv">
          <h2>Find Musician</h2>
          {/* <p>{email}</p> */}
          {/* <select className="select-instrument">
          <option value="" disabled selected>
            Select instrument
          </option>
          <option value="Cello">Cello</option>
          <option value="Violin">Violin</option>
          <option value="Viola">Viola</option>
          <option value="Trumpet">Trumpet</option>
          <option value="Piano">Piano</option>
          <option value="Serpent">Serpent</option>
        </select> */}
        </div>
        <div className="findMusiker-button">
          <button onClick={() => setModalIsOpen(true)}>Filtre</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
          >
            <Filtre />
          </Modal>
        </div>

        {musiker.length ? (
          <>
            {musiker.map((musiker, index) => (
              <NavLink to={"/Profil" + index}>
                <Musiker
                  name={musiker.name + " " + musiker.surname}
                  location={musiker.location}
                  instrument={musiker.instrument}
                  experience={musiker.experience}
                  genre={musiker.genre}
                  id={musiker._id}
                />
              </NavLink>
            ))}
          </>
        ) : (
          <div>Loading...</div>
        )}

        {/* <button>See more</button> */}
      </section>
    </>
  );
}
