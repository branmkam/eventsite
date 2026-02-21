import type { ReactNode } from 'react';

export default function AboutCard({
	imgSrc,
	name,
	children: description,
}: {
	imgSrc?: string;
	name: ReactNode;
	children?: ReactNode;
}) {
	return (
		<div className="w-full flex flex-col md:flex-row gap-4 rounded-lg bg-cerulean/80 p-4 max-w-[1400px]">
			<div className="w-full flex flex-col gap-4 md:min-w-0 order-1 md:order-2">
				<p className="p-2 w-full bg-black text-center rounded-lg text-cherryred font-averia text-3xl md:text-4xl">
					{name}
				</p>
				<div className="flex flex-col gap-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
					{description}
				</div>
			</div>
			{imgSrc && (
				<img
					src={imgSrc}
					alt=""
					className="transition-200 ease-in-out w-full md:w-96 md:min-h-96 md:shrink-0 object-cover object-top rounded-lg order-2 md:order-1"
				/>
			)}
		</div>
	);
}
