import { useEffect, useState } from "react";
import type { ConferenceContent } from "../../types/conference";
import styles from "./Header.module.css";

interface HeaderProps {
  header: ConferenceContent["header"];
}

export function Header({ header }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    // Matches globals.css scroll-padding-top; anchor scrolling lands here.
    const offset = 80;

    const update = () => {
      setScrolled(window.scrollY > 4);

      if (sections.length === 0) return;

      let current = "";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= offset) {
          current = section.id;
        }
      });

      setActiveSection((prev) => (current && current !== prev ? current : prev));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
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
