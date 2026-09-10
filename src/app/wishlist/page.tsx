"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";

export default function WishlistPage() {
	const { t } = useLang();
	return (
		<div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
			<h1 className="font-display text-2xl font-bold">
				{t("Хүслийн жагсаалт хоосон байна", "Your wishlist is empty")}
			</h1>
			<p className="mt-2 text-sm text-muted">
				{t("Таалагдсан бараагаа ♡ дарж энд хадгална.", "Tap ♡ on anything you like to save it here.")}
			</p>
			<Link
				href="/shop"
				className="mt-6 inline-block rounded-full bg-hud px-6 py-3 text-sm font-semibold text-background"
			>
				{t("Дэлгүүр рүү очих", "Go to shop")}
			</Link>
		</div>
	);
}
