import { Navigate, Route, Routes } from "react-router-dom";
import "./assets/styles.scss";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar";
import Home from "./subpages/Home/Home";
import Signin from "./subpages/Signin/Signin";
import Profile from "./components/Profile/Profile";
import ProfileUser from "./components/Profile/ProfileUser";
import OpretEnsemble from "./subpages/OpretEnsemble/OpretEnsemble";
import Ensemble from "./subpages/Ensemble/Ensemble";
import OpretProfil from "./subpages/OpretProfil/OpretProfil";
import Login from "./subpages/Login/Login";
import FindEnsemble from "./subpages/FindEnsemble/FindEnsemble";
import FindMusiker from "./subpages/FindMusiker/FindMusiker";
import OpretOpslag from "./subpages/OpretOpslag/OpretOpslag";
import { ProtectedRoute } from "./components/Navbar/ProtectedRoute";
import { useEffect, useState } from "react";
import FindPost from "./subpages/FindPost/FindPost";
import axios from "axios";

//https://github.com/Marko2353/kvalifik

function App() {
  const [tokenTrue, setTokenTrue] = useState(localStorage.getItem("token"));

  if (tokenTrue) {
    // El token exist
    console.log("hi");
    <Navigate to={"/"} />;
  }
  if (tokenTrue == "undefined" || !tokenTrue) {
    // El token no exist
    console.log("bye");
    localStorage.removeItem("token");
  }

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

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ensemble" element={<Ensemble />} />
        <Route path="/OpretEnsemble" element={<OpretEnsemble />} />
        <Route path="/Signing" element={<Signin />} />
        <Route path="/Bruger" element={<OpretProfil />} />
        <Route
          path="/Login"
          element={
            //<ProtectedRoute token={tokenTrue}>
            <Login />
            //</ProtectedRoute>
          }
        />

        {musiker.length ? (
          <>
            {musiker.map((musiker, index) => (
              <Route path={"/Profil" + index} element={<Profile />} />
            ))}
          </>
        ) : (
          <Route>Loading...</Route>
        )}
        <Route path="/ProfilUser" element={<ProfileUser />} />

        <Route path="/FindEnsemble" element={<FindEnsemble />} />
        <Route path="/FindMusiker" element={<FindMusiker />} />
        <Route path="/FindPost" element={<FindPost />} />
        <Route path="/OpretOpslag" element={<OpretOpslag />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
