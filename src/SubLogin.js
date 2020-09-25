import React, { useState } from 'react';
import './SubLogin.css';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const SubLogin = () => {
	const history = useHistory();
	const [{ basket }] = useStateValue();
	const email = basket;
	const [password, setpassword] = useState('');

	const register = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				console.log(auth);
				if (auth) {
					history.push('/main');
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="sublogin">
			<div className="sublogin__underline">
				<div className="sublogin__nanvbar">
					<Link to="/">
						<img
							className="app__logo"
							src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
							alt="netflix logo"
						/>
					</Link>
					<Link to="/login">
						<button className="sublogin__login">Sign in</button>
					</Link>
				</div>
			</div>
			<div className="sublogin__content">
				<h3>Welcome back!</h3>
				<h3>Joining Netflix is easy</h3>
				<p>Enter your password and you'll be Viewing in no time.</p>
				<div className="email">
					<span>Email</span>
					<h2>{basket}</h2>
					<form>
						<input
							type="password"
							value={password}
							onChange={(e) => setpassword(e.target.value)}
							required
						/>
						<button onClick={register} className="sublogin__btn">
							Continue
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SubLogin;
