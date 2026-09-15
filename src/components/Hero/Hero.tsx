import type { ConferenceContent } from "../../types/conference";
import styles from "./Hero.module.css";

interface HeroProps {
  hero: ConferenceContent["hero"];
}

export function Hero({ hero }: HeroProps) {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.inner}>
        <p className={styles.kicker}>{hero.kicker}</p>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>{hero.titleLine1}</span>
          <span className={styles.titleLine}>{hero.titleLine2}</span>
        </h1>
        <p className={styles.subtitle}>{hero.subtitle}</p>

        <p className={styles.meta}>
          <span>{hero.datetime}</span>
          <span className={styles.metaDivider} aria-hidden="true">
            ·
          </span>
          <span>{hero.location}</span>
        </p>

        <div className={styles.deadline}>
          <span className={styles.deadlineLabel}>{hero.deadlineLabel}</span>
          <span className={styles.deadlineDate}>{hero.deadlineDate}</span>
        </div>

        <a href="#topics" className={styles.cfpLink}>
          {hero.cfpLink}
        </a>
      </div>
    </section>
  );
}
