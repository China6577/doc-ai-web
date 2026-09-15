import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  heading: string;
  subheading?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  heading,
  subheading,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`${styles.sectionHeader} ${align === "left" ? styles.left : ""}`}
    >
      <h2 className={styles.heading}>{heading}</h2>
      {subheading ? <p className={styles.subheading}>{subheading}</p> : null}
    </div>
  );
}
