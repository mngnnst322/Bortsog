import Link from "next/link";

export const metadata = { title: "Хүслийн жагсаалт — Bortsog" };

export default function WishlistPage() {
	return (
		<div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
			<h1 className="font-display text-2xl font-bold">Хүслийн жагсаалт хоосон байна</h1>
			<p className="mt-2 text-sm text-muted">Таалагдсан бараагаа ♡ дарж энд хадгална.</p>
			<Link
				href="/shop"
				className="mt-6 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background"
			>
				Дэлгүүр рүү очих
			</Link>
		</div>
	);
}
