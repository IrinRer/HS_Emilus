import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/home/catalog`} component={lazy(() => import(`./catalog`))} />
        <Route path={`${APP_PREFIX_PATH}/home/orders`} component={lazy(() => import(`./orders`))} />
        <Route path={`${APP_PREFIX_PATH}/home/customers`} component={lazy(() => import(`./customers`))} />
        <Route path={`${APP_PREFIX_PATH}/home/dashbroad`} component={lazy(() => import(`./dashbroad`))} />
        <Route path={`${APP_PREFIX_PATH}/home/banners`} component={lazy(() => import(`./banners`))} />
        <Route path={`${APP_PREFIX_PATH}/home/promoCodes`} component={lazy(() => import(`./promoCodes`))} />
        <Route path={`${APP_PREFIX_PATH}/home/offlinePoints`} component={lazy(() => import(`./offlinePoints`))} />
        <Route path={`${APP_PREFIX_PATH}/home/staff`} component={lazy(() => import(`./staff`))} />
        <Route path={`${APP_PREFIX_PATH}/home/mailing`} component={lazy(() => import(`./mailing`))} />
        <Route path={`${APP_PREFIX_PATH}/system/settings`} component={lazy(() => import(`./settings`))} />
        <Route path={`${APP_PREFIX_PATH}/system/mobileApplication`} component={lazy(() => import(`./mobileApplication`))} />
        <Route path={`${APP_PREFIX_PATH}/system/logs`} component={lazy(() => import(`./logs`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);