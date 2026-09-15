import type { Language } from "../../types/conference";
import styles from "./ConferenceBanner.module.css";

interface ConferenceBannerProps {
  alt: string;
  language: Language;
}

export function ConferenceBanner({ alt, language }: ConferenceBannerProps) {
  const src = language === "zh" ? "/poster-cn.png" : "/poster-en.png";

  return (
    <div className={styles.bannerWrapper}>
      <img
        key={src}
        className={styles.banner}
        src={src}
        alt={alt}
        fetchPriority="high"
      />
    </div>
  );
}
