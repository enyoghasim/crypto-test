import { useEffect } from "react";
import Card from "../../component/card/card";
import scrapeUrl from "../../utility/urlScrapper";
import "./home.css";
import Dropdown from "../../component/dropdown/dropdown";

const RepositoryList = ({ match }: any) => {
  useEffect(() => {
    scrapeUrl();
  }, []);
  return (
    <>
      <div className="trendings-page">
        <Dropdown />
        <div className="card-wrapper">
          <Card match={match} />
        </div>
      </div>
    </>
  );
};

export default RepositoryList;
