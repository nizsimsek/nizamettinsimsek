import ActiveSectionContextProvider from "./active-section";
import LanguageContextProvider from "./language-context";
import ThemeContextProvider from "./theme-context";
import React from "react";

type ProviderProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProviderProps) {
  return (
    <ThemeContextProvider>
      <LanguageContextProvider>
        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
      </LanguageContextProvider>
    </ThemeContextProvider>
  );
}
