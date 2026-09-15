import styles from "./ConferenceBanner.module.css";

interface ConferenceBannerProps {
  alt: string;
}

export function ConferenceBanner({ alt }: ConferenceBannerProps) {
  return (
    <div className={styles.bannerWrapper}>
      <img
        className={styles.banner}
        src="/poster.jpg"
        alt={alt}
        fetchPriority="high"
        width={900}
        height={380}
      />
    </div>
  );
}
