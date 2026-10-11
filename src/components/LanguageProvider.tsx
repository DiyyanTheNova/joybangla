"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "bn";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("bh-language") as Language;
    if (saved === "bn" || saved === "en") {
      setLanguageState(saved);
      document.documentElement.lang = saved === "bn" ? "bn" : "en";
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("bh-language", lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      "hero.title": {
        en: "Build. Connect. Discover.",
        bn: "তৈরি করুন। সংযোগ করুন। আবিষ্কার করুন।",
      },
      "hero.subtitle": {
        en: "Business Hub connects people, businesses, opportunities, and knowledge.",
        bn: "বিজনেস হাব মানুষ, ব্যবসা, সুযোগ এবং জ্ঞানের সংযোগ ঘটিয়েছে।",
      },
    };
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}