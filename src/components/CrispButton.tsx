import type { ReactNode } from 'react';

export default function CrispButton({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<button
			className={`transition-ease-in-out duration-300 hover:bg-blue-600 bg-cerulean text-white px-4 py-2 rounded-md text-lg md:text-3xl drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] ${className}`}
		>
			{children}
		</button>
	);
}
