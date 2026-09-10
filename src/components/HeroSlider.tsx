"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
	"https://loremflickr.com/1600/900/streetwear,fashion?lock=1",
	"https://loremflickr.com/1600/900/hoodie,model?lock=2",
	"https://loremflickr.com/1600/900/fashion,clothing?lock=3",
	"https://loremflickr.com/1600/900/apparel,style?lock=4",
	"https://loremflickr.com/1600/900/streetwear,outfit?lock=5",
];

export default function HeroSlider() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
		return () => clearInterval(t);
	}, []);

	return (
		<section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden bg-card">
			{slides.map((src, i) => (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					key={src}
					src={src}
					alt={`Bortsog slide ${i + 1}`}
					className={
						"absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 " +
						(i === index ? "opacity-100" : "opacity-0")
					}
				/>
			))}

			<div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

			<div className="absolute bottom-0 left-0 right-0 mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 pb-12 sm:px-6">
				<h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
					Шинэ цуглуулга
				</h1>
				<p className="max-w-md text-sm text-muted">
					Монголд оёсон hoodie болон гадуур хувцас. Хязгаарлагдмал тоо — дууссан загвар дахин гарахгүй.
				</p>
				<Link
					href="/shop"
					className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
				>
					Бүх бараа үзэх
				</Link>
			</div>

			<div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
				{slides.map((_, i) => (
					<button
						key={i}
						aria-label={`Slide ${i + 1}`}
						onClick={() => setIndex(i)}
						className={"h-1.5 rounded-full transition-all " + (i === index ? "w-6 bg-foreground" : "w-1.5 bg-muted")}
					/>
				))}
			</div>
		</section>
	);
}
