"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import type { Lang } from "@/lib/translations";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
  setLang: () => {},
});

export const useLang = () => useContext(LanguageContext);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLangState] = useState<Lang>("hi");

  // Hydrate from localStorage on first mount (client-only)
  useEffect(() => {
    const saved = localStorage.getItem("pv_lang") as Lang | null;
    if (saved === "en" || saved === "hi") {
      setLangState(saved);
    }
    // else: stay on 'hi' (default)
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("pv_lang", l);
    if (typeof document !== "undefined") {
      document.documentElement.lang = l;
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next: Lang = prev === "en" ? "hi" : "en";
      localStorage.setItem("pv_lang", next);
      if (typeof document !== "undefined") {
        document.documentElement.lang = next;
      }
      return next;
    });
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
