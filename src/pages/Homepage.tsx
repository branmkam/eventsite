import CrispButton from '../components/CrispButton';
import { Link } from 'react-router-dom';

export default function Homepage() {
	return (
		<div
			className="relative w-full min-h-[calc(100vh-96px)] bg-cover bg-center bg-fixed font-homenaje"
			style={{ backgroundImage: 'url(/djbg.jpg)' }}
		>
			<div className="absolute inset-0 bg-black/50" />
			<div className="relative z-10 flex flex-col gap-16 p-4 items-center justify-center">
				<h1 className="text-2xl md:text-5xl lg:text-6xl text-center  font-averia text-cerulean px-1/8">
					INTERNATIONAL GROOVE
				</h1>
				<div className="flex flex-col sm:flex-row justify-between gap-6 text-center sm:text-left md:gap-12 md:text-3xl lg:text-5xl text-xl px-1/8 text-brankamyellow z-20 text-2xl items-center">
					<h1>
						Bringing a passion for international electronic music to
						Raleigh-Durham.
					</h1>
					<video
						autoPlay
						loop
						muted
						className="w-full sm:w-1/2 object-cover rounded bg-black"
						style={{ display: 'block' }}
					>
						<source src="/homepageVid.mp4" type="video/mp4" />
						Your browser doesn't support HTML5 video
					</video>
				</div>
				<div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
				<CrispButton className="w-[300px] hover:cursor-pointer">
					<Link
						to="/about-us"
					>
						Learn More About Us
					</Link>
				</CrispButton>
				<CrispButton className="w-[300px] hover:cursor-pointer">
					<Link
						to="/events"
					>
						See Our Upcoming Events
					</Link>
				</CrispButton>
				</div>
			</div>
		</div>
	);
}
