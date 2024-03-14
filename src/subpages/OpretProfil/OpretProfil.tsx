import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "..//..//assets/styles.scss";

function OpretProfil() {
  // const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  // const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if ([, /*picture */ description, location, phone /*status*/].includes("")) {
      console.log("All fields are required");
    }

    try {
      const { data } = await axios.post("http://localhost:3000/register", {
        /*picture,*/
        description,
        location,
        phone,
        /*status,*/
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="rediger-profil">
      <NavLink to="/">Back</NavLink>
      <h2>Register Profile</h2>
      <div className="rediger-profil__name">
        <h3>Name</h3>
        <div>
          <input placeholder="Susanne" type="text" />
          <input placeholder="Nielsen" type="text" />
        </div>
      </div>
      <div className="rediger-profil__profile">
        <h3>Profile Picture</h3>
        <img src="/src/assets/images/profil.jpg" alt="Avatar" />
        <button>Upload image</button>
      </div>
      <div className="rediger-profil__description">
        <h3>Description</h3>
        <textarea
          name="description"
          id="profile-description"
          placeholder="If necessary, write briefly about your musical experience or what you are looking for..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="rediger-profil__address">
        <h3>Location</h3>
        <div>
          <input
            type="number"
            name="postnr"
            id="postnr"
            placeholder="Postnr."
          />
          <input
            type="text"
            placeholder="By"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>
      <div className="rediger-profil__contact">
        <h3>Contact information</h3>
        <p>
          Your email address and mobile number are only visible to others if you
          have marked on your profile that you are looking for someone to play
          with or if you have an active posting.
        </p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="susanne_n@mail.dk"
        />
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="+45 00 00 00"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="rediger-profil__status">
        <h3>Status</h3>
        <p>
          Are you currently looking for someone to play with? If you choose 'not
          looking' your profile will not appear when other musicians do a
          search.
        </p>
        <div>
          <button>Looking</button>
          <button>Not Looking</button>
        </div>
      </div>

      <button className="gem" onClick={handleSubmit}>
        Save profil
      </button>
    </section>
  );
}
export default OpretProfil;
