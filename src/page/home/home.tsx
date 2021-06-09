import { useEffect } from "react";
import scrapeUrl from "../../utility/urlScrapper";

const RepositoryList = ({ match }: any) => {
  useEffect(() => {
    scrapeUrl();
  }, []);
  return (
    <>
      <div></div>
    </>
  );
};

export default RepositoryList;
