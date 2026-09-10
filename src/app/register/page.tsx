"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/lib/lang";

export default function RegisterPage() {
	const { t } = useLang();
	const [form, setForm] = useState({ name: "", email: "", password: "" });
	const [note, setNote] = useState<string | null>(null);

	function set(key: keyof typeof form) {
		return (e: React.ChangeEvent<HTMLInputElement>) => setForm((f) => ({ ...f, [key]: e.target.value }));
	}

	function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (!form.name || !form.email || !form.password) {
			setNote(t("Бүх талбарыг бөглөнө үү.", "Fill in all the fields."));
			return;
		}
		setNote(t("Энэ нь жишээ сайт тул бүртгэл идэвхгүй байна.", "This is a sample site, so sign-up is disabled."));
	}

	const label = "mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted";
	const input =
		"w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground";

	return (
		<div className="mx-auto flex max-w-md flex-col px-4 py-16 sm:px-6">
			<div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
				<h1 className="font-display text-3xl font-bold tracking-tight">{t("Бүртгүүлэх", "Sign up")}</h1>

				<form onSubmit={onSubmit} className="mt-8 space-y-5">
					<div>
						<label htmlFor="name" className={label}>
							{t("Нэр", "Name")}
						</label>
						<input id="name" value={form.name} onChange={set("name")} className={input} />
					</div>
					<div>
						<label htmlFor="email" className={label}>
							{t("И-мэйл", "Email")}
						</label>
						<input id="email" type="email" autoComplete="email" value={form.email} onChange={set("email")} className={input} />
					</div>
					<div>
						<label htmlFor="password" className={label}>
							{t("Нууц үг", "Password")}
						</label>
						<input
							id="password"
							type="password"
							autoComplete="new-password"
							value={form.password}
							onChange={set("password")}
							className={input}
						/>
					</div>

					<button
						type="submit"
						className="w-full rounded-md bg-hud py-3 text-sm font-semibold uppercase tracking-[0.15em] text-background transition-opacity hover:opacity-90"
					>
						{t("Бүртгүүлэх", "Sign up")}
					</button>

					{note && <p className="text-center text-xs text-muted">{note}</p>}
				</form>

				<p className="mt-7 text-center text-xs font-semibold uppercase tracking-[0.15em] text-muted">
					{t("Бүртгэлтэй юу?", "Already have an account?")}{" "}
					<Link href="/login" className="text-foreground hover:underline">
						{t("Нэвтрэх", "Sign in")}
					</Link>
				</p>
			</div>
		</div>
	);
}
