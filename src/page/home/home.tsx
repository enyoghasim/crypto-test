import { useEffect } from "react";
import scrapeUrl from "../../utility/urlScrapper";
import Dropdown from "../../component/dropdown/dropdown";

const RepositoryList = ({ match }: any) => {
  useEffect(() => {
    scrapeUrl();
  }, []);
  return (
    <>
      <div>
        <Dropdown/>
      </div>
    </>
  );
};

export default RepositoryList;
