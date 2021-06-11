import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import Dropdown from "../../dropdown/dropdown";
import ListCardRepository from "../sm-list-card-repository/card";
import { connect } from "react-redux";
import { getEnums } from "../../../redux/thunk";
import { HOME_ROUTE, DEVELOPERS } from "../../../routes/constant";
import spokenLanguages from "../../../api.service/spoken_languages";
import request from "../../../api.service/axios.factory";
import "./card.css";

const Card = ({ match, fetchEnums, getAllEnums, children }: any) => {
  const useQueryParams = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQueryParams();
  const func = async () => {
    const { data } = await request(
      "GET",
      `${
        match.path.includes(DEVELOPERS)
          ? `/developers${
              match.params.language ? `/${match.params.language}` : ""
            }?${query.get("since") ? `&since=${query.get("since")}` : ""}${
              query.get("spoken_language_code")
                ? `&spoken_language_code=${query.get("spoken_language_code")}`
                : ""
            }`
          : `/repositories${
              match.params.language ? `/${match.params.language}` : ""
            }?${query.get("since") ? `&since=${query.get("since")}` : ""}${
              query.get("spoken_language_code")
                ? `&spoken_language_code=${query.get("spoken_language_code")}`
                : ""
            }`
      }`,
      ""
    );
    return data;
  };
  const { data, isLoading, isError, isSuccess }: any = useQuery("dev", func);
  useEffect(() => {
    const fetcher = async () => {
      await fetchEnums();
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
            {match?.path?.includes(DEVELOPERS) === false && (
              <span>
                <Dropdown
                  type="spoken-lang"
                  headerText="Spoken Language"
                  searchTitle="Select a spoken language"
                  inputPlaceholder="Filter spoken languages"
                  flag="spoken"
                  data={spokenLanguages}
                  proLang={match.params.language}
                  boldText={
                    spokenLanguages.filter(
                      (e) => e.urlParam === query.get("spoken_language")
                    )[0]?.name || "Any"
                  }
                  spokenLang={
                    query.get("spoken_language") !== null
                      ? query.get("spoken_language")
                      : "Any"
                  }
                  time={
                    query.get("since") !== null ? query.get("since") : "Any"
                  }
                />
              </span>
            )}

            <span>
              <Dropdown
                match={match}
                type="pro-lang"
                headerText="Select a language"
                searchTitle="Language"
                inputPlaceholder="Filter languages"
                data={getAllEnums?.allowedProgrammingLanguages}
                proLang={match.params.language}
                boldText={match.params.language ? match.params.language : "Any"}
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
                boldText={
                  query.get("since") !== null ? query.get("since") : "Any"
                }
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
          {isLoading ? (
            <div className="loading">
              Loading{" "}
              {`${
                match.path.includes(DEVELOPERS) ? "developers" : "repositories"
              }`}
            </div>
          ) : isError ? (
            <div className="error">
              Error Loading{" "}
              {`${
                match.path.includes(DEVELOPERS) ? "developers" : "repositories"
              }`}
            </div>
          ) : isSuccess ? (
            data.map((item: any, index: any) => {
              return <ListCardRepository {...item} key={index} />;
            })
          ) : (
            ""
          )}
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
