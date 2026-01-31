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
				<div className="flex flex-col gap-4 md:gap-8 justify-center px-4 md:px-8 items-center">
					{/* work with us video: parchment (shrink-0) + video pinned relative to it */}
					<div className="relative shrink-0 w-full max-w-full md:max-w-[500px]">
						<img
							src="/parchment.png"
							alt=""
							className="relative z-0 w-full h-auto max-h-[600px] object-contain shrink-0"
						/>
						<video
							autoPlay
							loop
							muted
							className="absolute z-10 top-[30%] left-[25%] w-[57%] rounded-md object-cover"
						>
							<source src="/contactus.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
					{/* survey info */}
					<div className="text-6xl sm:text-7xl flex flex-row gap-4 w-full justify-center md:gap-8">
						<a className=" cursor-pointer"><FontAwesomeIcon icon={faInstagram} className=" color-brankamyellow transition-300 hover:text-white" /></a>
						<a href="mailto:brankammusic@gmail.com" className="cursor-pointer"><FontAwesomeIcon icon={faMailBulk} className="transition-300 hover:text-white  color-brankamyellow" /></a>
						<a className="cursor-pointer"><FontAwesomeIcon icon={faYoutube} className="color-brankamyellow transition-300 hover:text-white" /></a>
					</div>
				</div>
			</div>
		</div>
	);
}
