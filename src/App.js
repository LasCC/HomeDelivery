import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.css';

import ROUTE from './Routes';
import Loader from './components/Loader';
const Home = lazy(() => import('./pages/Home'));
const RegisterHelper = lazy(() => import('./pages/Helper/Register-Helper'));
const Register = lazy(() => import('./pages/Client/Register'));
const ConfirmRegistration = lazy(() => import('./pages/Confirm-Registration'));
const Login = lazy(() => import('./pages/Login'));
const CheckoutClient = lazy(() => import('./pages/Client/Checkout-Client'));
const CreateAnnonce = lazy(() => import('./pages/Client/Annonce-Client'));
const RecapAnnonce = lazy(() => import('./pages/Client/Recap-Client'));
const Dev = lazy(() => import('./pages/Helper/Dev'));
const DashboardClient = lazy(() => import('./pages/Client/Dashboard-Client'));
const DashboardClientSettings = lazy(() => import('./pages/Client/Account-Settings-Dashboard'));
const DashboardClientQuestions = lazy(() => import('./pages/Client/Questions-Dashboard-Client'));
const DashboardClientHistory = lazy(() => import('./pages/Client/History-Dashboard-Client'));
const DashboardClientContact = lazy(() => import('./pages/Client/Contact-Dashboard-Client'));

export default function App() {
	return (
		<Suspense fallback={<Loader />}>
			<Switch>
				<Route exact path={ROUTE.HOME} component={Home} />
				<Route exact path={ROUTE.REGISTER_HELPER} component={RegisterHelper} />
				<Route exact path={ROUTE.REGISTER} component={Register} />
				<Route exact path={ROUTE.CONFIRM_REGISTRATION} component={ConfirmRegistration} />
				<Route exact path={ROUTE.LOGIN} component={Login} />
				<Route exact path={ROUTE.CHECKOUT_CLIENT} component={CheckoutClient} />
				<Route exact path={ROUTE.ANNONCE} component={CreateAnnonce} />
				<Route exact path={ROUTE.RECAP_ANNONCE} component={RecapAnnonce} />
				<Route exact path={ROUTE.TEST_MAP} component={Dev} />
				<Route exact path={ROUTE.DASHBOARD_HELPER} component={DashboardClient} />
				<Route exact path={ROUTE.DASHBOARD_SETTINGS} component={DashboardClientSettings} />
				<Route exact path={ROUTE.DASHBOARD_QUESTIONS} component={DashboardClientQuestions} />
				<Route exact path={ROUTE.DASHBOARD_HISTORY} component={DashboardClientHistory} />
				<Route exact path={ROUTE.DASHBOARD_CONTACT} component={DashboardClientContact} />
			</Switch>
		</Suspense>
	);
}
