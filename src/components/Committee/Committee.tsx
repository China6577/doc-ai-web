import type { ConferenceContent } from "../../types/conference";
import { useReveal } from "../../hooks/useReveal";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import styles from "./Committee.module.css";

interface CommitteeProps {
  committee: ConferenceContent["committee"];
}

export function Committee({ committee }: CommitteeProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id={committee.id}
      className={`${styles.section} reveal`}
      ref={ref}
      aria-labelledby="committee-heading"
    >
      <div className={styles.inner}>
        <SectionHeader
          heading={committee.heading}
          subheading={committee.subheading}
        />
        <div className={styles.groups}>
          {committee.groups.map((group) => (
            <div key={group.title} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <ul className={styles.members}>
                {group.members.map((member) => (
                  <li key={member.name} className={styles.member}>
                    <span className={styles.name}>{member.name}</span>
                    <span className={styles.affiliation}>
                      {member.affiliation}
                    </span>
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
