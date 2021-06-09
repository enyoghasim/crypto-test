import InputButton from "../button/button";
import "./card.css";

const Card = () => {
  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <nav className="left-flex">
            <InputButton customClass="active left" innerText="Repositories" />
            <InputButton customClass="right" innerText="Developers" />
          </nav>
          <div className="dropdown-links">
            <span>jdwiei</span>
            <span>jdwiei</span>
            <span>jdwiei</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
