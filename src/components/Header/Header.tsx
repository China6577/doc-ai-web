import { useEffect, useState } from "react";
import type { ConferenceContent, Language } from "../../types/conference";
import styles from "./Header.module.css";

interface HeaderProps {
  header: ConferenceContent["header"];
  language: Language;
  onToggleLanguage: () => void;
}

export function Header({ header, language, onToggleLanguage }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`${styles.header} ${scrolled || menuOpen ? styles.scrolled : ""}`}
    >
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} onClick={closeMenu}>
          {header.brand}
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {header.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.langToggle}
            onClick={onToggleLanguage}
            aria-label={header.languageSwitchLabel}
          >
            <span className={language === "zh" ? styles.langActive : ""}>
              中文
            </span>
            <span className={styles.langDivider} aria-hidden="true">
              |
            </span>
            <span className={language === "en" ? styles.langActive : ""}>
              EN
            </span>
          </button>

          <button
            type="button"
            className={styles.menuButton}
            aria-label={menuOpen ? header.closeLabel : header.menuLabel}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`${styles.menuIcon} ${menuOpen ? styles.menuIconOpen : ""}`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}
        aria-label="Mobile"
        hidden={!menuOpen}
      >
        {header.nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={styles.mobileNavLink}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
