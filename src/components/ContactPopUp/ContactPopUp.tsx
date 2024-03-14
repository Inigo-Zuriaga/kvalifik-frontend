import { NavLink } from "react-router-dom";
import "../../assets/styles.scss";
export default function ContactPopUp(){
    return(
        <div className="contact-popup">
            <h1 className="h1">Kontakt Susanne</h1>
            <a className="number-btn" href="+45 12 34 56 78">+45 12 34 56 78</a>
            <a className="email-btn" href="susanne_n@mail.dk">susanne_n@mail.dk</a>
            <button className="tilbage-btn">Tilbage</button>
        </div>
    )
}