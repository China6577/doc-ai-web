import type { ConferenceContent } from "../../types/conference";
import { useReveal } from "../../hooks/useReveal";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import styles from "./Contact.module.css";

interface ContactProps {
  contact: ConferenceContent["contact"];
}

export function Contact({ contact }: ContactProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section id={contact.id} className={`${styles.section} reveal`} ref={ref}>
      <div className={styles.inner}>
        <SectionHeader
          heading={contact.heading}
          subheading={contact.subheading}
        />
        <div className={styles.card}>
          {contact.emailLabel ? (
            <span className={styles.emailLabel}>{contact.emailLabel}</span>
          ) : null}
          <a className={styles.email} href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
