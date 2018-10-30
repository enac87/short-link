import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';

import Login from '../imports/ui/Login';
import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';

const routes = (
	<Router history={browserHistory}>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route path="/signup" component={Signup} />
			<Route path="/links" component={Link} />
			<Route path="*" component={NotFound} />
		</Switch>
	</Router>
);

Meteor.startup(() => {
	ReactDOM.render(routes, document.getElementById('app'));
});
