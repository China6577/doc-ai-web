import type { ReactNode } from "react";
import type { ConferenceContent } from "../../types/conference";
import { useReveal } from "../../hooks/useReveal";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import styles from "./Guidelines.module.css";

interface GuidelinesProps {
  guidelines: ConferenceContent["guidelines"];
}

function renderInlineLinks(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    const [full, label, url] = match;
    if (match.index > lastIndex) {
      parts.push(<span key={key++}>{text.slice(lastIndex, match.index)}</span>);
    }
    parts.push(
      <a
        key={key++}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.inlineLink}
      >
        {label}
      </a>,
    );
    lastIndex = match.index + full.length;
  }

  if (lastIndex < text.length) {
    parts.push(<span key={key++}>{text.slice(lastIndex)}</span>);
  }

  return parts;
}

export function Guidelines({ guidelines }: GuidelinesProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id={guidelines.id}
      className={`${styles.section} reveal`}
      ref={ref}
      aria-labelledby="guidelines-heading"
    >
      <div className={styles.inner}>
        <SectionHeader
          heading={guidelines.heading}
          subheading={guidelines.subheading}
        />
        <div className={styles.list}>
          {guidelines.items.map((item) => (
            <article key={item.number} className={styles.item}>
              <span className={styles.number} aria-hidden="true">
                {item.number}
              </span>
              <div className={styles.content}>
                <h3 className={styles.title}>{item.title}</h3>
                {item.highlight ? (
                  <p className={styles.highlightBadge}>{item.highlight}</p>
                ) : null}
                {item.paragraphs.map((paragraph, index) => (
                  <p key={index} className={styles.paragraph}>
                    {renderInlineLinks(paragraph)}
                  </p>
                ))}
                {item.link ? (
                  <a
                    className={styles.link}
                    href={item.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.link.label} ↗
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
