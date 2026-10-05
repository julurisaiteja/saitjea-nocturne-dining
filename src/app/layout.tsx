import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { Karla } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import { WishlistProvider } from "@/lib/wishlist";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AiAssistant } from "@/components/AiAssistant";
import { StickyMobileCta } from "@/components/StickyMobileCta";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400","500","600","700"],
});
const body = Karla({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400","500","600"],
});

export const metadata: Metadata = {
  title: "Nocturne",
  description: "A table that arrives after midnight logic.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-style="surreal-dining">
      <body className={`${display.variable} ${body.variable} antialiased pb-20 md:pb-0`}>
        <CartProvider slug="nocturne-dining">
          <WishlistProvider slug="nocturne-dining">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
            <AiAssistant />
            <StickyMobileCta />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
