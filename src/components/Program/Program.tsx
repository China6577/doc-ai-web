import type { ConferenceContent } from "../../types/conference";
import { useReveal } from "../../hooks/useReveal";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import styles from "./Program.module.css";

interface ProgramProps {
  program: ConferenceContent["program"];
}

function isLinkItem(
  item: string | { text: string; link?: string },
): item is { text: string; link?: string } {
  return typeof item === "object" && "text" in item;
}

export function Program({ program }: ProgramProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id={program.id}
      className={`${styles.section} reveal`}
      ref={ref}
      aria-labelledby="program-heading"
    >
      <div className={styles.inner}>
        <SectionHeader
          heading={program.heading}
          subheading={program.subheading}
        />
        <div className={styles.timeline}>
          {program.days.map((day) => (
            <div key={day.date} className={styles.day}>
              <h3 className={styles.date}>{day.date}</h3>
              <div className={styles.marker} aria-hidden="true" />
              <ul className={styles.items}>
                {day.items.map((item, index) => (
                  <li key={index} className={styles.item}>
                    {isLinkItem(item) && item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.itemLink}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className={styles.itemText}>
                        {isLinkItem(item) ? item.text : item}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
