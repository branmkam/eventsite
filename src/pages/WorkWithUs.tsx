import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons/faMailBulk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function WorkWithUs() {
	return (
		<div
			className="relative w-full min-h-[calc(100vh-96px)] bg-cover bg-center bg-fixed font-homenaje"
			style={{ backgroundImage: 'url(/djbg.jpg)' }}
		>
			<div className="absolute inset-0 bg-black/50" />
			<div className="relative z-10 flex flex-col gap-8 w-full items-center text-center p-4">
				<div className="flex flex-col gap-4 md:gap-8 justify-center px-4 md:px-8">
					{/* work with us video */}
					<div className="relative">
						<img
							src="parchment.png"
							alt="parchment"
							className="z-40 h-[600px]"
						/>
						<video
							autoPlay
							loop
							muted
							className="z-30 absolute w-[295px] top-[180px] left-[133px] "
						>
							<source src="contactus.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
					{/* survey info */}
					<div className="flex flex-row gap-4 w-full justify-center md:gap-8">
						<a className=" cursor-pointer"><FontAwesomeIcon icon={faInstagram} className="text-7xl color-brankamyellow transition-300 hover:text-white" /></a>
						<a href="mailto:brankammusic@gmail.com" className="cursor-pointer"><FontAwesomeIcon icon={faMailBulk} className="text-7xl transition-300 hover:text-white  color-brankamyellow" /></a>
						<a className="cursor-pointer"><FontAwesomeIcon icon={faYoutube} className="text-7xl color-brankamyellow transition-300 hover:text-white" /></a>
					</div>
				</div>
			</div>
		</div>
	);
}
