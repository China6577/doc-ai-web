import type { ConferenceContent } from "../../types/conference";
import { useReveal } from "../../hooks/useReveal";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import styles from "./Publication.module.css";

interface PublicationProps {
  publication: ConferenceContent["publication"];
}

export function Publication({ publication }: PublicationProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      className={`${styles.section} reveal`}
      ref={ref}
      aria-labelledby="publication-heading"
    >
      <div className={styles.inner}>
        <SectionHeader
          heading={publication.heading}
          subheading={publication.subheading}
        />
        <div className={styles.highlight}>
          <p className={styles.journalName}>{publication.journalName}</p>
          <p className={styles.specialIssue}>{publication.specialIssue}</p>
        </div>
        <div className={styles.body}>
          {publication.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
