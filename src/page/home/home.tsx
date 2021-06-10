import Card from "../../component/card/card";
import "./home.css";

const RepositoryList = ({ match }: any) => {
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
