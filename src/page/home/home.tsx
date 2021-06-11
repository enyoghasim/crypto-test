import Card from "../../component/card/bg-board-card/card";
import ListCardRepository from "../../component/card/sm-list-card-repository/card";

import "./home.css";

const RepositoryList = ({ match }: any) => {
  return (
    <>
      <div className="trendings-page">
        <div className="card-wrapper">
          <Card match={match} >
            <ListCardRepository/>
          </Card>
        </div>
      </div>
    </>
  );
};

export default RepositoryList;
