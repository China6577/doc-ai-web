import { useCallback, useEffect, useState } from "react";
import type { ConferenceContent, Language } from "../types/conference";
import { conferenceZh } from "../data/conference.zh";
import { conferenceEn } from "../data/conference.en";

const STORAGE_KEY = "china-docai-language";

function getInitialLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "zh" || stored === "en") {
      return stored;
    }
  } catch {
    // localStorage unavailable; fall through to default
  }
  return "zh";
}

export function useLanguage(): {
  language: Language;
  content: ConferenceContent;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
} {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === "zh" ? "en" : "zh"));
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore persistence errors
    }
    const content = language === "zh" ? conferenceZh : conferenceEn;
    document.documentElement.lang = content.meta.htmlLang;
    document.title = content.meta.title;
    const descriptionMeta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", content.meta.description);
    }
  }, [language]);

  const content = language === "zh" ? conferenceZh : conferenceEn;

  return { language, content, setLanguage, toggleLanguage };
}
