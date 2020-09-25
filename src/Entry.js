import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Main from './Main';
import SubLogin from './SubLogin';
import Welcome from './Welcome';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import SignIn from './SignIn';
import { useState } from 'react';

const Entry = () => {
	const [auser, setauser] = useState();
	const [{ user }, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			setauser(authUser);
			if (authUser) {
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, [auser]);

	return (
		<Router>
			<div className="entry">
				<Switch>
					<Route path="/login">
						<SignIn />
					</Route>
					<Route path="/main">
						<Main />
					</Route>
					<Route path="/welcome">
						<SubLogin />
					</Route>
					<Route path="/avatar">
						<Welcome />
					</Route>
					<Route path="/">
						<App />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default Entry;
