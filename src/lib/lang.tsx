"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "mn" | "en";

type LangContextValue = {
	lang: Lang;
	setLang: (l: Lang) => void;
	toggle: () => void;
	/** pick the string for the active language */
	t: (mn: string, en: string) => string;
};

const LangContext = createContext<LangContextValue | null>(null);
const STORAGE_KEY = "bortsog_lang";

export function LangProvider({ children }: { children: ReactNode }) {
	const [lang, setLangState] = useState<Lang>("mn");

	useEffect(() => {
		try {
			const saved = localStorage.getItem(STORAGE_KEY);
			if (saved === "en" || saved === "mn") setLangState(saved);
		} catch {
			/* ignore */
		}
	}, []);

	const setLang = useCallback((l: Lang) => {
		setLangState(l);
		try {
			localStorage.setItem(STORAGE_KEY, l);
		} catch {
			/* ignore */
		}
		if (typeof document !== "undefined") document.documentElement.lang = l;
	}, []);

	const value = useMemo<LangContextValue>(
		() => ({
			lang,
			setLang,
			toggle: () => setLang(lang === "mn" ? "en" : "mn"),
			t: (mn: string, en: string) => (lang === "en" ? en : mn),
		}),
		[lang, setLang],
	);

	return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
	const ctx = useContext(LangContext);
	if (!ctx) throw new Error("useLang must be used within LangProvider");
	return ctx;
}
