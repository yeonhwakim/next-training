import styles from "./layout.module.css";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className={styles.nav}>
        <a>여자</a>
        <a>남자</a>
      </nav>
      <section>{children}</section>
    </div>
  );
}
