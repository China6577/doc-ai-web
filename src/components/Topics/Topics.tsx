import type { ConferenceContent } from "../../types/conference";
import { useReveal } from "../../hooks/useReveal";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import styles from "./Topics.module.css";

interface TopicsProps {
  topics: ConferenceContent["topics"];
}

export function Topics({ topics }: TopicsProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id={topics.id}
      className={`${styles.section} reveal`}
      ref={ref}
      aria-labelledby="topics-heading"
    >
      <div className={styles.inner}>
        <SectionHeader heading={topics.heading} subheading={topics.subheading} />
        <div className={styles.list}>
          {topics.sections.map((section) => (
            <article key={section.id} className={styles.topic}>
              <div className={styles.topicHead}>
                <span className={styles.number} aria-hidden="true">
                  {section.number}
                </span>
                <h3 className={styles.title}>{section.title}</h3>
              </div>
              <ul className={styles.items}>
                {section.items.map((item) => (
                  <li key={item} className={styles.item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
