import ActiveSectionContextProvider from "./active-section";
import ThemeContextProvider from "./theme-context";
import React from "react";

type ProviderProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProviderProps) {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}
