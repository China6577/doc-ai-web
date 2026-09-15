import { useEffect, useRef, useState } from "react";
import type { ConferenceContent } from "../../types/conference";
import styles from "./Header.module.css";

interface HeaderProps {
  header: ConferenceContent["header"];
}

export function Header({ header }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [ignoreObserver, setIgnoreObserver] = useState(false);
  const ignoreTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (ignoreObserver) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      if (ignoreTimeoutRef.current) {
        window.clearTimeout(ignoreTimeoutRef.current);
      }
    };
  }, [ignoreObserver]);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIgnoreObserver(true);
    if (ignoreTimeoutRef.current) {
      window.clearTimeout(ignoreTimeoutRef.current);
    }
    ignoreTimeoutRef.current = window.setTimeout(() => {
      setIgnoreObserver(false);
    }, 700);
  };

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
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${styles.navLink} ${activeSection === item.id ? styles.active : ""}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
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
            className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.mobileActive : ""}`}
            onClick={() => {
              handleNavClick(item.id);
              closeMenu();
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
