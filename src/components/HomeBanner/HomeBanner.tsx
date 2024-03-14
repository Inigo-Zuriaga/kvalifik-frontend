import { NavLink } from "react-router-dom";
import "..//..//assets/styles.scss";

export default function HomeBanner({ title, banner }: any) {
  return (
    <section className="banner">
      <img src={banner} alt="banner" />
      <h1>{title}</h1>
    </section>
  );
}
