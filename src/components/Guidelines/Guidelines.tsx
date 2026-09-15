import type { ConferenceContent } from "../../types/conference";
import { useReveal } from "../../hooks/useReveal";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import styles from "./Guidelines.module.css";

interface GuidelinesProps {
  guidelines: ConferenceContent["guidelines"];
}

export function Guidelines({ guidelines }: GuidelinesProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      className={`${styles.section} reveal`}
      ref={ref}
      aria-labelledby="guidelines-heading"
    >
      <div className={styles.inner}>
        <SectionHeader
          heading={guidelines.heading}
          subheading={guidelines.subheading}
        />
        <div className={styles.list}>
          {guidelines.items.map((item) => (
            <article key={item.number} className={styles.item}>
              <span className={styles.number} aria-hidden="true">
                {item.number}
              </span>
              <div className={styles.content}>
                <h3 className={styles.title}>{item.title}</h3>
                {item.highlight ? (
                  <p className={styles.highlightBadge}>{item.highlight}</p>
                ) : null}
                {item.paragraphs.map((paragraph, index) => (
                  <p key={index} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
                {item.link ? (
                  <a
                    className={styles.link}
                    href={item.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.link.label} ↗
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
