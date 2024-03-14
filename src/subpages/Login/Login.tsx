import { useEffect, useState } from "react";
import "../../assets/styles.scss";
import axios from "axios";
const url = "http://localhost:3000/info";
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const h3Elements = document.getElementsByTagName("h3");

    if ([email, password].includes("")) {
      console.log("All fields are required");
      h3Elements[0].classList.add("h3-error");
      h3Elements[0].innerHTML = "All fields are required";
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      console.log(email + " " + password);
      console.log(data.token);
      localStorage.setItem("token", data.token);

      if (!data.token) {
        h3Elements[0].classList.add("h3-error");
        h3Elements[0].innerHTML = "User does not exist or wrong email/password";
      } else navigate("/ProfilUser");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(url);
  //     const newData = await response.json();
  //     console.log(newData);
  //   };

  //   fetchData();
  // },[]);

  /*const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };*/
  return (
    <div className="container">
      <div className="container2">
        <h1 className="title">Log In</h1>
        <h3 className="title">Introduce your email and password</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="E-mail"
            className="email-sign"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="email-sign"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button className="opret-btn">Log In</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
function useGlobalContext(): { accounts: any; setaccounts: any } {
  throw new Error("Function not implemented.");
}
