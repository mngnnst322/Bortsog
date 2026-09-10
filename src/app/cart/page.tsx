"use client";

import Link from "next/link";
import { getProduct } from "@/lib/catalog";
import { formatMNT, useCart } from "@/lib/cart";
import { useLang } from "@/lib/lang";

const DELIVERY = 10000;

export default function CartPage() {
	const { items, subtotal, setQty, remove, clear } = useCart();
	const { t } = useLang();

	if (items.length === 0) {
		return (
			<div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
				<h1 className="font-display text-2xl font-bold">{t("Сагс хоосон байна", "Your cart is empty")}</h1>
				<p className="mt-2 text-sm text-muted">{t("Дэлгүүрээс бараа сонгож эхлээрэй.", "Start by picking something from the shop.")}</p>
				<Link
					href="/shop"
					className="mt-6 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background"
				>
					{t("Дэлгүүр рүү очих", "Go to shop")}
				</Link>
			</div>
		);
	}

	return (
		<div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
			<div className="mb-8 flex items-center justify-between">
				<h1 className="font-display text-3xl font-bold">{t("Сагс", "Cart")}</h1>
				<button onClick={clear} className="text-sm text-muted hover:text-foreground">
					{t("Сагс цэвэрлэх", "Clear cart")}
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
											{t("Устгах", "Remove")}
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<div className="h-max rounded-lg border border-border bg-card p-6">
					<h2 className="font-display text-lg font-bold">{t("Захиалгын дүн", "Order summary")}</h2>
					<div className="mt-4 space-y-2 text-sm">
						<div className="flex justify-between">
							<span className="text-muted">{t("Барааны дүн", "Subtotal")}</span>
							<span>{formatMNT(subtotal)}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-muted">{t("Хүргэлт (A бүс)", "Delivery (zone A)")}</span>
							<span>{formatMNT(DELIVERY)}</span>
						</div>
						<div className="mt-3 flex justify-between border-t border-border pt-3 text-base font-semibold">
							<span>{t("Нийт", "Total")}</span>
							<span>{formatMNT(subtotal + DELIVERY)}</span>
						</div>
					</div>
					<button className="mt-6 w-full rounded-full bg-foreground py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90">
						{t("Захиалга баталгаажуулах", "Place order")}
					</button>
					<p className="mt-3 text-xs text-muted">
						{t(
							"Төлбөрийг QPay-ээр төлнө. Энэ нь жишээ сайт тул бодит төлбөр хийгдэхгүй.",
							"Payment via QPay. This is a sample site, so no real payment is taken.",
						)}
					</p>
				</div>
			</div>
		</div>
	);
}
