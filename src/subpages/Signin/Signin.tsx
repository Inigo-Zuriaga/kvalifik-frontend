import { useEffect, useState } from "react";
import "../../assets/styles.scss";
import Modal from "react-modal";
import axios from "axios";

function Signin() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [surname, setSurname] = useState("");
  // const [password, setPassword] = useState("");

  Modal.setAppElement("#root"); // this tells the Modal to ignore the root element of the page when the modal is opened

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [instrument, setInstrument] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [formErrors, setFormErrors] = useState<string>();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const variableToSend = false;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      [
        name,
        email,
        surname,
        password,
        location,
        instrument,
        genre,
        experience,
        description,
      ].includes("")
    ) {
      setFormErrors("All fields are required");
      return;
    }

    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(String(email).toLowerCase())) {
      setFormErrors("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setFormErrors("Password must contain at least 6 characters");
      return;
    }

    //check if the email already exists in the database
    let variableToSend = false;
    try {
      const { data: response } = await axios.get("http://localhost:3000/info");
      console.log(response);
      response.map((user: any) => {
        if (user.email === email) {
          variableToSend = true;
        }
      });
      // if the email already exists in the database
      if (variableToSend) {
        setFormErrors(
          "Email is already in use. Please use a different email or log in into your existing account."
        );
      } else {
        // the input is valid so it tries to post, console logs the data, deletes the errors
        try {
          const { data: response } = await axios.post(
            "http://localhost:3000/register",
            {
              name,
              email,
              surname,
              password,
              location,
              instrument,
              genre,
              experience,
              description,
            }
          );
          console.log(response);
          setModalIsOpen(true);
          setTimeout(() => {
            window.location.href = "/login";
          }, 4000);
        } catch (error) {
          console.log(error);
          setFormErrors("An error occurred while registering the user");
        }
      }
    } catch (error) {
      console.log(error);
      setFormErrors(
        "An error occurred while checking if the email exists in the database"
      );
    }

    // reset/clears the form
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
    setLocation("");
    setInstrument("");
    setExperience("");
    setGenre("");
    setDescription("");
  };

  // to delete errors in the UI after submit
  useEffect(() => {
    if (
      formErrors &&
      [
        name,
        surname,
        email,
        password,
        location,
        instrument,
        experience,
        genre,
        description,
      ].every((field) => field !== "")
    ) {
      setFormErrors("");
    }
  }, [
    name,
    surname,
    email,
    password,
    location,
    instrument,
    experience,
    genre,
    description,
  ]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="container2">
          <h1 className="title">Sign Up</h1>
          <div className="namesur">
            <input
              type="text"
              placeholder="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="name-sign"
            />
            <input
              type="text"
              placeholder="Last name"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="name-sign"
            />
          </div>
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-sign"
          />
          <div className="namesur">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="name-sign"
            />
            <input
              type="number"
              placeholder="Experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="name-sign"
            />
          </div>
          <div className="namesur">
            <input
              type="text"
              placeholder="Instrument"
              value={instrument}
              onChange={(e) => setInstrument(e.target.value)}
              className="name-sign"
            />
            <input
              type="text"
              placeholder="Genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="name-sign"
            />
          </div>
          <textarea
            placeholder="Write a little bit about yourself."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="email-sign desc"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="email-sign"
          />
          {formErrors && <p className="form-error">{formErrors}</p>}{" "}
          <div className="div-opret">
            <button type="submit" className="opret-btn">
              Sign Up
            </button>
          </div>
          <Modal isOpen={modalIsOpen} className="success-modal">
            <h1>You have been successfully registered!</h1>
            <p>You will be redirected to the login page in a few seconds...</p>
          </Modal>
        </div>
      </form>
    </div>
  );
}
export default Signin;
