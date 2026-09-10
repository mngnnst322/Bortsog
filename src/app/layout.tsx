import type { Metadata } from "next";
import { Oxanium, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import { LangProvider } from "@/lib/lang";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tech = Oxanium({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
	variable: "--font-tech",
});

const mono = Share_Tech_Mono({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-techmono",
});

export const metadata: Metadata = {
	title: "Bortsog — жишээ дэлгүүр",
	description: "Bortsog маягийн онлайн хувцасны дэлгүүр (жишээ).",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="mn" className={`${tech.variable} ${mono.variable}`}>
			<body>
				<LangProvider>
					<CartProvider>
						<Header />
						<main className="min-h-[60vh]">{children}</main>
						<Footer />
					</CartProvider>
				</LangProvider>
			</body>
		</html>
	);
}
