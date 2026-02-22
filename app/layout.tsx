import type { Metadata } from "next";

import { DesignStyleProvider } from "@/components/styles/design-style-context";
import { MotionPreferenceToggle } from "@/components/settings/motion-preference-toggle";
import { ThemeToggle } from "@/components/settings/theme-toggle";

import "./globals.css";

export const metadata: Metadata = {
  title: "UI/UX Style Lab",
  description:
    "A Next.js + shadcn/ui demo of design styles and practical UI/UX principles",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const stored = localStorage.getItem("theme");
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                const isDark = stored ? stored === "dark" : prefersDark;
                document.documentElement.classList.toggle("dark", isDark);

                const motionPreference = localStorage.getItem("motionPreference");
                document.documentElement.classList.toggle("motion-reduce-sim", motionPreference === "reduced");

                const style = localStorage.getItem("designStyle");
                if (style) document.body.classList.add(style);
              } catch {}
            })();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <DesignStyleProvider>
          <ThemeToggle />
          <MotionPreferenceToggle />
          {children}
        </DesignStyleProvider>
      </body>
    </html>
  );
}
