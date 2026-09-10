"use client";

import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import { activeProducts, categories, legacyProducts } from "@/lib/catalog";
import { useLang } from "@/lib/lang";

export default function Home() {
	const { t } = useLang();
	const featured = [...activeProducts].sort((a, b) => b.order - a.order).slice(0, 8);

	return (
		<>
			<HeroSlider />

			<section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
				<div className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-hud">
					// {t("Ангилал", "Categories")}
				</div>
				<div className="grid gap-4 sm:grid-cols-2">
					{categories.map((c, i) => (
						<Link
							key={c}
							href={`/shop?category=${encodeURIComponent(c)}`}
							className="hud-box group flex items-center justify-between px-6 py-8 transition-colors hover:bg-hud/5"
						>
							<span className="flex items-baseline gap-4">
								<span className="font-mono text-sm text-hud">{String(i + 1).padStart(2, "0")}</span>
								<span className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
									{c}
								</span>
							</span>
							<span className="font-mono text-lg text-muted transition-transform group-hover:translate-x-1 group-hover:text-foreground">
								→
							</span>
						</Link>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="mb-6 flex items-end justify-between">
					<h2 className="font-display text-2xl font-bold">{t("Шинэ бараа", "New arrivals")}</h2>
					<Link href="/shop" className="text-sm text-muted hover:text-foreground">
						{t("Бүгд", "View all")} →
					</Link>
				</div>
				<div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
					{featured.map((p) => (
						<ProductCard key={p.id} product={p} />
					))}
				</div>
			</section>

			{legacyProducts.length > 0 && (
				<section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
					<h2 className="mb-2 font-display text-2xl font-bold">{t("Өмнө гарч байсан бүтээгдэхүүн", "Past releases")}</h2>
					<p className="mb-6 text-sm text-muted">{t("Эдгээр загвар дахин үйлдвэрлэгдэхгүй.", "These pieces will not be restocked.")}</p>
					<div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
						{legacyProducts.map((p) => (
							<ProductCard key={p.id} product={p} />
						))}
					</div>
				</section>
			)}
		</>
	);
}
