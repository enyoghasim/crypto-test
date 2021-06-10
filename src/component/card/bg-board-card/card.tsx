import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "../../dropdown/dropdown";
import { connect } from "react-redux";
import { getEnums } from "../../../redux/thunk";
import { HOME_ROUTE, DEVELOPERS } from "../../../routes/constant";
import spokenLanguages from "../../../api.service/spoken_languages";

import "./card.css";

const Card = ({ match, fetchEnums, getAllEnums, children }: any) => {
  // get enums language and date

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  useEffect(() => {
    const fetcher = async () => {
      await fetchEnums();
    };
    fetcher();
  }, []);

  //
  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <nav className="left-flex">
            <Link
              to={HOME_ROUTE}
              className={`${
                !match.path.includes(DEVELOPERS)
                  ? "active left link"
                  : "left link"
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
            <span>
              <Dropdown
                type="spoken-lang"
                headerText="Spoken Language"
                searchTitle="Select a spoken language"
                inputPlaceholder="Filter spoken languages"
                flag="spoken"
                data={spokenLanguages}
                proLang={match.params.language}
                spokenLang={
                  query.get("spoken_language") !== null
                    ? query.get("spoken_language")
                    : "Any"
                }
                time={query.get("since") !== null ? query.get("since") : "Any"}
              />
            </span>
            <span>
              <Dropdown
                match={match}
                type="pro-lang"
                headerText="Select a language"
                searchTitle="Language"
                inputPlaceholder="Filter languages"
                data={getAllEnums?.allowedProgrammingLanguages}
                proLang={match.params.language}
                spokenLang={
                  query.get("spoken_language") !== null
                    ? query.get("spoken_language")
                    : "Any"
                }
                time={query.get("since") !== null ? query.get("since") : "Any"}
              />
            </span>
            <span>
              <Dropdown
                match={match}
                type="date"
                headerText="Date range"
                searchTitle="Adjust time span"
                inputPlaceholder="hi"
                data={getAllEnums?.allowedDates}
                withInput={false}
                proLang={match.params.language}
                spokenLang={
                  query.get("spoken_language") !== null
                    ? query.get("spoken_language")
                    : "Any"
                }
                time={query.get("since") !== null ? query.get("since") : "Any"}
              />
            </span>
          </div>
        </div>
        <main className="card-holder-body-wrapper">
          {/* childern for other list card component */}
          {children}
        </main>
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
