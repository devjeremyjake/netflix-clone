import React from 'react';
import './Main.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';

const Main = () => {
	return (
		<div className="main">
			<div>
				<Navbar />
				<Banner fetchMain={requests.fetchNetflixOriginals} />
				<div className="main__first">
					<Row
						title="Netflix originals"
						fetchUrl={requests.fetchNetflixOriginals}
						isLargeRow
					/>
				</div>
				<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
				<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
				<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
				<Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
				<Row title="Horrow" fetchUrl={requests.fetchHorrorMovies} />
				<Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
				<Row title="Documentries" fetchUrl={requests.fetchDocumentries} />
			</div>
		</div>
	);
};

export default Main;
