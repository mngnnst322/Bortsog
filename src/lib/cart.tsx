"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { formatMNT, getProduct } from "./catalog";

export type CartItem = {
	id: string;
	size: string;
	color: string;
	qty: number;
};

type CartContextValue = {
	items: CartItem[];
	count: number;
	subtotal: number;
	add: (item: CartItem) => void;
	setQty: (id: string, size: string, color: string, qty: number) => void;
	remove: (id: string, size: string, color: string) => void;
	clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "bortsog_cart_v1";

function sameLine(a: CartItem, b: Pick<CartItem, "id" | "size" | "color">) {
	return a.id === b.id && a.size === b.size && a.color === b.color;
}

export function CartProvider({ children }: { children: ReactNode }) {
	const [items, setItems] = useState<CartItem[]>([]);
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (raw) setItems(JSON.parse(raw));
		} catch {
			/* ignore */
		}
		setHydrated(true);
	}, []);

	useEffect(() => {
		if (!hydrated) return;
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
		} catch {
			/* ignore */
		}
	}, [items, hydrated]);

	const value = useMemo<CartContextValue>(() => {
		const count = items.reduce((n, it) => n + it.qty, 0);
		const subtotal = items.reduce((sum, it) => sum + (getProduct(it.id)?.price ?? 0) * it.qty, 0);

		return {
			items,
			count,
			subtotal,
			add: (item) =>
				setItems((prev) => {
					const existing = prev.find((p) => sameLine(p, item));
					if (existing) {
						return prev.map((p) => (sameLine(p, item) ? { ...p, qty: p.qty + item.qty } : p));
					}
					return [...prev, item];
				}),
			setQty: (id, size, color, qty) =>
				setItems((prev) =>
					prev
						.map((p) => (sameLine(p, { id, size, color }) ? { ...p, qty: Math.max(0, qty) } : p))
						.filter((p) => p.qty > 0),
				),
			remove: (id, size, color) => setItems((prev) => prev.filter((p) => !sameLine(p, { id, size, color }))),
			clear: () => setItems([]),
		};
	}, [items]);

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
	const ctx = useContext(CartContext);
	if (!ctx) throw new Error("useCart must be used within CartProvider");
	return ctx;
}

export { formatMNT };
