import Card from "../../component/card/bg-board-card/card";
import ListCard from "../../component/card/sm-list-card/card";

import "./home.css";

const RepositoryList = ({ match }: any) => {
  return (
    <>
      <div className="trendings-page">
        <div className="card-wrapper">
          <Card match={match} >
            <ListCard/>
          </Card>
        </div>
      </div>
    </>
  );
};

export default RepositoryList;
