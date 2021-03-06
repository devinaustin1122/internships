import "./Explore.css";
import InternshipList from "../internship/InternshipList";
import StyledTextbox from "../../styles/StyledTexbox";

const Explore = () => {
  return (
    <main className="explore">
      <div className="explore__content">
        <header className="explore__header">
          <StyledTextbox placeholder="Add Filters" />
        </header>
        <section className="explore__feed">
          <InternshipList />
        </section>
      </div>
    </main>
  );
};

export default Explore;
