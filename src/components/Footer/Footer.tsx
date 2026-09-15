import type { ConferenceContent } from "../../types/conference";
import styles from "./Footer.module.css";

interface FooterProps {
  footer: ConferenceContent["footer"];
}

export function Footer({ footer }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.brand}>{footer.brand}</p>
        <p className={styles.subtitle}>{footer.subtitle}</p>
      </div>
    </footer>
  );
}
