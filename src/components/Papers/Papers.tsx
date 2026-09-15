import type { ConferenceContent } from "../../types/conference";
import { useReveal } from "../../hooks/useReveal";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import styles from "./Papers.module.css";

interface PapersProps {
  papers: ConferenceContent["papers"];
}

export function Papers({ papers }: PapersProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      className={`${styles.section} reveal`}
      ref={ref}
      aria-labelledby="papers-heading"
    >
      <div className={styles.inner}>
        <SectionHeader heading={papers.heading} subheading={papers.subheading} />
        <div className={styles.categories}>
          {papers.categories.map((category) => (
            <div key={category.number} className={styles.category}>
              <span className={styles.number} aria-hidden="true">
                {category.number}
              </span>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
            </div>
          ))}
        </div>
        <p className={styles.note}>{papers.note}</p>
      </div>
    </section>
  );
}
