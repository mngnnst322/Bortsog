"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Q = "?w=1900&q=80&auto=format&fit=crop&fm=jpg";
const ambient = [
	`https://images.unsplash.com/photo-1523381294911-8d3cead13475${Q}`,
	`https://images.unsplash.com/photo-1579572331145-5e53b299c64e${Q}`,
	`https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc${Q}`,
	`https://images.unsplash.com/photo-1489987707025-afc232f7ea0f${Q}`,
];

const HERO_HOODIE =
	"https://images.unsplash.com/photo-1680292783974-a9a336c10366?w=1400&q=85&auto=format&fit=crop&fm=jpg";

const GLYPHS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%&/*<>=+";

function ScrambleText({ text, className = "" }: { text: string; className?: string }) {
	const [out, setOut] = useState(text);
	const frame = useRef(0);

	useEffect(() => {
		let raf = 0;
		let tick = 0;
		const run = () => {
			tick++;
			const progress = Math.min(frame.current / 2, text.length);
			let s = "";
			for (let i = 0; i < text.length; i++) {
				if (i < progress || text[i] === " ") s += text[i];
				else s += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
			}
			setOut(s);
			if (frame.current / 2 < text.length) {
				if (tick % 2 === 0) frame.current++;
				raf = requestAnimationFrame(run);
			} else {
				setOut(text);
			}
		};
		frame.current = 0;
		raf = requestAnimationFrame(run);
		return () => cancelAnimationFrame(raf);
	}, [text]);

	return <span className={className}>{out}</span>;
}

const specs = [
	{ k: "WEATHER-RESISTANT SHELL", v: "Ус түлхэх гадна давхарга" },
	{ k: "THERMAL INSULATION", v: "Дулаан барих, хөнгөн жин" },
	{ k: "REINFORCED STITCH", v: "Хөдөлгөөнд зориулсан оёдол" },
];

export default function HeroSlider() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const t = setInterval(() => setIndex((i) => (i + 1) % ambient.length), 5000);
		return () => clearInterval(t);
	}, []);

	return (
		<section className="hud-scanlines relative min-h-[88vh] w-full overflow-hidden border-b border-border bg-background">
			{/* ambient background */}
			{ambient.map((src, i) => (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					key={src}
					src={src}
					alt=""
					aria-hidden
					className={
						"absolute inset-0 h-full w-full object-cover opacity-25 grayscale transition-opacity duration-[1500ms] " +
						(i === index ? "opacity-25" : "opacity-0")
					}
				/>
			))}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,transparent_0%,rgba(10,10,10,0.55)_55%,#0a0a0a_100%)]" />
			<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
			<div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-24 bg-gradient-to-b from-hud/10 to-transparent hud-sweep" />

			{/* centre product */}
			<div className="pointer-events-none absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2">
				<div className="relative hud-float">
					<div className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-hud/15 blur-[120px]" />
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={HERO_HOODIE}
						alt="Bortsog хар hoodie"
						className="relative h-[58vh] max-h-[560px] w-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.65)]"
					/>
				</div>
			</div>

			{/* content grid */}
			<div className="relative z-[4] mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-between px-4 py-10 sm:px-6">
				{/* top row */}
				<div className="flex items-start justify-between gap-4">
					<div className="hud-box px-3 py-2">
						<div className="font-mono-hud text-[10px] text-hud">Engineered to endure</div>
						<div className="font-mono-hud text-[10px] text-muted">Est. 2022 — Ulaanbaatar</div>
					</div>
					<div className="hud-box hidden px-3 py-2 text-right sm:block">
						<div className="font-mono-hud text-[10px] text-hud">Designed for</div>
						<div className="font-mono-hud text-[10px] text-muted">Anything</div>
					</div>
				</div>

				{/* middle: specs on the right */}
				<div className="flex justify-end">
					<ul className="hud-box hidden w-[280px] divide-y divide-border/70 lg:block">
						{specs.map((s) => (
							<li key={s.k} className="flex gap-3 px-3 py-2.5">
								<span className="mt-0.5 h-2 w-2 shrink-0 border border-hud" />
								<span>
									<span className="block font-mono-hud text-[10px] text-foreground">{s.k}</span>
									<span className="block text-[11px] text-muted">{s.v}</span>
								</span>
							</li>
						))}
					</ul>
				</div>

				{/* bottom: headline + cta */}
				<div className="max-w-xl">
					<div className="font-mono-hud mb-3 text-[10px] text-hud">
						<ScrambleText text="DROP 001 // LIMITED RUN // NO RESTOCK" />
					</div>
					<h1 className="font-display text-6xl font-extrabold uppercase leading-[0.86] tracking-tight sm:text-8xl">
						<span className="glitch block" data-text="DETAILS">
							DETAILS
						</span>
						<span className="block text-hud">MATTER</span>
					</h1>
					<p className="mt-5 max-w-md text-sm text-muted">
						Монголд оёж, хатуу цаг агаарт туршсан. Нарийн зүйл бүр бодож хийгдсэн — хязгаарлагдмал тоо,
						дахин үйлдвэрлэгдэхгүй.
					</p>
					<Link
						href="/shop"
						className="font-mono-hud mt-6 inline-flex items-center gap-3 border border-foreground px-6 py-3 text-xs text-foreground transition-colors hover:bg-foreground hover:text-background"
					>
						<span className="text-hud">[</span> Дэлгүүр үзэх <span className="text-hud">]</span>
					</Link>
				</div>
			</div>

			{/* index chips */}
			<div className="absolute bottom-14 left-1/2 z-[4] flex -translate-x-1/2 gap-2">
				{ambient.map((_, i) => (
					<button
						key={i}
						aria-label={`Slide ${i + 1}`}
						onClick={() => setIndex(i)}
						className={
							"font-mono-hud border px-2 py-0.5 text-[10px] transition-colors " +
							(i === index
								? "border-hud text-hud"
								: "border-border text-muted hover:text-foreground")
						}
					>
						{String(i + 1).padStart(2, "0")}
					</button>
				))}
			</div>

			{/* ticker */}
			<div className="absolute inset-x-0 bottom-0 z-[4] overflow-hidden border-t border-border bg-background/80 py-2">
				<div className="hud-marquee flex w-max whitespace-nowrap">
					{[0, 1].map((r) => (
						<span key={r} className="font-mono-hud flex text-[10px] text-muted">
							{Array.from({ length: 6 }).map((_, i) => (
								<span key={i} className="mx-4 flex items-center gap-4">
									Weather-resistant <span className="text-hud">//</span> Engineered in Mongolia{" "}
									<span className="text-hud">//</span> Limited drop <span className="text-hud">//</span>
								</span>
							))}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
