import Card from "../../component/card/bg-board-card/card";
import { useQuery, useQueryClient } from "react-query";
import ListCardRepository from "../../component/card/sm-list-card-repository/card";
import { useLocation } from "react-router";
import request from "../../api.service/axios.factory";
import { DEVELOPERS } from "../../routes/constant";
import "./home.css";
import { useEffect } from "react";
import ListCardDevelopers from "../../component/card/sm-list-card-developer/card";

const Home = ({ match }: any) => {
  const queryCli = useQueryClient();
  const useQueryParams = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQueryParams();
  const apiFunction = async () => {
    const { data } = await request(
      "GET",
      `${
        match.path.includes(DEVELOPERS)
          ? `/developers${
              match?.params?.language ? `/${match?.params?.language}` : ""
            }?${query.get("since") ? `&since=${query.get("since")}` : ""}${
              query.get("spoken_language_code")
                ? `&spoken_language_code=${query.get("spoken_language_code")}`
                : ""
            }`
          : `/repositories${
              match?.params?.language ? `/${match?.params?.language}` : ""
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
  const since = query.get("since");
  const lang = query.get("spoken_language_code");
  const { data, isLoading, isError, isSuccess }: any = useQuery(
    "dev",
    apiFunction
  );

  useEffect(() => {
    console.log("hi");
    // queryCli.invalidateQueries("dev");
    try {
      const func = async () => {
        // const data = await apiFunction();
        const { data } = await request(
          "GET",
          `${
            match.path.includes(DEVELOPERS)
              ? `/developers${match?.url ? `/${match?.url}` : ""}?${
                  query.get("since") ? `&since=${query.get("since")}` : ""
                }${
                  query.get("spoken_language_code")
                    ? `&spoken_language_code=${query.get(
                        "spoken_language_code"
                      )}`
                    : ""
                }`
              : `/repositories${match?.url ? `/${match?.url}` : ""}?${
                  query.get("since") ? `&since=${query.get("since")}` : ""
                }${
                  query.get("spoken_language_code")
                    ? `&spoken_language_code=${query.get(
                        "spoken_language_code"
                      )}`
                    : ""
                }`
          }`,
          ""
        );
        queryCli.setQueryData(["dev"], data);
        console.log(data);
        func();
      };
    } catch (err) {
      return;
    }
    // queryCli.setQueryData()
  }, [match.url, lang, since]);

  return (
    <>
      <div className="trendings-page">
        <div className="card-wrapper">
          <Card {...match}>
            {isLoading && (
              <div className="loading">
                <section className="on-success-is-loading-state">
                  Loading
                </section>
              </div>
            )}

            {isSuccess &&
              !match.path.includes(DEVELOPERS) &&
              data?.map((item: any, index: any) => (
                <ListCardRepository {...item} key={index} />
              ))}

            {isSuccess &&
              match.path.includes(DEVELOPERS) &&
              data?.map((item: any, index: any) => (
                <ListCardDevelopers {...item} key={index} />
              ))}

            {isError && (
              <div className="error">
                <div className="error-state">
                  server error trying to load data
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
