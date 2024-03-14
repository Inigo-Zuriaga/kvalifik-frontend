import "../../assets/styles.scss";

export default function Filtre() {
  return (
    <div className="filtre-popup">
      <div>
        <h1 className="h1">Filtre</h1>
        <button className="nustil-btn">Reset filtre</button>
      </div>

      <div className="line"></div>

      <h3>Location</h3>
      <input placeholder="By" type="text" className="by-input"></input>

      <div className="line"></div>

      <h3>Genre</h3>
      <select className="select-genre">
        <option value="Select genre">Select genre</option>
        <option value="Barok">Barok</option>
        <option value="Folkemusik">Folkemusik</option>
        <option value="Romantisk">Romantisk</option>
        <option value="Symfonisk">Symfonisk</option>
        <option value="Senromantisk">Senromantisk</option>
      </select>

      <div className="line"></div>

      <button className="resultater-btn">See results</button>
    </div>
  );
}
