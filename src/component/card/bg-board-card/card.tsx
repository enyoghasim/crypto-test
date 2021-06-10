import { useEffect, useState, Children } from "react";
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

  // const [programmingLanguage, setProgrammingLanguage] = useState(
  //   filterProgramingLanguage?.length ? filterProgramingLanguage[0] : "Any"
  // );
  // const [since, setSince] = useState(
  //   filterSince?.length ? filterSince[0] : "Any"
  // );

  // const [spokenLanguage, setSpokenLanguage] = useState(
  //   filterLanguage?.length ? filterLanguage[0] : "Any"
  // );

  useEffect(() => {
    const fetcher = async () => {
      await fetchEnums();
      // const filterProgramingLanguage =
      //   getAllEnums?.allowedProgrammingLanguages?.filter((pv: any) =>
      //     pv.toLowerCase().includes(match?.params?.language?.toLowerCase())
      //   );
      const filterSince = getAllEnums?.allowedDates?.filter((pv: any) =>
        pv.toLowerCase().includes(query.get("since")?.toLowerCase())
      );

      // const filterLanguage = spokenLanguages?.filter((pv: any) =>
      //   pv?.length
      //     ? pv
      //         .toLowerCase()
      //         .includes(query.get("spoken_language_code")?.toLowerCase())
      //     : ""
      // );
      console.log(filterSince);

      // console.log(programmingLanguage, since, spokenLanguage);
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
