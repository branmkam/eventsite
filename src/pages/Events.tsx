import allshows, { type ShowProps } from "../../data/allshows.js";
import ShowCard from "../components/ShowCard";

export default function Events() {
	const pastshows = allshows
		.filter((p: ShowProps) => new Date(p.date) < new Date())
		.sort((a: ShowProps, b: ShowProps) => new Date(b.date).getTime() - new Date(a.date).getTime()); //closest first

	const shows = allshows
		.filter((p: ShowProps) => new Date(p.date) >= new Date())
		.sort((a: ShowProps, b: ShowProps) => new Date(a.date).getTime() - new Date(b.date).getTime()); //most recent first

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


				<div className="grid justify-between grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
					{shows.length > 0 ? (
						shows.map((s: ShowProps, i: number) => (
							<ShowCard key={"show" + i} show={s} />
						))
					) : (
						<p className="w-full text-lg">We don't have any upcoming shows scheduled just yet... but stay tuned! Big stuff coming in 2026.</p>
					)}
				</div>
				<h1 className="my-2 text-lg md:text-2xl font-bold md:text-xl">
					Past Events
				</h1>
				<div className="grid max-w-[1500px]  justify-between grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
					{pastshows.length > 0 ? (
						pastshows.map((s: ShowProps, i: number) => (
							<ShowCard key={"pastshow" + i} show={s} />
						))
					) : (
						<p className="w-full text-lg">n/a</p>
					)}
				</div>
			</div>
		</div>
	);
};