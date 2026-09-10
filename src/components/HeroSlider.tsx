"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";

const P = "?w=1200&q=85&auto=format&fit=crop&fm=jpg";
const hoodies = [
	`https://images.unsplash.com/photo-1680292783974-a9a336c10366${P}`,
	`https://images.unsplash.com/photo-1556821840-3a63f95609a7${P}`,
	`https://images.unsplash.com/photo-1578768079052-aa76e52ff62e${P}`,
	`https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc${P}`,
];

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

export default function HeroSlider() {
	const { t } = useLang();
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const id = setInterval(() => setIndex((i) => (i + 1) % hoodies.length), 5000);
		return () => clearInterval(id);
	}, []);

	const specs = [
		{ k: t("УС ТҮЛХЭХ ГАДАРГА", "WEATHER-RESISTANT SHELL"), v: t("Салхи, борооноос хамгаална", "Blocks wind and rain") },
		{ k: t("ДУЛААН ДАВХАРГА", "THERMAL INSULATION"), v: t("Дулаан барих, хөнгөн жин", "Traps heat, low weight") },
		{ k: t("БЭХЖҮҮЛСЭН ОЁДОЛ", "REINFORCED STITCH"), v: t("Хөдөлгөөнд зориулсан", "Built for movement") },
	];

	return (
		<section className="hud-scanlines relative overflow-hidden border-b border-border bg-background">
			<div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-16 bg-gradient-to-b from-hud/5 to-transparent hud-sweep" />

			<div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-24">
				{/* left — copy */}
				<div className="flex flex-col justify-center">
					<div className="mb-4 flex flex-wrap gap-2">
						<span className="hud-box px-3 py-1.5 font-mono-hud text-[10px] text-muted">
							{t("ТЭСВЭРТ БҮТЭЭГДСЭН", "ENGINEERED TO ENDURE")}
						</span>
						<span className="hud-box px-3 py-1.5 font-mono-hud text-[10px] text-muted">
							{t("2022 — УЛААНБААТАР", "EST. 2022 — ULAANBAATAR")}
						</span>
					</div>

					<div className="font-mono-hud mb-3 text-[10px] text-muted">
						<span className="text-hud">// </span>
						<ScrambleText text={t("DROP 001 // ХЯЗГААРЛАГДМАЛ // ДАХИН ГАРАХГҮЙ", "DROP 001 // LIMITED RUN // NO RESTOCK")} />
					</div>

					<h1 className="font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl">
						<span className="glitch block" data-text={t("НАРИЙН", "DETAILS")}>
							{t("НАРИЙН", "DETAILS")}
						</span>
						<span className="block">{t("ЗҮЙЛ ЧУХАЛ", "MATTER")}</span>
					</h1>

					<p className="mt-6 max-w-md text-sm text-muted">
						{t(
							"Монголд оёж, хатуу цаг агаарт туршсан. Нарийн зүйл бүр бодож хийгдсэн — хязгаарлагдмал тоо, дахин үйлдвэрлэгдэхгүй.",
							"Made in Mongolia, tested against hard weather. Every detail is deliberate — limited runs, never restocked.",
						)}
					</p>

					<div className="mt-8 flex flex-wrap items-center gap-4">
						<Link
							href="/shop"
							className="font-mono-hud inline-flex items-center gap-3 border border-foreground px-6 py-3 text-xs text-foreground transition-colors hover:bg-foreground hover:text-background"
						>
							<span className="text-hud">[</span> {t("ДЭЛГҮҮР ҮЗЭХ", "SHOP NOW")} <span className="text-hud">]</span>
						</Link>
						<div className="flex gap-2">
							{hoodies.map((_, i) => (
								<button
									key={i}
									aria-label={`Slide ${i + 1}`}
									onClick={() => setIndex(i)}
									className={
										"font-mono-hud border px-2 py-0.5 text-[10px] transition-colors " +
										(i === index ? "border-foreground text-foreground" : "border-border text-muted hover:text-foreground")
									}
								>
									{String(i + 1).padStart(2, "0")}
								</button>
							))}
						</div>
					</div>
				</div>

				{/* right — product + specs, kept clear of the copy */}
				<div className="flex flex-col gap-4">
					<div className="hud-box relative aspect-4/5 overflow-hidden">
						{hoodies.map((src, i) => (
							// eslint-disable-next-line @next/next/no-img-element
							<img
								key={src}
								src={src}
								alt={t("Bortsog hoodie", "Bortsog hoodie")}
								className={
									"absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 " +
									(i === index ? "opacity-100" : "opacity-0")
								}
							/>
						))}
						<div className="absolute left-3 top-3 bg-background/85 px-3 py-2">
							<div className="font-mono-hud text-[9px] text-hud">{t("ХЯЗГААРЛАГДМАЛ ЦУВРАЛ", "LIMITED EDITION")}</div>
							<div className="font-mono-hud text-[10px] text-foreground">
								{t("ЗАГВАРЫН HOODIE", "SIGNATURE HOODIE")} · ₮195,500
							</div>
						</div>
					</div>

					<ul className="hud-box divide-y divide-border/70">
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
			</div>

			{/* ticker */}
			<div className="overflow-hidden border-t border-border bg-card/40 py-2">
				<div className="hud-marquee flex w-max whitespace-nowrap">
					{[0, 1].map((r) => (
						<span key={r} className="font-mono-hud flex text-[10px] text-muted">
							{Array.from({ length: 6 }).map((_, i) => (
								<span key={i} className="mx-4 flex items-center gap-4">
									{t("УС ТҮЛХЭХ", "WEATHER-RESISTANT")} <span className="text-hud">//</span>{" "}
									{t("МОНГОЛД ОЁСОН", "ENGINEERED IN MONGOLIA")} <span className="text-hud">//</span>{" "}
									{t("ХЯЗГААРЛАГДМАЛ ЦУВРАЛ", "LIMITED DROP")} <span className="text-hud">//</span>
								</span>
							))}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
