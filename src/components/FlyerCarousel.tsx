import { useEffect, useState } from 'react';

const eventPhotoCount = 7; // TODO: update with automatic query
const flyers = Array.from(
	{ length: eventPhotoCount },
	(_, index) => `/eventphotos/${String(index + 1).padStart(3, '0')}.png`,
);

export default function FlyerCarousel({ maxWidth = 800 }: { maxWidth?: number | string }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [transitionEnabled, setTransitionEnabled] = useState(true);

	useEffect(() => {
		const intervalId = window.setInterval(() => {
			setActiveIndex((index) => index + 1);
		}, 4000);

		return () => window.clearInterval(intervalId);
	}, []);

	const handleTransitionEnd = () => {
		if (activeIndex !== flyers.length) return;

		setActiveIndex(0);
		setTransitionEnabled(false);
		requestAnimationFrame(() => {
			requestAnimationFrame(() => setTransitionEnabled(true));
		});
	};

	return (
		<section
			aria-label="Event flyers"
			style={{ width: '100%', maxWidth: maxWidth, marginInline: 'auto' }}
		>
			<div
				aria-live="polite"
				style={{
					overflow: 'hidden',
                    aspectRatio: '1 / 0.8',
				}}
				className="mx-auto w-full rounded-3xl"
			>
				<div
					style={{
						display: 'flex',
						height: '100%',
						transform: `translateX(-${activeIndex * 100}%)`,
						transition: transitionEnabled
							? 'transform 750ms cubic-bezier(0.65, 0, 0.35, 1)'
							: 'none',
					}}
					onTransitionEnd={handleTransitionEnd}
				>
					{[...flyers, flyers[0]].map((src, index) => (
						<img
							key={`${src}-${index}`}
							src={src}
							alt={index === flyers.length ? '' : `Event flyer ${index + 1}`}
							aria-hidden={index === flyers.length}
							loading="lazy"
							style={{
								width: '100%',
								height: '100%',
								flex: '0 0 100%',
								objectFit: 'cover',
							}}
						/>
					))}
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 16,
					padding: 12,
				}}
			>
				<button
					type="button"
					aria-label="Previous flyer"
					onClick={() =>
						setActiveIndex((index) =>
							index === 0 ? flyers.length - 1 : index - 1,
						)
					}
				>
					Previous
				</button>
				<span aria-hidden="true">
					{(activeIndex % flyers.length) + 1} / {flyers.length}
				</span>
				<button
					type="button"
					aria-label="Next flyer"
					onClick={() =>
						setActiveIndex((index) =>
							index === flyers.length ? 0 : index + 1,
						)
					}
				>
					Next
				</button>
			</div>
		</section>
	);
}