import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import { activeProducts, categories, legacyProducts } from "@/lib/catalog";

export default function Home() {
	const featured = [...activeProducts].sort((a, b) => b.order - a.order).slice(0, 8);

	return (
		<>
			<HeroSlider />

			<section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
				<div className="flex flex-wrap gap-3">
					{categories.map((c) => (
						<Link
							key={c}
							href={`/shop?category=${encodeURIComponent(c)}`}
							className="rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-foreground hover:text-foreground"
						>
							{c}
						</Link>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="mb-6 flex items-end justify-between">
					<h2 className="font-display text-2xl font-bold">Шинэ бараа</h2>
					<Link href="/shop" className="text-sm text-muted hover:text-foreground">
						Бүгд →
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
					<h2 className="mb-2 font-display text-2xl font-bold">Өмнө гарч байсан бүтээгдэхүүн</h2>
					<p className="mb-6 text-sm text-muted">Эдгээр загвар дахин үйлдвэрлэгдэхгүй.</p>
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
