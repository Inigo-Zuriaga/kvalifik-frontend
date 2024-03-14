import axios from "axios"; //for fetching the data from backend
import { useEffect, useState } from "react";
import "..//..//assets/styles.scss";
import Modal from "react-modal";
import Filtre from "../../components/Filtre/FiltrePost";
import Post from "../../components/Post/Post";

export default function FindPost() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [posts, setPosts] = useState([]);
  //   const [error, setError] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/postbulletin`).then((data: any) => {
      console.log(data);

      setPosts(data.data);
      //debugger;
    });
  }, []);

  return (
    <section className="findMusiker-section">
      <div className="findMusiker-headerdiv">
        <h2>Find Post</h2>
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

      {posts.length ? (
        <>
          {posts.map((posts) => (
            <Post
              title={posts.title}
              location="Copenhagen"
              musicians={posts.genre}
              description={posts.description}
              instrument={posts.instrument}
              experience={posts.minimumLevel}
            />
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}

      {/* <button>See more</button> */}
    </section>
  );
}
