import type { ConferenceContent } from "../../types/conference";
import { useReveal } from "../../hooks/useReveal";
import styles from "./ConferenceOverview.module.css";

interface ConferenceOverviewProps {
  overview: ConferenceContent["overview"];
}

export function ConferenceOverview({ overview }: ConferenceOverviewProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id={overview.id}
      className={`${styles.section} reveal`}
      ref={ref}
      aria-labelledby="overview-heading"
    >
      <div className={styles.inner}>
        <h2 id="overview-heading" className={styles.heading}>
          {overview.heading}
        </h2>
        {overview.subheading ? (
          <p className={styles.subheading}>{overview.subheading}</p>
        ) : null}
        <div className={styles.body}>
          {overview.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
