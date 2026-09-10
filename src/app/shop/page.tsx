import { Suspense } from "react";
import ShopClient from "./ShopClient";

export const metadata = { title: "Дэлгүүр — Bortsog" };

export default function ShopPage() {
	return (
		<Suspense fallback={<div className="mx-auto max-w-6xl px-4 py-16 text-sm text-muted sm:px-6">Ачаалж байна…</div>}>
			<ShopClient />
		</Suspense>
	);
}
