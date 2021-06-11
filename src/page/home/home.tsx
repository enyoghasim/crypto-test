import Card from "../../component/card/bg-board-card/card";
import ListCardRepository from "../../component/card/sm-list-card-repository/card";

import "./home.css";

const Home = ({ match }: any) => {
  return (
    <>
      <div className="trendings-page">
        <div className="card-wrapper">
          <Card match={match}>
            {[1, 2, 3, 4, 5 ,6].map((item) => (
              <ListCardRepository key={item} />
            ))}
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
