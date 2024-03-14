import { NavLink } from "react-router-dom";
import "../../assets/styles.scss";
import React, { useState } from 'react';
import Modal from 'react-modal';
import ContactPopUp from "../../components/ContactPopUp/ContactPopUp";


export default function Popexample() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
      <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <ContactPopUp />
        <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );

}