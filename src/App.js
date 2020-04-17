import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.css';
import 'circular-std';
import ROUTE from './Routes';
import Loader from './components/Loader';
const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const RegisterClient = lazy(() => import('./pages/Client/Register-Client'));
const RegisterHelper = lazy(() => import('./pages/Helper/Register-Helper'));
const ConfirmRegistration = lazy(() => import('./pages/Confirm-Registration'));
const Login = lazy(() => import('./pages/Login'));
const CheckoutClient = lazy(() => import('./pages/Client/Checkout-Client'));
const CreateAnnonce = lazy(() => import('./pages/Client/Annonce-Client'));
const ConfirmAnnonce = lazy(() => import('./pages/Client/Confirm-Annonce'));
const ShippingAnnonce = lazy(() => import('./pages/Client/Shipping-Annonce'));
const Dev = lazy(() => import('./pages/Helper/Dev'));
const DashboardClient = lazy(() => import('./pages/Client/Dashboard-Client'));
const DashboardClientSettings = lazy(() => import('./pages/Client/Account-Settings-Dashboard'));
const DashboardClientQuestions = lazy(() => import('./pages/Client/Questions-Dashboard-Client'));
const DashboardClientHistory = lazy(() => import('./pages/Client/History-Dashboard-Client'));
const DashboardClientContact = lazy(() => import('./pages/Client/Contact-Dashboard-Client'));
const DashboardHelper = lazy(() => import('./pages/Helper/Dashboard-Helper'));
const DashboardHelperGenerateQR = lazy(() => import('./pages/Helper/GenerateQR'));
const DashboardHelperAnnonce = lazy(() => import('./pages/Helper/Dashboard-Helper-Annonce'));
const DashboardHelperSettings = lazy(() => import('./pages/Helper/User-Settings-Helper'));
const DashboardShipmentHistory = lazy(() => import('./pages/Helper/Dashboard-Shipment-History'));
const UnknownPage = lazy(() => import('./Unknown'));

export default function App() {
	return (
		<Suspense fallback={<Loader />}>
			<Switch>
				<Route exact path={ROUTE.HOME} component={Home} />
				<Route exact path={ROUTE.REGISTER} component={Register} />
				<Route exact path={ROUTE.REGISTER_HELPER} component={RegisterHelper} />
				<Route exact path={ROUTE.REGISTER_CLIENT} component={RegisterClient} />
				<Route exact path={ROUTE.CONFIRM_REGISTRATION} component={ConfirmRegistration} />
				<Route exact path={ROUTE.LOGIN} component={Login} />
				<Route exact path={ROUTE.CHECKOUT_CLIENT} component={CheckoutClient} />
				<Route exact path={ROUTE.ANNONCE} component={CreateAnnonce} />
				<Route exact path={ROUTE.CONFIRM_ANNONCE} component={ConfirmAnnonce} />
				<Route exact path={ROUTE.SHIPMENT_ANNONCE} component={ShippingAnnonce} />
				<Route exact path={ROUTE.DASHBOARD} component={DashboardClient} />
				<Route exact path={ROUTE.DASHBOARD_SETTINGS} component={DashboardClientSettings} />
				<Route exact path={ROUTE.DASHBOARD_QUESTIONS} component={DashboardClientQuestions} />
				<Route exact path={ROUTE.DASHBOARD_HISTORY} component={DashboardClientHistory} />
				<Route exact path={ROUTE.DASHBOARD_CONTACT} component={DashboardClientContact} />
				<Route exact path={ROUTE.DASHBOARD_HELPER} component={DashboardHelper} />
				<Route exact path={ROUTE.DASHBOARD_HELPER_QR_CODE} component={DashboardHelperGenerateQR} />
				<Route exact path={ROUTE.DASHBOARD_HELPER_ANNONCE} component={DashboardHelperAnnonce} />
				<Route exact path={ROUTE.DASHBOARD_SETTINGS_HELPER} component={DashboardHelperSettings} />
				<Route exact path={ROUTE.DASHBOARD_HISTORY_HELPER} component={DashboardShipmentHistory} />
				<Route exact path={ROUTE.TEST_MAP} component={Dev} />
				<Route path='*' component={UnknownPage} />
			</Switch>
		</Suspense>
	);
}
