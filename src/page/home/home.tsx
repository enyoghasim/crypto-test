import { useEffect } from "react";
import Card from "../../component/card/card";
import scrapeUrl from "../../utility/urlScrapper";
// import Dropdown from "../../component/dropdown/dropdown";
import "./home.css";

const RepositoryList = ({ match }: any) => {
  useEffect(() => {
    scrapeUrl();
  }, []);
  return (
    <>
      <div className="trendings-page">
        <div className="card-wrapper">
          <Card match={match} />
        </div>
      </div>
    </>
  );
};

export default RepositoryList;
