import React, { useEffect, useState } from "react";
import "../../assets/styles.scss";
import axios from "axios";
import Modal from "react-modal";

function OpretEnsemble() {
  Modal.setAppElement("#root");

  const [ensembleName, setEnsembleName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [musicians, setMusicians] = useState("");
  const [frequency, setFrequency] = useState("");
  const [genres, setGenres] = useState("");
  const [error, setError] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // validation + connected it to the database so it all works now :)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      [ensembleName, description, city, musicians, frequency, genres].includes(
        ""
      )
    ) {
      setError("All fields are required");
      return;
    }

    if (ensembleName.length < 5) {
      setError("Ensemble name must have at least 5 characters");
      return;
    }

    if (description.length < 10) {
      setError("Description must have at least 10 characters");
      return;
    }

    if (Number(musicians) === 0) {
      setError("Please select the number of musicians");
      return;
    }

    if (Number(frequency) === 0) {
      setError("Please select the frequency");
      return;
    }

    if (Number(genres) === 0) {
      setError("Please select the genre");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:3000/ensemble", {
        ensembleName,
        description,
        city,
        musicians,
        frequency,
        genres,
      });
      console.log(data);
      setModalIsOpen(true);
    } catch (error) {
      console.log(error);
    }

    // reset/clears the form
    setEnsembleName("");
    setDescription("");
    setCity("");
    setMusicians("");
    setFrequency("");
    setGenres("");
  };

  // delete the error in the UI when it is fixed
  useEffect(() => {
    if (error) {
      setError("");
    }
  }, [ensembleName, description, city, musicians, frequency, genres]);

  return (
    <div className="opretEnsemble-container">
      <div className="opretEnsemble-container2">
        <form onSubmit={handleSubmit}>
          <h2 className="ensemble-title">Create ensemble</h2>
          <input
            type="text"
            placeholder="Ensemble name"
            className="input-navn"
            value={ensembleName}
            onChange={(e) => setEnsembleName(e.target.value)}
          />
          {/* <button className="upload-photo-btn">Upload coverbillede</button> */}
          <h3 className="ensemble-subtitle">Description</h3>
          <textarea
            className="input-navn2"
            placeholder="Write a description."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <h3 className="ensemble-subtitle">Location</h3>

          <input
            type="text"
            placeholder="By"
            className="omarade2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <h3 className="ensemble-subtitle">Number of musicians</h3>
          <select
            className="selectmusicians"
            value={musicians}
            onChange={(e) => setMusicians(e.target.value)}
          >
            <option value="0">Select number of musicians</option>
            <option value="1-4">1-4 musicians</option>
            <option value="5-9">5-9 musicians</option>
            <option value="10-24">10-24 musicians</option>
            <option value="25-29">25-49 musicians</option>
            <option value="50">More then a 50 musicians</option>
          </select>
          <h3 className="ensemble-subtitle">Period</h3>
          <select
            className="selectmusicians"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option value="0">Select period</option>
            <option value="fulltime">Fulltime</option>
            <option value="+1week">Several times a week</option>
            <option value="2-2week">Every other week</option>
            <option value="1month">Once a month</option>
            <option value="2months">Every other month</option>
          </select>
          <h3 className="ensemble-subtitle">Genre</h3>
          <select
            className="selectmusicians"
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
          >
            <option value="0">Select genre</option>
            <option value="Barok">Barok</option>
            <option value="Folkemusik">Folkemusik</option>
            <option value="Romantisk">Romantisk</option>
            <option value="Symfonisk">Symfonisk</option>
            <option value="Senromantisk">Senromantisk</option>
          </select>
          <p className="form-error2">{error}</p>
          <div className="div-opret">
            <button className="opret-btn">Create ensemble</button>
          </div>
          <Modal isOpen={modalIsOpen} className="success-modal2">
            <h1>Your Ensemble was created!</h1>
            <button className="btn-modal" onClick={() => setModalIsOpen(false)}>
              Close
            </button>
          </Modal>
        </form>
      </div>
    </div>
  );
}
export default OpretEnsemble;
