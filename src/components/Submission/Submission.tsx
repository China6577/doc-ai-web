import type { ConferenceContent } from "../../types/conference";
import { useReveal } from "../../hooks/useReveal";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import styles from "./Submission.module.css";

interface SubmissionProps {
  submission: ConferenceContent["submission"];
}

export function Submission({ submission }: SubmissionProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id={submission.id}
      className={`${styles.section} reveal`}
      ref={ref}
      aria-labelledby="submission-heading"
    >
      <div className={styles.inner}>
        <SectionHeader
          heading={submission.heading}
          subheading={submission.subheading}
        />
        <div className={styles.statusCard}>
          <span className={styles.badge}>{submission.statusBadge}</span>
          <p className={styles.description}>{submission.description}</p>
        </div>
      </div>
    </section>
  );
}
