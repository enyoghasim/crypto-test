import { Link } from "react-router-dom";
import Dropdown from "../dropdown/dropdown";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getEnums } from "../../redux/thunk";
import { HOME_ROUTE, DEVELOPERS } from "../../routes/constant";
import spokenLanguages from "./spoken_languages";

import "./card.css";

const Card = ({ match, fetchEnums, getAllEnums }: any) => {
  useEffect(() => {
    const fetcher = async () => {
      await fetchEnums();
      console.log(match);
    };
    fetcher();
  }, []);
  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <nav className="left-flex">
            <Link
              to={HOME_ROUTE}
              className={`${
                match.path.includes(`${HOME_ROUTE}`)
                  ? "active left link"
                  : "left link"
              }`}
            >
              Repositories
            </Link>
            <Link
              to={DEVELOPERS}
              className={`${
                match.path === DEVELOPERS ? "active right link" : "right link"
              }`}
            >
              Developers
            </Link>
          </nav>
          <div className="dropdown-links">
            <span>
              <Dropdown
                headerText="Spoken Language"
                searchTitle="Select a spoken language"
                inputPlaceholder="Filter spoken languages"
                flag="spoken"
                data={spokenLanguages}
              />
            </span>
            <span>
              <Dropdown
                headerText="Select a language"
                searchTitle="Language"
                inputPlaceholder="Filter languages"
                data={getAllEnums?.allowedProgrammingLanguages}
              />
            </span>
            <span>
              <Dropdown
                headerText="Date range"
                searchTitle="Adjust time span"
                inputPlaceholder="hi"
                data={getAllEnums?.allowedDates}
                withInput={false}
              />
            </span>
          </div>
        </div>
        <div className="mini-cards"></div>
      </div>
    </>
  );
};
const mapStateToProps = (state: any) => {
  return {
    getAllEnums: state.enumReducer.enums
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchEnums: () => dispatch(getEnums())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
