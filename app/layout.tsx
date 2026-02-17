import type { Metadata } from "next";

import { DesignStyleProvider } from "@/components/design-style-context";
import { ThemeToggle } from "@/components/theme-toggle";

import "./globals.css";

export const metadata: Metadata = {
  title: "UI/UX Style Lab",
  description: "A Next.js + shadcn/ui demo of design styles and practical UI/UX principles"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
                const style = localStorage.getItem("designStyle");
                if (style) document.body.classList.add(style);
              } catch {}
            })();`
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <DesignStyleProvider>
          <ThemeToggle />
          {children}
        </DesignStyleProvider>
      </body>
    </html>
  );
}
