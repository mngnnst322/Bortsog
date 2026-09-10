"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { useLang } from "@/lib/lang";

function IconButton({
	href,
	label,
	badge,
	children,
}: {
	href: string;
	label: string;
	badge?: number;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			aria-label={label}
			className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-foreground hover:text-foreground"
		>
			{children}
			{badge != null && badge > 0 && (
				<span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-foreground px-1 text-[10px] font-semibold text-background">
					{badge}
				</span>
			)}
		</Link>
	);
}

export default function Header() {
	const pathname = usePathname();
	const { count } = useCart();
	const { lang, toggle, t } = useLang();
	const [open, setOpen] = useState(false);

	const nav = [
		{ href: "/shop", label: t("Дэлгүүр", "Shop") },
		{ href: "/about", label: t("Бидний тухай", "About") },
		{ href: "/wishlist", label: t("Хүслийн жагсаалт", "Wishlist") },
	];

	return (
		<header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
			<div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-8">
				<button
					className="sm:hidden"
					aria-label={t("Цэс", "Menu")}
					onClick={() => setOpen((v) => !v)}
				>
					<span className="block h-0.5 w-6 bg-foreground" />
					<span className="mt-1.5 block h-0.5 w-6 bg-foreground" />
					<span className="mt-1.5 block h-0.5 w-6 bg-foreground" />
				</button>

				<Link href="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-[0.25em]">
					BORTSOG
					<svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
						<path d="M20 3s-9 .5-13 4.5S3 20 3 20s.9-8.1 5-12 12-5 12-5Zm-6.6 7.4C10 12.8 7.7 16.5 6.6 20l1.5-.2c1-3.1 3-6.3 6-8.6l-.7-.8Z" />
					</svg>
				</Link>

				<nav className="hidden gap-8 text-sm sm:flex">
					{nav.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={
								(pathname === item.href ? "text-foreground" : "text-muted") +
								" transition-colors hover:text-foreground"
							}
						>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<button
						onClick={toggle}
						aria-label={t("Хэл солих", "Switch language")}
						className="font-mono flex h-10 items-center rounded-full border border-border px-3 text-[11px] uppercase tracking-widest text-muted transition-colors hover:border-foreground hover:text-foreground"
					>
						{lang === "mn" ? "MN" : "EN"}
					</button>
					<IconButton href="/wishlist" label={t("Хүслийн жагсаалт", "Wishlist")}>
						<svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
							<path d="M12 20s-7-4.35-9.5-8.5C.7 8.5 2 5 5.5 5c2 0 3.5 1.2 4.5 2.5C11 6.2 12.5 5 14.5 5 18 5 19.3 8.5 21.5 11.5 19 15.65 12 20 12 20Z" />
						</svg>
					</IconButton>
					<IconButton href="/cart" label={t("Сагс", "Cart")} badge={count}>
						<svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
							<path d="M6 8h12l1 12H5L6 8Z" />
							<path d="M9 8V6a3 3 0 0 1 6 0v2" />
						</svg>
					</IconButton>
					<IconButton href="/login" label={t("Нэвтрэх", "Sign in")}>
						<svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
							<circle cx="12" cy="8" r="3.5" />
							<path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" />
						</svg>
					</IconButton>
				</div>
			</div>

			{open && (
				<nav className="flex flex-col gap-1 border-t border-border px-4 py-2 text-sm sm:hidden">
					{nav.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							onClick={() => setOpen(false)}
							className="py-2 text-muted hover:text-foreground"
						>
							{item.label}
						</Link>
					))}
					<Link
						href="/login"
						onClick={() => setOpen(false)}
						className="py-2 text-muted hover:text-foreground"
					>
						{t("Нэвтрэх", "Sign in")}
					</Link>
				</nav>
			)}
		</header>
	);
}
