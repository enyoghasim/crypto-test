import Card from "../../component/card/bg-board-card/card";
import { useQuery } from "react-query";
import ListCardRepository from "../../component/card/sm-list-card-repository/card";
import ListCardDevelopers from "../../component/card/sm-list-card-developer/card";
import { useLocation } from "react-router";
import request from "../../api.service/axios.factory";
import { DEVELOPERS } from "../../routes/constant";
import "./home.css";

const Home = ({ match }: any) => {
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
  const { data, isLoading, isError, isSuccess }: any = useQuery("dev", func);
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
              // <ListCardDevelopers />
              data.map((item: any, index: any) => (
                <ListCardRepository {...item} key={index} />
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
