import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
		<html lang="mn">
			<body>
				<CartProvider>
					<Header />
					<main className="min-h-[60vh]">{children}</main>
					<Footer />
				</CartProvider>
			</body>
		</html>
	);
}
