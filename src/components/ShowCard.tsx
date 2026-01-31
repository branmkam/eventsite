import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket, faEye } from "@fortawesome/free-solid-svg-icons";
import type { ShowProps } from "../../data/allshows.js";
import ParseISO from "../../data/ParseISO";

interface ShowCardProps {
	show: ShowProps;
}

const lang = "en";

export default function ShowCard({ show: s }: ShowCardProps) {
	const isUpcoming = ParseISO(s.date) > new Date();
	const icon = isUpcoming ? faTicket : faEye;
	return (
		<div
			className="flex flex-col gap-4 items-stretch justify-between text-left p-4 rounded-lg transition duration-100 ease-in-out bg-opacity-50 hover:bg-opacity-50 bg-slate-900 hover:bg-slate-800"
		>
			{s.image && (
				<img
					src={s.image}
					alt=""
					className="w-full self-center object-cover rounded-t-md"
				/>
			)}
			<div className="flex flex-row items-center justify-between">
				<span className="px-2 text-base md:text-lg">
					<a
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
						<span className="text-lg sm:text-xl md:text-2xl">{s.venue}</span>
						<br />
						{s.city}
					</a>{" "}
					<br />
					<span className="text-lg md:text-2xl text-yellow-400">
						{ParseISO(s.date).toLocaleDateString([lang, "en-US"], {
							month: "short",
							day: "2-digit",
							year: "numeric",
						})}{" "}
						|{" "}
						{ParseISO(s.date).toLocaleTimeString([lang, "en-US"], {
							hour: "2-digit",
							minute: "2-digit",
						})}
					</span>
				</span>
				<span className="px-2">
					<a href={s.link} target="_blank" rel="noreferrer">
						<FontAwesomeIcon
							icon={icon}
							className="text-white hover:text-yellow-500 size-7"
						/>
					</a>
				</span>
			</div>
		</div>
	);
}
