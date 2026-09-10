"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/catalog";

type Sort = "new" | "old" | "price-asc" | "price-desc";

const sortLabels: Record<Sort, string> = {
	new: "Шинээс хуучин",
	old: "Хуучнаас шинэ",
	"price-asc": "Үнэ: багаас их",
	"price-desc": "Үнэ: ихээс бага",
};

export default function ShopClient() {
	const params = useSearchParams();
	const initialCategory = params.get("category") ?? "БҮГД";

	const [category, setCategory] = useState<string>(initialCategory);
	const [sort, setSort] = useState<Sort>("new");
	const [inStockOnly, setInStockOnly] = useState(false);

	const list = useMemo(() => {
		let out = products.slice();
		if (category !== "БҮГД") out = out.filter((p) => p.category === category);
		if (inStockOnly) out = out.filter((p) => p.inStock);
		out.sort((a, b) => {
			switch (sort) {
				case "old":
					return a.order - b.order;
				case "price-asc":
					return a.price - b.price;
				case "price-desc":
					return b.price - a.price;
				default:
					return b.order - a.order;
			}
		});
		return out;
	}, [category, sort, inStockOnly]);

	return (
		<div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
			<h1 className="mb-6 font-display text-3xl font-bold">Бүх бараа</h1>

			<div className="mb-8 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
				<div className="inline-flex max-w-full items-center gap-1 self-start overflow-x-auto rounded-2xl border border-border bg-card p-1.5">
					{["БҮГД", ...categories].map((c) => {
						const active = category === c;
						return (
							<button
								key={c}
								onClick={() => setCategory(c)}
								className={
									"shrink-0 rounded-xl px-5 py-2 text-sm transition-colors " +
									(active
										? "border border-white/10 bg-white/[0.04] text-foreground"
										: "border border-transparent text-muted hover:text-foreground")
								}
							>
								<span className={active ? "border-b-2 border-foreground pb-0.5 font-semibold" : "font-medium"}>
									{c}
								</span>
							</button>
						);
					})}
				</div>

				<div className="flex items-center gap-4">
					<label className="flex items-center gap-2 text-sm text-muted">
						<input
							type="checkbox"
							checked={inStockOnly}
							onChange={(e) => setInStockOnly(e.target.checked)}
							className="accent-white"
						/>
						Зөвхөн бэлэн
					</label>
					<select
						value={sort}
						onChange={(e) => setSort(e.target.value as Sort)}
						className="rounded-md border border-border bg-card px-3 py-1.5 text-sm"
					>
						{(Object.keys(sortLabels) as Sort[]).map((s) => (
							<option key={s} value={s}>
								{sortLabels[s]}
							</option>
						))}
					</select>
				</div>
			</div>

			<p className="mb-6 text-sm text-muted">Нийт {list.length} бараа</p>

			{list.length === 0 ? (
				<p className="py-16 text-center text-sm text-muted">Энэ ангилалд бараа хараахан алга байна.</p>
			) : (
				<div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
					{list.map((p) => (
						<ProductCard key={p.id} product={p} />
					))}
				</div>
			)}
		</div>
	);
}
