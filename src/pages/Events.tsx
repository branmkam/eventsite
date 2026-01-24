export default function Events() {
	return (
		<div
			className="relative w-full min-h-[calc(100vh-96px)] text-brankamyellow bg-cover bg-center bg-fixed font-homenaje"
			style={{ backgroundImage: 'url(/djbg.jpg)' }}
		>
			<div className="absolute inset-0 bg-black/50" />
			<div className="relative z-10 flex flex-col  text-center items-center gap-8 p-4">
				<h1 className="text-2xl md:text-5xl lg:text-6xl text-center font-averia text-cerulean px-1/8">
					EVENTS
				</h1>
				<p className="text-2xl md:text-4xl">
					We don't have any scheduled just yet... but stay tuned! Big stuff coming in 2026.
				</p>
			</div>
		</div>
	);
}
