import type { ConferenceContent } from "../../types/conference";
import { useReveal } from "../../hooks/useReveal";
import styles from "./ConferenceHighlights.module.css";

interface ConferenceHighlightsProps {
  highlights: ConferenceContent["highlights"];
}

export function ConferenceHighlights({ highlights }: ConferenceHighlightsProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id={highlights.id}
      className={`${styles.section} reveal`}
      ref={ref}
      aria-label={highlights.heading}
    >
      <div className={styles.inner}>
        <dl className={styles.grid}>
          {highlights.items.map((item) => (
            <div key={item.label} className={styles.item}>
              <dt className={styles.label}>{item.label}</dt>
              <dd className={styles.value}>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
