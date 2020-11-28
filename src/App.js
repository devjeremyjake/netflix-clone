import React, { useState } from 'react';
import './App.css';
import { Link, useHistory } from 'react-router-dom';
import Accordian from './Accordian';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useStateValue } from './StateProvider';

function App() {
	const history = useHistory();
	const [{}, dispatch] = useStateValue();
	const [email, setEmail] = useState('');

	const signin = (e) => {
		e.preventDefault();
		console.log(email);
		dispatch({
			type: 'ADD_TO_BASKET',
			basket: email,
		});
		history.push('/welcome');
	};

	return (
		<div className="app">
			<div className="app__header">
				<div className="app__nav">
					<Link to="/">
						<img
							className="app__logo"
							src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
							alt="netflix logo"
						/>
					</Link>

					<Link to="/login">
						<button className="app__button">sign in</button>
					</Link>
				</div>
				<div className="app__banner">
					<div className="app__content">
						<h1>Unlimited movies, Tv</h1>
						<h2>shows, and more.</h2>
						<h4>Watch anywhere. cancel anytime.</h4>
						<p>
							Ready to watch? Enter your email to create or restart your
							membership
						</p>
						<form>
							<div className="app__signup">
								<input
									value={email}
									className="app__searchInput"
									type="text"
									id="input__username"
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Email address"
									required
								/>
								<button
									type="submit"
									onClick={signin}
									className="app__searchIcon"
								>
									Get Started <ChevronRightIcon fontSize="large" />
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="app__Profile">
				<img
					className="app__profileImg"
					src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp-2/kidsProfile/default.jpg"
				/>
				<div className="app__profiledesc">
					<h3>Create profile for Kids.</h3>
					<p>
						Send Kids on adventures with their favorite characters in the space
						made just for them-free with your membership.
					</p>
				</div>
			</div>
			<div className="app__Profile">
				<div className="app__profiledesc">
					<h3>Enjoy on your TV.</h3>
					<p>
						Watch on Smart Tvs, playstation, Xbox, Chromebook, Apple TV, Blu-ray
						Players, and more.
					</p>
				</div>
				<div className="content">
					<img
						className="video__img"
						src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
					/>
					<div className="video-container">
						<div className="video">
							<video
								autoPlay={true}
								className="our-story-card-video"
								muted
								loop
								id="vid"
							>
								<source
									src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
									type="video/mp4"
								/>
							</video>
						</div>
					</div>
				</div>
			</div>
			<div className="app__Profile">
				<div className="app__download">
					<img
						className="app__profileImg"
						src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
					/>
					<div className="app__downloadContent">
						<div className="app__downloadstory">
							<img
								src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
								alt="content"
							/>
						</div>
						<div className="app__storyText">
							<h5>Stranger Things</h5>
							<p>Downloading...</p>
						</div>
						::after==$0
					</div>
				</div>

				<div className="app__profiledesc">
					<h3>Download your shows to watch offline</h3>
					<p>Save your favorites easily and alwayshave something to watch.</p>
				</div>
			</div>
			<div className="app__Profile">
				<div className="app__profiledesc">
					<h3>Watch everywhere</h3>
					<p>
						stream unlimited movies and Tv shows on your phone, tablet, laptop,
						and Tv without paying more.
					</p>
				</div>
				<div className="content">
					<img
						className="video__img"
						src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
					/>
					<div className="video-container-desktop">
						<div className="video">
							<video
								autoPlay={true}
								className="our-story-card-video-desktop"
								muted
								loop
								id="vid"
							>
								<source
									src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
									type="video/mp4"
								/>
							</video>
						</div>
					</div>
				</div>
			</div>
			{/* Accordian section */}
			<div className="app__ProfileAccordian">
				<div>
					<h1>Frequently Asked Questions</h1>
					<Accordian
						className="section"
						title="What is Netflix?"
						content="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
					/>
					<Accordian
						className="section"
						title="How much does Netflix cost?"
						content="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,900 to ₦4,400 a month. No extra costs, no contracts."
					/>
					<Accordian
						className="section"
						title="Where can i Watch?"
						content="Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
					/>
					<Accordian
						className="section"
						title="How do i cancel?"
						content="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
					/>
					<Accordian
						className="section"
						title="What can i watch on Netflix?"
						content="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
					/>
					<Accordian
						className="section"
						title="Is Netflix good for kids?"
						content="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
						Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
					/>
					<div className="app__signin">
						<h3>
							Ready to Watch? Enter your Email to create or restart your
							membership
						</h3>
						<form>
							<div className="app__signup below">
								<input
									value={email}
									className="app__searchInput bottom"
									type="text"
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Email address"
								/>
								<button onClick={signin} className="app__searchIcon">
									Get Started <ChevronRightIcon fontSize="large" />
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			{/* Footer Section */}
			<div className="app__footer">
				<div className="app__footerBottom">
					<ul>
						<li>FAQ</li>
						<li>investor Relations</li>
						<li>Privacy</li>
						<li>speed Test</li>
					</ul>
					<ul>
						<li>Help Center</li>
						<li>Jobs</li>
						<li>cookie Prefences</li>
						<li>Watch for Later</li>
					</ul>
					<ul>
						<li>Account</li>
						<li>Ways to Watch</li>
						<li>Corperate information</li>
						<li>Legal Notices</li>
					</ul>
					<ul>
						<li>Media Center</li>
						<li>Terms of Use</li>
						<li>Contact Us</li>
						<li>Netflix Originals</li>
					</ul>
				</div>
				<h2>Questions? Contact us.</h2>
				<h2>Netflix Clone. Property of Netflix.</h2>
			</div>
		</div>
	);
}

export default App;
