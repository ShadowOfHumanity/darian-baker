"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type BtTheme = "dark" | "warm" | "plain";
// BtBaseProps is co-located here so component files can import it from BakeThereProvider
// rather than needing a separate types file in the user's project.
export type BtBaseProps = { theme?: BtTheme; className?: string; };

interface BakeThereContextValue {
  theme: BtTheme;
  setTheme: (theme: BtTheme) => void;
}

const BakeThereContext = createContext<BakeThereContextValue | null>(null);

interface BakeThereProviderProps {
  children: ReactNode;
  theme?: BtTheme;
  defaultTheme?: BtTheme;
}

export function BakeThereProvider({
  children,
  theme: controlledTheme,
  defaultTheme = "dark",
}: BakeThereProviderProps) {
  const [internalTheme, setInternalTheme] = useState<BtTheme>(defaultTheme);

  const activeTheme = controlledTheme ?? internalTheme;
  const setTheme = controlledTheme !== undefined ? () => {} : setInternalTheme;

  return (
    <BakeThereContext.Provider value={{ theme: activeTheme, setTheme }}>
      <div data-bt-theme={activeTheme}>
        {children}
      </div>
    </BakeThereContext.Provider>
  );
}

export function useBakeThereTheme(): BakeThereContextValue {
  const ctx = useContext(BakeThereContext);
  if (!ctx) {
    throw new Error("useBakeThereTheme must be used within a BakeThereProvider");
  }
  return ctx;
}

export function useThemeProps(): { "data-bt-theme": BtTheme } {
  const { theme } = useBakeThereTheme();
  return { "data-bt-theme": theme };
}
