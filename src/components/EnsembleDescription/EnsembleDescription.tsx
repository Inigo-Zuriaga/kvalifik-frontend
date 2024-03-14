import { NavLink } from "react-router-dom";
import "..//..//assets/styles.scss";

export default function EnsembleDescription() {
  return (
    <section className="ensemble-description">
      <h2>Beskrivelse</h2>
      <p>
        Vi er en gruppe musikere i Århus-området der spiller al slags klassisk
        musik. Vi er all… Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        es.
      </p>
      <h2>Antal aktive musikere</h2>
      <p>10 - 24</p>
      <h2>Øvefrekvens</h2>
      <p>1 gang hver anden uge</p>
      <h2>Ensemblet spiller...</h2>
      <p>Kontinuerligt og projektbaseret</p>
      <div className="genrer-container">
        <h2>Genrer</h2>
        <div className="genrer-container__genrer">
          <a href="">Romantisk</a>
          <a href="">Symfonisk</a>
          <a href="">Barok</a>
          <a href="">Folkemusik</a>
        </div>
      </div>
      <h2>Kontaktperson</h2>
      <div className="person">
        <p>Susanne Nielsen</p>
        <a href="">View profile</a>
      </div>
      <button><NavLink className="latest-post__button" to="/OpretOpslag">
              Create new post
            </NavLink></button>
    </section>
  );
}
