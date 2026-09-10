"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const R2 = "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/homepage-slider/";
const slides = [
	"aef9fb7c-696a-4121-812e-8b2fd1091199-a6pyib-decf94f1-5382-4734-a63e-068e06e99182-main.webp",
	"ab7e4804-febf-486d-a37a-518543ceabbb-odozbq-11788398-3304-47f9-9308-2ac2c07f4adb-main.webp",
	"6fe412fe-ab63-41f3-9b70-e7151a641d3e-znvdld-8fc97eb0-c7e4-4ee7-acea-6590a72ca5e5-main.webp",
	"6bdcd59e-5078-4b46-9e3c-49991245d47b-zd7ani-1984e05d-25fc-4624-a85e-58c98b15aeda-main.webp",
	"a7a5b942-cd37-44f5-b36b-2a146870da26-d5d7vo-6ab09196-0180-4c76-a038-36450fc7e986-main.webp",
].map((f) => R2 + f);

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
