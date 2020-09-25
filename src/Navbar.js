import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';

const Navbar = () => {
	const history = useHistory();
	const [{ user }] = useStateValue();

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	const [show, handleShow] = useState([]);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else {
				handleShow(false);
			}
		});

		return () => {
			window.removeEventListener('scroll');
		};
	}, []);

	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<img
				className="nav__logo"
				src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
				alt="netflix logo"
			/>
			<div className="nav__right">
				<p>{user?.email}</p>
				<img
					onClick={handleAuthentication}
					className="nav__avatar"
					src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
					alt="avatar"
				/>
			</div>
		</div>
	);
};

export default Navbar;
