import Link from "next/link";

const menu = [
	{ href: "/", label: "Нүүр" },
	{ href: "/shop", label: "Дэлгүүр" },
	{ href: "/about", label: "Бидний тухай" },
	{ href: "/cart", label: "Сагс" },
];

const services = [
	{ href: "/about", label: "Хүргэлтийн мэдээлэл" },
	{ href: "/about", label: "Хэмжээний зөвлөгөө" },
	{ href: "/about", label: "Аюулгүй төлбөр" },
	{ href: "/about", label: "Захиалгын тусламж" },
];

function Leaf() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
			<path d="M20 3s-9 .5-13 4.5S3 20 3 20s.9-8.1 5-12 12-5 12-5Zm-6.6 7.4C10 12.8 7.7 16.5 6.6 20l1.5-.2c1-3.1 3-6.3 6-8.6l-.7-.8Z" />
		</svg>
	);
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			aria-label={label}
			className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-foreground hover:text-foreground"
		>
			{children}
		</a>
	);
}

export default function Footer() {
	return (
		<footer className="mt-24 border-t border-border bg-card/40">
			<div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
				<div>
					<div className="flex items-center gap-2 font-display text-lg font-bold tracking-[0.25em]">
						BORTSOG
						<Leaf />
					</div>
					<p className="mt-6 font-display text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl">
						BORTSOG
						<br />
						NEVER DIE
					</p>
					<div className="mt-8 flex gap-3">
						<Social href="https://www.facebook.com/profile.php" label="Facebook">
							<svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
								<path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V4c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V10H8v3h2.5v8h3Z" />
							</svg>
						</Social>
						<Social href="https://www.instagram.com/bortsog_mongolia/" label="Instagram">
							<svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
								<rect x="3" y="3" width="18" height="18" rx="5" />
								<circle cx="12" cy="12" r="4" />
								<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
							</svg>
						</Social>
					</div>
				</div>

				<div className="text-sm">
					<div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">Цэс</div>
					<ul className="space-y-2">
						{menu.map((item) => (
							<li key={item.label}>
								<Link href={item.href} className="text-muted transition-colors hover:text-foreground">
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="text-sm">
					<div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">Үйлчилгээ</div>
					<ul className="space-y-2">
						{services.map((item) => (
							<li key={item.label}>
								<Link href={item.href} className="text-muted transition-colors hover:text-foreground">
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="text-sm">
					<div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">Холбоо барих</div>
					<ul className="space-y-3 text-muted">
						<li>Даваа – Ням / 12:00 – 20:00</li>
						<li className="flex items-center gap-2">
							<svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
								<path d="M6.6 3h3l1.5 4-2 1.4a12 12 0 0 0 5.5 5.5l1.4-2 4 1.5v3A2 2 0 0 1 23 22 19 19 0 0 1 2 5a2 2 0 0 1 4.6-2Z" />
							</svg>
							<a href="tel:+97694461766" className="hover:text-foreground">94461766</a>,
							<a href="tel:+97688858168" className="hover:text-foreground">88858168</a>
						</li>
						<li className="flex items-center gap-2">
							<svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
								<rect x="3" y="5" width="18" height="14" rx="2" />
								<path d="m3 7 9 6 9-6" />
							</svg>
							<a href="mailto:bortsog321@gmail.com" className="hover:text-foreground">bortsog321@gmail.com</a>
						</li>
						<li className="flex items-start gap-2">
							<svg viewBox="0 0 24 24" aria-hidden className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
								<path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
								<circle cx="12" cy="10" r="2.5" />
							</svg>
							Сүхбаатар дүүрэг, 3-р хороо, 45-р байрны зүүн тал
						</li>
					</ul>
				</div>
			</div>

			<div className="border-t border-border">
				<div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs uppercase tracking-[0.15em] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
					<span>© {new Date().getFullYear()} BORTSOG</span>
					<span>Үндэсний үйлдвэрлэгч брэнд — зөвхөн загварчлалын жишээ</span>
				</div>
			</div>
		</footer>
	);
}
