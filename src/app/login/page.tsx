"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/lib/lang";

export default function LoginPage() {
	const { t } = useLang();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [show, setShow] = useState(false);
	const [note, setNote] = useState<string | null>(null);

	const DISABLED = t("Энэ нь жишээ сайт тул нэвтрэлт идэвхгүй байна.", "This is a sample site, so sign-in is disabled.");

	function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (!email || !password) {
			setNote(t("И-мэйл болон нууц үгээ оруулна уу.", "Enter your email and password."));
			return;
		}
		setNote(DISABLED);
	}

	const label = "mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted";
	const input =
		"w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground";

	return (
		<div className="mx-auto flex max-w-md flex-col px-4 py-16 sm:px-6">
			<div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
				<h1 className="font-display text-3xl font-bold tracking-tight">{t("Нэвтрэх", "Sign in")}</h1>

				<form onSubmit={onSubmit} className="mt-8 space-y-5">
					<div>
						<label htmlFor="email" className={label}>
							{t("И-мэйл", "Email")}
						</label>
						<input
							id="email"
							type="email"
							autoComplete="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className={input}
						/>
					</div>

					<div>
						<label htmlFor="password" className={label}>
							{t("Нууц үг", "Password")}
						</label>
						<div className="flex gap-2">
							<input
								id="password"
								type={show ? "text" : "password"}
								autoComplete="current-password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className={input}
							/>
							<button
								type="button"
								onClick={() => setShow((v) => !v)}
								className="shrink-0 rounded-md border border-border px-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
							>
								{show ? t("Нуух", "Hide") : t("Харах", "Show")}
							</button>
						</div>
					</div>

					<button
						type="submit"
						className="w-full rounded-md bg-hud py-3 text-sm font-semibold uppercase tracking-[0.15em] text-background transition-opacity hover:opacity-90"
					>
						{t("Код авах", "Get code")}
					</button>

					{note && <p className="text-center text-xs text-muted">{note}</p>}

					<p className="text-center">
						<Link
							href="/login"
							className="text-xs font-semibold uppercase tracking-[0.15em] text-muted hover:text-foreground"
						>
							{t("Нууц үгээ мартсан уу?", "Forgot your password?")}
						</Link>
					</p>
				</form>

				<div className="my-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
					<span className="h-px flex-1 bg-border" />
					{t("Эсвэл Google-ээр", "Or with Google")}
					<span className="h-px flex-1 bg-border" />
				</div>

				<button
					type="button"
					onClick={() => setNote(DISABLED)}
					className="flex w-full items-center justify-center gap-3 rounded-md border border-border bg-background py-3 text-sm font-medium transition-colors hover:border-foreground"
				>
					<svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4">
						<path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.75-6-6.1S8.7 5.9 12 5.9c1.9 0 3.16.8 3.9 1.5l2.65-2.55C16.9 2.7 14.7 1.7 12 1.7 6.8 1.7 2.6 5.9 2.6 12S6.8 22.3 12 22.3c6 0 9.9-4.2 9.9-10.1 0-.68-.07-1.2-.17-1.7H12Z" />
					</svg>
					Continue with Google
				</button>

				<p className="mt-7 text-center text-xs font-semibold uppercase tracking-[0.15em] text-muted">
					{t("Бүртгэлгүй юу?", "No account?")}{" "}
					<Link href="/register" className="text-foreground hover:underline">
						{t("Бүртгүүлэх", "Sign up")}
					</Link>
				</p>
			</div>
		</div>
	);
}
