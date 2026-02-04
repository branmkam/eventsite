export default function Footer() {
	return (
		<div className="bg-black z-50 text-white p-4 h-8 text-center flex text-xs sm:text-base whitespace-nowrap items-center font-averia justify-center fixed bottom-0 left-0 w-full">
			<p>
				Copyright © 2026 Across the Pond | Site by{' '}
				<a
					className="text-brankamyellow hover:text-white transition-ease-in-out duration-300 "
					href="https://brandonkaminski.dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					Brandon Kaminski
				</a>
			</p>
		</div>
	);
}
