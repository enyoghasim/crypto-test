import React, { ReactElement, Suspense, lazy } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../utility/history";
import { HOME_ROUTE, DEVELOPERS } from "./constant";

const Home = lazy(() => import("../page/home/home"));
const NotFound = lazy(() => import("../page/notfound/notfound"));

const IndexRouter: React.FC = (props): ReactElement => {
  return (
    <Router history={history}>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route
            path={HOME_ROUTE}
            exact
            component={(props: any) => <Home {...props} />}
          />

          <Route
            path={DEVELOPERS}
            exact
            component={(props: any) => <Home {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default IndexRouter;
