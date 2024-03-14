import React, { Component } from "react";
import "../../assets/styles.scss";
import qmark1 from "../../assets/images/quotation_marks1.png";

const Card = ({ quote, photo, name, rol }: any) => {
  return (
    <div className="card">
      <img className="qmark1" src={qmark1} height="53" width="53"></img>
      <p className="quote-text">{quote}</p>
      <div className="qmark22">
        <img className="qmark2" src={qmark1} height="53" width="53"></img>
      </div>

      <div className="card-photo">
        <img
          className="card-photo-img"
          src={photo}
          height="45"
          width="43"
        ></img>
      </div>
      <p className="card-name-text">{name}</p>
      <p className="card-rol">{rol}</p>
    </div>
  );
};
export default Card;
