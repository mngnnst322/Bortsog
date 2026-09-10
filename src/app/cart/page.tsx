"use client";

import Link from "next/link";
import { getProduct } from "@/lib/catalog";
import { formatMNT, useCart } from "@/lib/cart";

const DELIVERY = 10000;

export default function CartPage() {
	const { items, subtotal, setQty, remove, clear } = useCart();

	if (items.length === 0) {
		return (
			<div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
				<h1 className="font-display text-2xl font-bold">Сагс хоосон байна</h1>
				<p className="mt-2 text-sm text-muted">Дэлгүүрээс бараа сонгож эхлээрэй.</p>
				<Link
					href="/shop"
					className="mt-6 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background"
				>
					Дэлгүүр рүү очих
				</Link>
			</div>
		);
	}

	return (
		<div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
			<div className="mb-8 flex items-center justify-between">
				<h1 className="font-display text-3xl font-bold">Сагс</h1>
				<button onClick={clear} className="text-sm text-muted hover:text-foreground">
					Сагс цэвэрлэх
				</button>
			</div>

			<div className="grid gap-10 lg:grid-cols-[1fr_320px]">
				<div className="divide-y divide-border border-y border-border">
					{items.map((it) => {
						const product = getProduct(it.id);
						if (!product) return null;
						return (
							<div key={`${it.id}-${it.size}-${it.color}`} className="flex gap-4 py-5">
								<Link href={`/products/${it.id}`} className="h-28 w-24 shrink-0 overflow-hidden rounded bg-card">
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
								</Link>
								<div className="flex flex-1 flex-col">
									<div className="flex justify-between gap-4">
										<div>
											<Link href={`/products/${it.id}`} className="text-sm font-medium hover:underline">
												{product.name}
											</Link>
											<div className="mt-0.5 text-xs text-muted">
												{it.color} · {it.size}
											</div>
										</div>
										<div className="text-sm">{formatMNT(product.price * it.qty)}</div>
									</div>
									<div className="mt-auto flex items-center justify-between">
										<div className="flex items-center rounded-md border border-border">
											<button
												onClick={() => setQty(it.id, it.size, it.color, it.qty - 1)}
												className="px-3 py-1 text-muted hover:text-foreground"
											>
												−
											</button>
											<span className="min-w-8 text-center text-sm">{it.qty}</span>
											<button
												onClick={() => setQty(it.id, it.size, it.color, it.qty + 1)}
												className="px-3 py-1 text-muted hover:text-foreground"
											>
												+
											</button>
										</div>
										<button
											onClick={() => remove(it.id, it.size, it.color)}
											className="text-xs text-muted hover:text-foreground"
										>
											Устгах
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<div className="h-max rounded-lg border border-border bg-card p-6">
					<h2 className="font-display text-lg font-bold">Захиалгын дүн</h2>
					<div className="mt-4 space-y-2 text-sm">
						<div className="flex justify-between">
							<span className="text-muted">Барааны дүн</span>
							<span>{formatMNT(subtotal)}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-muted">Хүргэлт (A бүс)</span>
							<span>{formatMNT(DELIVERY)}</span>
						</div>
						<div className="mt-3 flex justify-between border-t border-border pt-3 text-base font-semibold">
							<span>Нийт</span>
							<span>{formatMNT(subtotal + DELIVERY)}</span>
						</div>
					</div>
					<button className="mt-6 w-full rounded-full bg-foreground py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90">
						Захиалга баталгаажуулах
					</button>
					<p className="mt-3 text-xs text-muted">
						Төлбөрийг QPay-ээр төлнө. Энэ нь жишээ сайт тул бодит төлбөр хийгдэхгүй.
					</p>
				</div>
			</div>
		</div>
	);
}
