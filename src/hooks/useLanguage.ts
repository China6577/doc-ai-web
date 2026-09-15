import { useEffect } from "react";
import type { ConferenceContent } from "../types/conference";
import { conferenceEn } from "../data/conference.en";

export function useLanguage(): { content: ConferenceContent } {
  const content = conferenceEn;

  useEffect(() => {
    document.documentElement.lang = content.meta.htmlLang;
    document.title = content.meta.title;
    const descriptionMeta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", content.meta.description);
    }
  }, [content]);

  return { content };
}
