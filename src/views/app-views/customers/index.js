import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";

const Customers = ({ match }) => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/listClients`} />
      <Route
        path={`${match.url}/listClients`}
        component={lazy(() => import(`./listClients`))}
      />
      <Route
        path={`${match.url}/groupsClients`}
        component={lazy(() => import(`./groupsClients`))}
      />
    </Switch>
  </Suspense>
);

export default Customers;
