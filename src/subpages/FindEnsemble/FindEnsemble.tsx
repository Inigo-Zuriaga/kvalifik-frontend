import { useEffect, useState } from "react";
import Filtre from "../../components/Filtre/FiltreEnsemble";
import "..//..//assets/styles.scss";
import Modal from "react-modal";
import axios from "axios";
import { NavLink } from "react-router-dom";
import EnsembleCard from "../../components/EnsembleCard/EnsembleCard";

export default function FindEnsemble() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [ensembles, setEnsembles] = useState([]);
  //   const [error, setError] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/ensemble`).then((data: any) => {
      console.log(data);

      setEnsembles(data.data);
      // debugger;
    });
  }, []);

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const data = await axios.get(`http://localhost:3000/ensemble`);
  //         setEnsembles(data.data);
  //       } catch (e) {
  //         setError("Something went wrong!");
  //       }
  //     })();
  //   }, []);

  return (
    <section className="findEnsemble-section">
      <div className="findEnsemble-headerdiv">
        <h2>Find Ensemble</h2>
        <NavLink className="banner-button" to="/OpretEnsemble">
          <img
            src="/src/assets/images/landing-page/musiker-icon.jpg"
            alt="musiker-icon"
          />
          Create Ensemble
        </NavLink>
        {/* <select className="select-instrument2">
          <option value="" disabled selected>
            Vælg instrument
          </option>
          <option value="Cello">Cello</option>
          <option value="Violin">Violin</option>
          <option value="Viola">Viola</option>
          <option value="Trumpet">Trumpet</option>
          <option value="Piano">Piano</option>
          <option value="Serpent">Serpent</option>
        </select> */}
      </div>
      <div className="findEnsemble-button">
        <button onClick={() => setModalIsOpen(true)}>Filtre</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <Filtre />
        </Modal>
      </div>

      {/* {error && <h3>{error}</h3>} */}
      {ensembles.length ? (
        <>
          {ensembles.map((ensemble) => (
            <EnsembleCard
              title={ensemble.ensembleName}
              location={ensemble.city}
              musicians={ensemble.musicians}
              description={ensemble.description}
              instrument={ensemble.genres}
              experience={ensemble.frequency}
            />
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}

      {/* <button>Se flere</button> */}
    </section>
  );
}
// function then(arg0: (data: any) => void) {
//   throw new Error("Function not implemented.");
// }
