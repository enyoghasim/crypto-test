import React, { ReactElement, Suspense, lazy } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../utility/history";
import { DEVELOPERS, HOME_REPOSITORIES } from "./constant";

const Home = lazy(() => import("../page/home"));
const NotFound = lazy(() => import("../page/notfound"));

const IndexRouter: React.FC = (): ReactElement => {
  return (
    <Router history={history}>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={HOME_REPOSITORIES} exact component={Home} />
          <Route path={DEVELOPERS} exact component={Home} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default IndexRouter;