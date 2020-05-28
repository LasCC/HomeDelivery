import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.css";
import "circular-std";
import "./App.scss";
import ROUTE from "./Routes";
import Loader from "./components/Loader";
import LoginContext from "../src/contexts/LoginContext";
import PublicRoute from "./specialroutes/PublicRoute"; // si tu n'est pas loggé
import ProtectedClientRoute from "./specialroutes/ProtectedClientRoute"; // si tu es loggé en tant que client
import ProtectedHelperRoute from "./specialroutes/ProtectedHelperRoute"; // si tu es loggé en tant que helper
import NotificationWrapper from "./components/NotificationWrapper";
const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const RegisterClient = lazy(() => import("./pages/Client/Register-Client"));
const RegisterHelper = lazy(() => import("./pages/Helper/Register-Helper"));
const ConfirmRegistration = lazy(() => import("./pages/Confirm-Registration"));
const Login = lazy(() => import("./pages/Login"));
const CheckoutClient = lazy(() => import("./pages/Client/Checkout-Client"));
const CreateAnnonce = lazy(() => import("./pages/Client/Annonce-Client"));
const ConfirmAnnonce = lazy(() => import("./pages/Client/Confirm-Annonce"));
const ShippingAnnonce = lazy(() => import("./pages/Client/Shipping-Annonce"));
const Dev = lazy(() => import("./pages/Helper/Dev"));
const DashboardClient = lazy(() => import("./pages/Client/Dashboard-Client"));
const DashboardClientSettings = lazy(() =>
  import("./pages/Client/Account-Settings-Dashboard")
);
const DashboardClientQuestions = lazy(() =>
  import("./pages/Client/Questions-Dashboard-Client")
);
const DashboardClientHistory = lazy(() =>
  import("./pages/Client/History-Dashboard-Client")
);
const DashboardClientContact = lazy(() =>
  import("./pages/Client/Contact-Dashboard-Client")
);
const DashboardHelper = lazy(() => import("./pages/Helper/Dashboard-Helper"));
const DashboardHelperGenerateQR = lazy(() =>
  import("./pages/Helper/GenerateQR")
);
const DashboardHelperAnnonce = lazy(() =>
  import("./pages/Helper/Dashboard-Helper-Annonce")
);
const DashboardHelperSettings = lazy(() =>
  import("./pages/Helper/User-Settings-Helper")
);
const DashboardShipmentHistory = lazy(() =>
  import("./pages/Helper/Dashboard-Shipment-History")
);
const DashboardHelperQuestions = lazy(() =>
  import("./pages/Helper/Questions-Helper-Dashboard")
);
const DashboardHelperContact = lazy(() =>
  import("./pages/Helper/Contact-Helper-Dashboard")
);
const DashboardHelperUpdateAnnonce = lazy(() =>
  import("./pages/Helper/Update-shipping")
);
const DashboardAdmin = lazy(() => import("./pages/Admin/Dashboard"));
const DashboardAdminUsers = lazy(() => import("./pages/Admin/Users"));
const DashboardAdminLogin = lazy(() => import("./pages/Admin/Login"));
const DashboardAdminAnalytics = lazy(() => import("./pages/Admin/Map"));
const DashboardAdminAccount = lazy(() => import("./pages/Admin/Account"));
const UnknownPage = lazy(() => import("./Unknown"));

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <LoginContext>
        <Switch>
          <PublicRoute exact path={ROUTE.HOME} component={Home} />
          <PublicRoute exact path={ROUTE.REGISTER} component={Register} />
          <PublicRoute
            exact
            path={ROUTE.REGISTER_HELPER}
            component={RegisterHelper}
          />
          <PublicRoute
            exact
            path={ROUTE.REGISTER_CLIENT}
            component={RegisterClient}
          />
          <PublicRoute
            exact
            path={ROUTE.CONFIRM_REGISTRATION}
            component={ConfirmRegistration}
          />
          <PublicRoute exact path={ROUTE.LOGIN} component={Login} />

          <ProtectedClientRoute
            exact
            path={ROUTE.CHECKOUT_CLIENT}
            component={CheckoutClient}
          />
          <ProtectedClientRoute
            exact
            path={ROUTE.ANNONCE}
            component={CreateAnnonce}
          />
          <ProtectedClientRoute
            exact
            path={ROUTE.CONFIRM_ANNONCE}
            component={ConfirmAnnonce}
          />
          <ProtectedClientRoute
            exact
            path={ROUTE.SHIPMENT_ANNONCE}
            component={ShippingAnnonce}
          />
          <ProtectedClientRoute
            exact
            path={ROUTE.DASHBOARD}
            component={DashboardClient}
          />
          <ProtectedClientRoute
            exact
            path={ROUTE.DASHBOARD_SETTINGS}
            component={DashboardClientSettings}
          />
          <ProtectedClientRoute
            exact
            path={ROUTE.DASHBOARD_QUESTIONS}
            component={DashboardClientQuestions}
          />
          <ProtectedClientRoute
            exact
            path={ROUTE.DASHBOARD_HISTORY}
            component={DashboardClientHistory}
          />
          <ProtectedClientRoute
            exact
            path={ROUTE.DASHBOARD_CONTACT}
            component={DashboardClientContact}
          />

          <ProtectedHelperRoute
            exact
            path={ROUTE.DASHBOARD_HELPER}
            component={DashboardHelper}
          />
          <ProtectedHelperRoute
            exact
            path={ROUTE.DASHBOARD_HELPER_QR_CODE}
            component={DashboardHelperGenerateQR}
          />
          <ProtectedHelperRoute
            exact
            path={ROUTE.DASHBOARD_HELPER_ANNONCE}
            component={DashboardHelperAnnonce}
          />
          <ProtectedHelperRoute
            exact
            path={ROUTE.DASHBOARD_SETTINGS_HELPER}
            component={DashboardHelperSettings}
          />
          <ProtectedHelperRoute
            exact
            path={ROUTE.DASHBOARD_HISTORY_HELPER}
            component={DashboardShipmentHistory}
          />
          <ProtectedHelperRoute
            exact
            path={ROUTE.DASHBOARD_UPDATE_ANNONCE_HELPER}
            component={DashboardHelperUpdateAnnonce}
          />
          <ProtectedHelperRoute
            exact
            path={ROUTE.DASHBOARD_CONTACT_HELPER}
            component={DashboardHelperContact}
          />
          <ProtectedHelperRoute
            exact
            path={ROUTE.DASHBOARD_QUESTIONS_HELPER}
            component={DashboardHelperQuestions}
          />
          {/* ADMIN */}
          <Route
            exact
            path={ROUTE.DASHBOARD_ADMIN}
            component={DashboardAdmin}
          />
          <Route
            exact
            path={ROUTE.DASHBOARD_ADMIN_USERS}
            component={DashboardAdminUsers}
          />
          <Route
            exact
            path={ROUTE.DASHBOARD_ADMIN_LOGIN}
            component={DashboardAdminLogin}
          />
          <Route
            exact
            path={ROUTE.DASHBOARD_ADMIN_ANALYTICS}
            component={DashboardAdminAnalytics}
          />
          <Route
            exact
            path={ROUTE.DASHBOARD_ADMIN_ACCOUNT}
            component={DashboardAdminAccount}
          />

          <Route exact path={ROUTE.TEST_MAP} component={Dev} />
          <Route path='*' component={UnknownPage} />
        </Switch>
        <NotificationWrapper />
      </LoginContext>
    </Suspense>
  );
}
