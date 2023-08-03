import Link from "next/link";
import styles from "./layout.module.css";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className={styles.nav}>
        <Link href="/products/women">여자</Link>
        <Link href="/products/man">남자</Link>
      </nav>
      <section>{children}</section>
    </div>
  );
}
