import React, { useState } from 'react';
import './SignIn.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

const SignIn = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signin = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				console.log(auth);
				history.push('/avatar');
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="signin">
			<div className="signin__navbar">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
					alt="netflix logo"
				/>
			</div>
			{/* Form section */}
			<div className="signin__form">
				<h1>Sign in</h1>
				<form>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						placeholder="Email address"
						required
					/>
					<input
						type="password"
						value={password}
						placeholder="password"
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<button type="submit" onClick={signin}>
						Sign In
					</button>
				</form>
				<div className="signin__return">
					<p>New to Netflix?</p>
					<Link to="/">Sign up Now</Link>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
