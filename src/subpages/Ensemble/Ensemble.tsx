import EnsembleBanner from "../../components/EnsembleBanner/EnsembleBanner";
import EnsembleDescription from "../../components/EnsembleDescription/EnsembleDescription";
import "..//..//assets/styles.scss";

export default function Ensemble() {
  return (
    <section className="ensemble-section">
      <EnsembleBanner />
      <EnsembleDescription />
    </section>
  );
}
