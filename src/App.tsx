import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import IndexRouter from "./routes/index";
import { useQuery } from "react-query";
import "./App.css";
import request from "./api.service/axios.factory";

const App = (props: any) => {
  let location = useLocation();
  const queryData = useQuery(
    "data",
    async () => await request("GET", "/openapi.json", "")
  );
  useEffect(() => {}, [location]);
  return (
    <div className="App">
      <div className="top-barner">
        <h1 className="trends-header">Trending</h1>
        <p className="trends-text">
          See what the GitHub community is most excited about today.
        </p>
      </div>
      <IndexRouter {...(queryData as any)} />
    </div>
  );
};

export default App;
