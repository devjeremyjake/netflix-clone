import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import axios from './axios';
import './Row.css';
const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLargeRow }) => {
	const [movies, setMovies] = useState([]);
	const [detail, setdetail] = useState('');
	const [trailerUrl, setTrailerUrl] = useState('');

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl, movies]);
	const opts = {
		height: '500',
		width: '100%',
		playerVars: {
			//https://developers.goggle.com/youtube/player_parameters
			autoplay: 1,
		},
	};

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl('');
		} else {
			setdetail(movie);
			movieTrailer(movie?.title || movie?.name || movie?.original_name)
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get('v'));
				})
				.catch((error) => console.log(error));
		}
	};

	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row__posters">
				{/* row posters */}
				{movies.map((movie) => (
					<img
						key={movie.id}
						onClick={() => handleClick(movie)}
						className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
			{trailerUrl && (
				<div
					style={{ display: 'flex', alignItems: 'center' }}
					className="details"
				>
					<div style={{ flex: '35' }} className="details__content">
						<img src={`${base_url}${detail.poster_path}`} alt={detail.id} />
						<h2>{detail?.title || detail?.name || detail?.original_name}</h2>
						<h5>Overview</h5>
						<p>{detail?.overview}</p>
						<h5>
							<span>Release Date:</span>{' '}
							{detail?.release_date || detail?.first_air_date}
						</h5>
						<h5>
							<span>Rating:</span> {detail?.vote_average}
						</h5>
						<h5>
							<span>Original Title:</span> {detail?.original_title}
						</h5>
						<h5>
							<span>Original Language:</span> {detail?.original_language}
						</h5>
					</div>
					<div style={{ flex: '65' }}>
						<YouTube videoId={trailerUrl} opts={opts} />
					</div>
				</div>
			)}
		</div>
	);
};

export default Row;
