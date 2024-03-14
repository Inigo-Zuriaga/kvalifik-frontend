import React, { useEffect, useState } from "react";
import "../../assets/styles.scss";
import axios from "axios";
import Modal from "react-modal";

function OpretOpslag() {
  Modal.setAppElement("#root");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instrument, setInstrument] = useState("");
  const [minimumLevel, setMinimumLevel] = useState("");
  const [genre, setGenre] = useState("");
  const [error, setError] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ([title, description, instrument, minimumLevel, genre].includes("")) {
      setError("All fields are required");
      return;
    }

    if (title.length < 5) {
      setError("Post Title name must have at least 5 characters");
      return;
    }

    if (description.length < 10) {
      setError("Description must have at least 10 characters");
      return;
    }

    if (Number(instrument) === 0) {
      setError("Please select the instrument");
      return;
    }

    if (Number(minimumLevel) < 1 || Number(minimumLevel) > 10) {
      setError("Minimum level must be a number between 1 and 10");
      return;
    }

    if (Number(genre) === 0) {
      setError("Please select the genre");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:3000/postbulletin", {
        title,
        description,
        instrument,
        minimumLevel,
        genre,
      });
      console.log(data);
      setModalIsOpen(true);
    } catch (error) {
      console.log(error);
    }

    // reset/clears the form
    setTitle("");
    setDescription("");
    setInstrument("");
    setGenre("");
    setMinimumLevel("");
  };

  // delete the error in the UI when it is fixed
  useEffect(() => {
    if (error) {
      setError("");
    }
  }, [title, description, minimumLevel, instrument, genre]);

  return (
    <div className="opretOpslag-container">
      <div className="opretOpslag-container2">
        <form onSubmit={handleSubmit}>
          <h1 className="opslag-title">Create post</h1>
          <input
            type="text"
            placeholder="Title"
            className="input-navn"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <h1 className="opslag-subtitle">Description</h1>
          <textarea
            className="input-navn2"
            placeholder="Write a short description of who you are looking for..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <h1 className="opslag-subtitle">Instrument</h1>
          <select
            className="selectmusicians"
            value={instrument}
            onChange={(e) => setInstrument(e.target.value)}
          >
            <option value="0">Select instrument</option>
            <option value="Cello">Cello</option>
            <option value="Violin">Violin</option>
            <option value="Viola">Viola</option>
            <option value="Trumpet">Trumpet</option>
            <option value="Piano">Piano</option>
            <option value="Serpent">Serpent</option>
          </select>
          <h1 className="opslag-subtitle">Experience</h1>
          <input
            type="number"
            className="niveau"
            placeholder="Years of experience."
            value={minimumLevel}
            onChange={(e) => setMinimumLevel(e.target.value)}
          ></input>
          <h1 className="opslag-subtitle">Genre</h1>
          <select
            className="selectmusicians"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
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
            <button className="opret-btn">Opret opslag</button>
          </div>
          <Modal isOpen={modalIsOpen} className="success-modal2">
            <h1>Your Post was created!</h1>
            <button className="btn-modal" onClick={() => setModalIsOpen(false)}>
              Close
            </button>
          </Modal>
        </form>
      </div>
    </div>
  );
}
export default OpretOpslag;
