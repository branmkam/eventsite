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
		<div className="w-full md:w-1/3 flex flex-col gap-4 rounded-lg bg-cerulean/80 p-4 ">
			<p className="p-2 bg-black text-center rounded-lg text-cherryred font-averia text-2xl md:text-4xl">
				{name}
			</p>
			{imgSrc && <img src={imgSrc} />}
			<p className="flex flex-col gap-2 md:text-lg">{description}</p>
		</div>
	);
}
