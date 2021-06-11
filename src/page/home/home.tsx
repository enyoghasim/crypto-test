import Card from "../../component/card/bg-board-card/card";
import "./home.css";
const Home = ({ match }: any) => {
  return (
    <>
      <div className="trendings-page">
        <div className="card-wrapper">
          <Card match={match}></Card>
        </div>
      </div>
    </>
  );
};

export default Home;
