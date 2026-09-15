import type { ConferenceContent } from "../../types/conference";
import { useReveal } from "../../hooks/useReveal";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import styles from "./ImportantDates.module.css";

interface ImportantDatesProps {
  dates: ConferenceContent["dates"];
}

export function ImportantDates({ dates }: ImportantDatesProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id={dates.id}
      className={`${styles.section} reveal`}
      ref={ref}
      aria-labelledby="dates-heading"
    >
      <div className={styles.inner}>
        <SectionHeader heading={dates.heading} subheading={dates.subheading} />
        <ol className={styles.timeline}>
          {dates.items.map((item) => (
            <li key={item.date} className={styles.entry}>
              <span className={styles.dot} aria-hidden="true" />
              <p className={styles.date}>{item.date}</p>
              <p className={styles.label}>{item.label}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
