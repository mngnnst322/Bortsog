"use client";

import { useState } from "react";
import Link from "next/link";
import { formatMNT, type Product } from "@/lib/catalog";
import { useCart } from "@/lib/cart";

export default function ProductDetail({ product }: { product: Product }) {
	const { add } = useCart();
	const [activeImage, setActiveImage] = useState(0);
	const [size, setSize] = useState(product.sizes[0] ?? "");
	const [color, setColor] = useState(product.colors[0] ?? "");
	const [added, setAdded] = useState(false);

	function handleAdd() {
		if (!product.inStock) return;
		add({ id: product.id, size, color, qty: 1 });
		setAdded(true);
		setTimeout(() => setAdded(false), 2000);
	}

	return (
		<div className="mt-6 grid gap-10 md:grid-cols-2">
			<div>
				<div className="aspect-4/5 overflow-hidden rounded-lg bg-card">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src={product.images[activeImage]} alt={product.name} className="h-full w-full object-cover" />
				</div>
				{product.images.length > 1 && (
					<div className="mt-3 flex gap-2">
						{product.images.map((src, i) => (
							<button
								key={src}
								onClick={() => setActiveImage(i)}
								className={
									"h-20 w-16 overflow-hidden rounded border " +
									(i === activeImage ? "border-foreground" : "border-border")
								}
							>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src={src} alt="" className="h-full w-full object-cover" />
							</button>
						))}
					</div>
				)}
			</div>

			<div>
				<div className="text-xs uppercase tracking-widest text-muted">{product.category}</div>
				<h1 className="mt-1 font-display text-3xl font-bold">{product.name}</h1>
				<div className="mt-1 text-sm text-muted">{product.subtitle}</div>
				<div className="mt-4 text-xl">{formatMNT(product.price)}</div>

				<div className="mt-3 text-sm">
					{product.inStock ? (
						<span className="text-emerald-400">Бэлэн байгаа</span>
					) : (
						<span className="text-muted">{product.legacy ? "Дахин гарахгүй" : "Одоогоор дууссан"}</span>
					)}
				</div>

				{product.colors.length > 0 && (
					<div className="mt-6">
						<div className="mb-2 text-sm font-medium">Өнгө</div>
						<div className="flex flex-wrap gap-2">
							{product.colors.map((c) => (
								<button
									key={c}
									onClick={() => setColor(c)}
									className={
										"rounded-full border px-3 py-1.5 text-sm " +
										(color === c ? "border-foreground" : "border-border text-muted")
									}
								>
									{c}
								</button>
							))}
						</div>
					</div>
				)}

				{product.sizes.length > 0 && (
					<div className="mt-5">
						<div className="mb-2 text-sm font-medium">Хэмжээ</div>
						<div className="flex flex-wrap gap-2">
							{product.sizes.map((s) => (
								<button
									key={s}
									onClick={() => setSize(s)}
									className={
										"rounded-md border px-3 py-2 text-sm " +
										(size === s ? "border-foreground" : "border-border text-muted")
									}
								>
									{s}
								</button>
							))}
						</div>
					</div>
				)}

				<button
					onClick={handleAdd}
					disabled={!product.inStock}
					className="mt-8 w-full rounded-full bg-foreground py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
				>
					{!product.inStock ? "Дууссан" : added ? "Сагсанд нэмэгдлээ ✓" : "Сагсанд нэмэх"}
				</button>
				<Link href="/cart" className="mt-3 block text-center text-sm text-muted hover:text-foreground">
					Сагс руу очих →
				</Link>

				{product.description && product.description !== "." && (
					<div className="mt-8 border-t border-border pt-6">
						<div className="mb-2 text-sm font-medium">Тайлбар</div>
						<p className="whitespace-pre-line text-sm text-muted">{product.description}</p>
					</div>
				)}

				<div className="mt-6 text-xs text-muted">
					A бүс дотор хүргэлт 10,000₮ · A бүсээс гадна 15,000₮ · захиалгыг 24 цагийн дотор хүргэнэ.
				</div>
			</div>
		</div>
	);
}
