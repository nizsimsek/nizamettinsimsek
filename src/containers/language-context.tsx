"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Language = "tr" | "en";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<Language>("tr");

  const toggleLanguage = () => {
    if (language === "tr") {
      setLanguage("en");
      window.localStorage.setItem("language", "en");
    } else {
      setLanguage("tr");
      window.localStorage.setItem("language", "tr");
    }
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem(
      "language"
    ) as Language | null;

    if (localLanguage) {
      setLanguage(localLanguage);
    } else {
      const systemLanguage = navigator.language.split('-')[0];
      if (systemLanguage === "en") {
        setLanguage("en");
        window.localStorage.setItem("language", "en");
      } else {
        setLanguage("tr");
        window.localStorage.setItem("language", "tr");
      }
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }

  return context;
}
