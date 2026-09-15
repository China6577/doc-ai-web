import type { ConferenceContent } from "../../types/conference";
import { useReveal } from "../../hooks/useReveal";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import styles from "./Acknowledgment.module.css";

interface AcknowledgmentProps {
  acknowledgment: ConferenceContent["acknowledgment"];
}

export function Acknowledgment({ acknowledgment }: AcknowledgmentProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id={acknowledgment.id}
      className={`${styles.section} reveal`}
      ref={ref}
      aria-labelledby="acknowledgment-heading"
    >
      <div className={styles.inner}>
        <SectionHeader heading={acknowledgment.heading} />
        <p className={styles.text}>{acknowledgment.text}</p>
      </div>
    </section>
  );
}
