"use client";

import Link from "next/link";
import { formatMNT, type Product } from "@/lib/catalog";
import { useLang } from "@/lib/lang";

export default function ProductCard({ product }: { product: Product }) {
	const { t } = useLang();
	return (
		<Link href={`/products/${product.id}`} className="group block">
			<div className="relative aspect-4/5 overflow-hidden rounded-lg bg-card">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={product.images[0]}
					alt={product.name}
					loading="lazy"
					className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				{!product.inStock && (
					<span className="absolute left-3 top-3 rounded bg-background/80 px-2 py-1 text-xs text-muted">
						{product.legacy ? t("Дахин гарахгүй", "No restock") : t("Дууссан", "Sold out")}
					</span>
				)}
			</div>
			<div className="mt-3">
				<div className="text-sm font-medium">{product.name}</div>
				<div className="text-xs text-muted">{product.subtitle}</div>
				<div className="mt-1 font-mono text-sm text-hud">{formatMNT(product.price)}</div>
			</div>
		</Link>
	);
}
