import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, products } from "@/lib/catalog";
import ProductDetail from "./ProductDetail";

export function generateStaticParams() {
	return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
	const { id } = await params;
	const product = getProduct(id);
	return { title: product ? `${product.name} — Bortsog` : "Бараа олдсонгүй" };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const product = getProduct(id);
	if (!product) notFound();

	return (
		<div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
			<Link href="/shop" className="text-sm text-muted hover:text-foreground">
				← Дэлгүүр рүү буцах
			</Link>
			<ProductDetail product={product} />
		</div>
	);
}
