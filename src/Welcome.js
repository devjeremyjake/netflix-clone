import React from 'react';
import './Wellcome.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Welcome = () => {
	const [{ user }] = useStateValue();

	return (
		<div className="welcome">
			<div className="welcome__logo">
				<img
					className="app__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
					alt="netflix logo"
				/>
			</div>
			<div className="welcome__avatar">
				<h3>Hello Who is Watching?</h3>
				<h3 className="username">{user?.email}</h3>
				<Link to="/main">
					<img
						className="logo__avatar"
						src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
						alt="avatar"
					/>
				</Link>
			</div>
		</div>
	);
};

export default Welcome;
