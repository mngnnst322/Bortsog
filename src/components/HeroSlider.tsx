"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";

const Q = "?w=1900&q=80&auto=format&fit=crop&fm=jpg";
const ambient = [
	`https://images.unsplash.com/photo-1523381294911-8d3cead13475${Q}`,
	`https://images.unsplash.com/photo-1579572331145-5e53b299c64e${Q}`,
	`https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc${Q}`,
	`https://images.unsplash.com/photo-1489987707025-afc232f7ea0f${Q}`,
];

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
		const id = setInterval(() => setIndex((i) => (i + 1) % ambient.length), 5000);
		return () => clearInterval(id);
	}, []);

	const specs = [
		{ k: t("ТАВ ТУХТАЙ ДОТОР", "BRUSHED INNER LINING"), v: t("Зөөлөн, арьсанд ээлтэй", "Soft against the skin") },
		{ k: t("ДУЛААН ДАВХАРГА", "THERMAL INSULATION"), v: t("Дулаан барих, хөнгөн жин", "Traps heat, low weight") },
		{ k: t("БЭХЖҮҮЛСЭН ОЁДОЛ", "REINFORCED STITCH"), v: t("Хөдөлгөөнд зориулсан", "Built for movement") },
	];

	return (
		<section className="hud-scanlines relative min-h-[88vh] w-full overflow-hidden border-b border-border bg-background">
			{ambient.map((src, i) => (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					key={src}
					src={src}
					alt=""
					aria-hidden
					className={
						"absolute inset-0 h-full w-full object-cover grayscale transition-opacity duration-[1500ms] " +
						(i === index ? "opacity-25" : "opacity-0")
					}
				/>
			))}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_38%,transparent_0%,rgba(10,10,10,0.55)_55%,#0a0a0a_100%)]" />
			<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
			{/* left scrim keeps the headline off the product */}
			<div className="pointer-events-none absolute inset-y-0 left-0 z-[3] w-[62%] bg-gradient-to-r from-background via-background/85 to-transparent" />
			<div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-24 bg-gradient-to-b from-hud/10 to-transparent hud-sweep" />

			{/* vertical Mongol bichig */}
			<div
				aria-hidden
				className="mongol-vertical pointer-events-none absolute left-[100px] top-1/2 z-[4] hidden -translate-y-1/2 text-[34px] leading-none tracking-widest text-hud/50 sm:block"
			>
				ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠨᠢᠭᠤᠴᠠ ᠲᠣᠪᠴᠢᠶᠠᠨ
			</div>

			{/* centre product — cycles with the slide index */}
			<div className="pointer-events-none absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 lg:left-[58%]">
				<div className="relative hud-float">
					<div className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-hud/15 blur-[120px]" />
					<div className="relative h-[58vh] max-h-[560px] w-[42vh] max-w-[92vw]">
						{hoodies.map((src, i) => (
							// eslint-disable-next-line @next/next/no-img-element
							<img
								key={src}
								src={src}
								alt={t("Bortsog хар hoodie", "Bortsog black hoodie")}
								className={
									"absolute inset-0 h-full w-full object-cover drop-shadow-[0_40px_80px_rgba(0,0,0,0.65)] transition-opacity duration-1000 " +
									(i === index ? "opacity-100" : "opacity-0")
								}
							/>
						))}
						<div className="hud-box absolute -bottom-3 -right-3 bg-background/90 px-3 py-2">
							<div className="font-mono-hud text-[9px] text-hud">{t("ХЯЗГААРЛАГДМАЛ ЦУВРАЛ", "LIMITED EDITION")}</div>
							<div className="font-mono-hud text-[10px] text-foreground">
								{t("ЗАГВАРЫН HOODIE", "SIGNATURE HOODIE")} · ₮195,500
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="relative z-[4] mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-between gap-10 px-4 pb-20 pt-10 sm:px-6">
				<div className="flex items-start justify-between gap-4">
					<div className="hud-box px-3 py-2">
						<div className="font-mono-hud text-[10px] text-hud">{t("ТЭСВЭРТ БҮТЭЭГДСЭН", "ENGINEERED TO ENDURE")}</div>
						<div className="font-mono-hud text-[10px] text-muted">{t("2022 ОНООС — УЛААНБААТАР", "EST. 2022 — ULAANBAATAR")}</div>
					</div>
					<div className="hud-box hidden px-3 py-2 text-right sm:block">
						<div className="font-mono-hud text-[10px] text-hud">{t("ЗОРИУЛСАН", "DESIGNED FOR")}</div>
						<div className="font-mono-hud text-[10px] text-muted">{t("АЛИВАА НӨХЦӨЛД", "ANYTHING")}</div>
					</div>
				</div>

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

				<div className="max-w-xl">
					<div className="font-mono-hud mb-3 text-[10px] text-hud">
						<ScrambleText text={t("DROP 001 // ХЯЗГААРЛАГДМАЛ // ДАХИН ГАРАХГҮЙ", "DROP 001 // LIMITED RUN // NO RESTOCK")} />
					</div>
					<h1 className="font-display text-6xl font-extrabold uppercase leading-[0.86] tracking-tight sm:text-8xl">
						<span className="glitch block" data-text={t("НАРИЙН", "DETAILS")}>
							{t("НАРИЙН", "DETAILS")}
						</span>
						<span className="block text-hud">{t("ЗҮЙЛ ЧУХАЛ", "MATTER")}</span>
					</h1>
					<p className="mt-5 max-w-md text-sm text-muted">
						{t(
							"Монголд оёж, хатуу цаг агаарт туршсан. Нарийн зүйл бүр бодож хийгдсэн — хязгаарлагдмал тоо, дахин үйлдвэрлэгдэхгүй.",
							"Made in Mongolia, tested against hard weather. Every detail is deliberate — limited runs, never restocked.",
						)}
					</p>
					<div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
						<Link
							href="/shop"
							className="group font-mono-hud relative inline-flex items-center gap-3 self-start overflow-hidden border border-hud px-6 py-3 text-xs text-foreground transition-colors hover:text-background"
						>
							<span className="absolute inset-0 origin-left scale-x-0 bg-hud transition-transform duration-300 ease-out group-hover:scale-x-100" />
							<span className="relative z-10 flex items-center gap-3">
								<span className="text-hud transition-colors group-hover:text-background">[</span>
								{t("ДЭЛГҮҮР ҮЗЭХ", "SHOP NOW")}
								<span className="text-hud transition-colors group-hover:text-background">]</span>
							</span>
						</Link>
						<div className="flex gap-2">
							{ambient.map((_, i) => (
								<button
									key={i}
									aria-label={`Slide ${i + 1}`}
									onClick={() => setIndex(i)}
									className={
										"font-mono-hud border px-2 py-1 text-[10px] transition-colors " +
										(i === index ? "border-hud text-hud" : "border-border text-muted hover:text-foreground")
									}
								>
									{String(i + 1).padStart(2, "0")}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="absolute inset-x-0 bottom-0 z-[4] overflow-hidden border-t border-border bg-background/80 py-2">
				<div className="hud-marquee flex w-max whitespace-nowrap">
					{[0, 1].map((r) => (
						<span key={r} className="font-mono-hud flex text-[10px] text-muted">
							{Array.from({ length: 6 }).map((_, i) => (
								<span key={i} className="mx-4 flex items-center gap-4">
									{t("МОНГОЛД ОЁСОН", "ENGINEERED IN MONGOLIA")} <span className="text-hud">//</span>{" "}
									{t("ХЯЗГААРЛАГДМАЛ ЦУВРАЛ", "LIMITED DROP")} <span className="text-hud">//</span>{" "}
									{t("ДАХИН ГАРАХГҮЙ", "NO RESTOCK")} <span className="text-hud">//</span>
								</span>
							))}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
