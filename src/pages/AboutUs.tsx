import AboutCard from '../components/AboutCard';

export default function AboutUs() {
	return (
		<div
			className="relative w-full min-h-[calc(100vh-96px)] bg-cover bg-center bg-fixed font-homenaje text-brankamyellow"
			style={{ backgroundImage: 'url(/djbg.jpg)' }}
		>
			<div className="absolute inset-0 bg-black/50" />
			<div className="relative z-10 flex flex-col gap-4 items-center md:gap-8 p-4">
				<h1 className="text-2xl md:text-5xl lg:text-6xl text-center font-averia text-cerulean px-1/8">
					ABOUT US
				</h1>
				<p className="md:text-2xl lg:text-4xl text-lg px-1/8 text-center">
					As a trio of internationally minded people who enjoy music
					from all over the earth, we wanted to bring a slice of what
					we love to a place we love.
				</p>
				<div className="justify-center flex flex-col gap-4 md:gap-8 justify-between">
					<AboutCard
						imgSrc={'/brankam.jpg'}
						name={'untitleddocument'}
					>
						<p>
							untitleddocument is a producer and audio engineer
							from North Carolina. He is an avid gearhead, and
							handles the hardware side of event planning.
						</p>
					</AboutCard>
					<AboutCard imgSrc={'/brankam.jpg'} name={'brankam'}>
						<p>
							brankam is a  producer, singer, pianist, and rapper of Mediterranean heritage from
							North Carolina. 
						</p>
						<p>
							He produces groovy electronic music inspired by the
							likes of Kaytranada, Disclosure, Sammy Virji, Daft
							Punk, Chromeo, and many other acts in the genres of
							nu-funk, house, and UK garage.
						</p>
						<p>
							He speaks three languages, and hopes that
							International Groove will be a place for him to
							share the intersection of his two passions.
						</p>
						<p>
							He is a software developer by day, and built this
							website. Check out his
							<a
								className="underline hover:text-cherryred text-white hover:cursor-pointer"
								href="https://brankam.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								{' '}
								website
							</a>{' '}
							to learn more!
						</p>
					</AboutCard>
					<AboutCard imgSrc={'/brankam.jpg'} name={'Franco'}>
						Franco is our event manager. He knows all of the ins and
						outs of the industry, helping International Groove find
						awesome venues to play in.
					</AboutCard>
				</div>
			</div>
		</div>
	);
}
