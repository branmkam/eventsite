import type { ShowProps } from "../../data/allshows.js";
import ParseISO from "../../data/ParseISO";

interface ShowCardProps {
	show: ShowProps;
}

const lang = "en";

export default function ShowCard({ show: s }: ShowCardProps) {
	return (
		<div
			className="flex flex-col gap-4 items-stretch justify-between text-left p-4 rounded-lg transition duration-100 ease-in-out bg-opacity-50 hover:bg-opacity-50 bg-slate-900 hover:bg-slate-800"
		>
			{s.image && (
				<a title='More information about this show' href={s.link} target="_blank" rel="noreferrer"><img
					src={s.image}
					alt=""
					className="w-full self-center object-cover rounded-t-md"
				/></a>
			)}
			<div className="flex flex-row items-center justify-between gap-2">
				<span className="min-w-0 flex-1 px-2 text-base sm:text-xl">
					<a title={'See the venue on Google Maps'}
						className="text-slate-200 hover:text-red-400"
						rel="noreferrer"
						target="_blank"
						href={
							"https://google.com/maps/search/" +
							s.venue.replace(/\([^)]*\)/g, "").trim() +
							", " +
							s.city
						}
					>
						<span className="text-xl md:text-2xl">{s.venue}</span>
						<br />
						{s.city}
					</a>{" "}
					<br />
					
				</span>
				<span className="shrink-0 px-2 flex flex-col items-end text-right">
					{/* MM/DD/YY when screen < md */}
					<span className="text-lg sm:text-xl md:text-2xl text-yellow-400 whitespace-nowrap block md:hidden">
						{ParseISO(s.date).toLocaleDateString([lang, "en-US"], {
							month: "2-digit",
							day: "2-digit",
							year: "2-digit",
						})}
					</span>
					{/* short date when screen >= md */}
					<span className="text-lg md:text-2xl text-yellow-400 whitespace-nowrap hidden md:block">
						{ParseISO(s.date).toLocaleDateString([lang, "en-US"], { month: "short", day: "numeric", year: "numeric"})}
					</span>
					<span className="text-lg md:text-2xl text-yellow-400 whitespace-nowrap">
						{ParseISO(s.date).toLocaleTimeString([lang, "en-US"], {
							hour: "numeric",
							minute: "2-digit",
						})}
					</span>
				</span>
			</div>
		</div>
	);
}
