"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type DesignStyle =
  | "default"
  | "style-flat"
  | "style-glass"
  | "style-neobrutal"
  | "style-editorial"
  | "style-bento"
  | "style-data"
  | "style-pixel"
  | "style-bauhaus"
  | "style-utilitarian"
  | "style-rebus"
  | "style-popart"
  | "style-memphis";

const ALL_STYLES: DesignStyle[] = [
  "style-flat",
  "style-glass",
  "style-neobrutal",
  "style-editorial",
  "style-bento",
  "style-data",
  "style-pixel",
  "style-bauhaus",
  "style-utilitarian",
  "style-rebus",
  "style-popart",
  "style-memphis",
];

type DesignStyleContextValue = {
  activeStyle: DesignStyle;
  setActiveStyle: (style: DesignStyle) => void;
};

const DesignStyleContext = createContext<DesignStyleContextValue>({
  activeStyle: "default",
  setActiveStyle: () => {},
});

export function useDesignStyle() {
  return useContext(DesignStyleContext);
}

function applyStyleToBody(style: DesignStyle) {
  ALL_STYLES.forEach((s) => document.body.classList.remove(s));
  if (style !== "default") {
    document.body.classList.add(style);
  }
}

export function DesignStyleProvider({ children }: { children: ReactNode }) {
  const [activeStyle, setActiveStyleState] = useState<DesignStyle>("default");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("designStyle") as DesignStyle | null;
    if (stored && ALL_STYLES.includes(stored)) {
      setActiveStyleState(stored);
      applyStyleToBody(stored);
    }
    setMounted(true);
  }, []);

  function setActiveStyle(style: DesignStyle) {
    setActiveStyleState(style);
    applyStyleToBody(style);
    if (style === "default") {
      localStorage.removeItem("designStyle");
    } else {
      localStorage.setItem("designStyle", style);
    }
  }

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <DesignStyleContext.Provider value={{ activeStyle, setActiveStyle }}>
      {children}
    </DesignStyleContext.Provider>
  );
}
