import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";
import type { Metadata } from "next";
import { Roboto, Open_Sans, Nanum_Gothic } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const sans = Open_Sans({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});
const namum = Nanum_Gothic({
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Next Training",
  description: "Next Training",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <header className={[styles.header, sans.className].join(" ")}>
          <h1 className={namum.className}>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
