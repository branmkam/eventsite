import { Link } from 'react-router-dom';

export default function Header({
	current,
	setCurrent,
}: {
	current: string;
	setCurrent?: (path: string) => void;
}) {
	return (
		<div className="z-50 fixed top-0 left-0 w-full px-4 bg-black text-cerulean font-homenaje w-full h-16 flex justify-between items-center">
			<Link to="/" onClick={() => setCurrent && setCurrent('/')}>
				<h1 className="sm:text-xl text-left font-averia text-cerulean">
					ACROSS THE POND
				</h1>
			</Link>
			<p className="flex gap-4 text-white">
				<Link
					to="/about-us"
					onClick={() => setCurrent && setCurrent('/about-us')}
					className={`${current == '/about-us' ? 'text-brankamyellow' : 'text-white'} hover:text-brankamyellow md:text-lg transition-ease-in-out duration-300`}
				>
					About Us
				</Link>
				<Link
					to="/events"
					onClick={() => setCurrent && setCurrent('/events')}
					className={`${current == '/events' ? 'text-brankamyellow' : 'text-white'} hover:text-brankamyellow md:text-lg transition-ease-in-out duration-300`}
				>
					Events
				</Link>
				<Link
					to="/work-with-us"
					onClick={() => setCurrent && setCurrent('/work-with-us')}
					className={`${current == '/work-with-us' ? 'text-brankamyellow' : 'text-white'} hover:text-brankamyellow md:text-lg transition-ease-in-out duration-300`}
				>
					Work With Us
				</Link>
			</p>
		</div>
	);
}
