import styles from "./Acknowledgment.module.css";

interface AcknowledgmentProps {
  text: string;
}

export function Acknowledgment({ text }: AcknowledgmentProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.text}>{text}</p>
      </div>
    </section>
  );
}
