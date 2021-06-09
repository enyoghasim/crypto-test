import { Link } from "react-router-dom";
import Dropdown from "../dropdown/dropdown";
import { HOME_ROUTE, DEVELOPERS } from "../../routes/constant";
import "./card.css";

const Card = ({ match }: any) => {
  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <nav className="left-flex">
            <Link
              to={HOME_ROUTE}
              className={`${
                match.path === "/" ? "active left link" : "left link"
              }`}
            >
              Repositories
            </Link>
            <Link
              to={DEVELOPERS}
              className={`${
                match.path.includes(DEVELOPERS)
                  ? "active right link"
                  : "right link"
              }`}
            >
              Developers
            </Link>
          </nav>
          <div className="dropdown-links">
            <span><Dropdown/></span>
            <span><Dropdown/></span>
            <span><Dropdown/></span>
          </div>
        </div>
        <div className="mini-cards"></div>
      </div>
    </>
  );
};

export default Card;
