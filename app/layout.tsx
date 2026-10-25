import type { Metadata, Viewport } from "next";
import { Bagel_Fat_One, Inter, Shantell_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import MotionRoot from "@/components/MotionRoot";
import { profile } from "@/lib/site-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bagel = Bagel_Fat_One({
  variable: "--font-bagel",
  subsets: ["latin"],
  weight: "400",
});

const shantell = Shantell_Sans({
  variable: "--font-shantell",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Shambhabya Medhi — Software Development Engineer",
  description: profile.summary,
  keywords: [
    "Shambhabya Medhi",
    "Software Development Engineer",
    "Full Stack Developer",
    "React Developer",
    "React Native",
    "Next.js",
    "AWS",
    "GraphQL",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: "Shambhabya Medhi — Software Development Engineer",
    description: profile.summary,
    type: "website",
    locale: "en_IN",
    siteName: "Shambhabya Medhi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shambhabya Medhi — Software Development Engineer",
    description: profile.summary,
  },
};

export const viewport: Viewport = {
  themeColor: "#f0ede6",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${bagel.variable} ${shantell.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="min-h-full">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[110] -translate-y-24 rounded-full bg-ink px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-paper transition-transform duration-300 focus:translate-y-0"
        >
          Skip to content
        </a>
        <MotionRoot />
        {children}
      </body>
    </html>
  );
}
