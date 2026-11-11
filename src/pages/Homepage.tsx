import CrispButton from '../components/CrispButton';
import FlyerCarousel from '../components/FlyerCarousel';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import allshows, { type ShowProps } from "../../data/allshows.js";

export default function Homepage() {
	const videoRef = useRef<HTMLVideoElement>(null);

	
	const shows = allshows
		.filter((p: ShowProps) => new Date(p.date) >= new Date())
		.sort((a: ShowProps, b: ShowProps) => new Date(a.date).getTime() - new Date(b.date).getTime()); //most recent first

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;
		video.muted = true;
		video.play().catch(() => {});
	}, []);
	return (
		<div
			className="relative w-full min-h-[calc(100vh-96px)] p-4 font-homenaje"
		>
			<video
				autoPlay
				loop
				muted
				playsInline
				aria-hidden="true"
				className="absolute inset-0 h-full w-full object-cover"
			>
				<source src="/discoball.mov" type="video/mp4" />
			</video>
			<div className="absolute inset-0 bg-black/50" />
			<div className="relative z-10 mx-auto flex max-w-300 flex-col items-center justify-center gap-4 p-4 md:gap-12">
				<div className="grid w-full grid-cols-1 items-center gap-8 text-center md:grid-cols-[2fr_3fr] md:text-left">
					<h1 className="text-2xl text-brankamyellow md:text-3xl lg:text-4xl">
						<b className="text-cerulean text-3xl md:text-5xl">WE ARE ACROSS THE POND PRODUCTIONS.</b><br/>Bringing a passion for international electronic music to Raleigh, Durham, Chapel Hill, and more...
					</h1>
					<div className="w-full min-w-0 justify-center items-center flex">
						<FlyerCarousel maxWidth={800} />
					</div>
				</div>
				<div className="grid w-full grid-cols-1 items-center gap-6  text-center text-2xl text-brankamyellow md:grid-cols-2 md:gap-12 md:text-left md:text-3xl">
					<div className="order-1 flex w-full flex-col gap-4 md:order-2 lg:gap-8 lg:text-5xl">
						<h1 className="text-center font-modak text-4xl text-cerulean md:text-5xl">
							take flight <br className="hidden md:block" /> with us!
						</h1>
						<div className="grid gap-4 grid-cols-2">
							<CrispButton className="w-full min-w-0 hover:cursor-pointer">
								<Link to="/about-us">Learn More About Us</Link>
							</CrispButton>
							<CrispButton className="w-full min-w-0 hover:cursor-pointer">
								<Link to="/events">See Our Upcoming Events</Link>
							</CrispButton>
						</div>
						{shows.length > 0 && <h2>Next Event:<br/><a className="text-white underline hover:text-cerulean" href={shows[0].link} target="_blank" rel="noreferrer">{new Date(shows[0].date).toLocaleDateString()} @ {shows[0].venue}</a></h2>}
					</div>
					<video
						ref={videoRef}
						autoPlay
						loop
						muted
						playsInline
						className="order-2 w-full object-cover rounded-2xl bg-black md:order-1"
						style={{ display: 'block' }}
					>
						<source src="/homepageVid.mp4" type="video/mp4" />
						Your browser doesn't support HTML5 video
					</video>
				</div>
			</div>
		</div>
	);
}
