import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfbfa" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "One Page Gospel — The Good News, Clear & Complete",
    template: "%s | One Page Gospel",
  },
  description:
    "A clear, beautiful, and comprehensive single-page presentation of the Christian Gospel. Understand God's design, the brokenness of the world, the cross of Jesus, and how to receive eternal life.",
  keywords: [
    "One Page Gospel",
    "Gospel presentation",
    "Christian faith",
    "Who is Jesus",
    "How to be saved",
    "The Bridge illustration",
    "Romans Road",
    "Scripture verses",
  ],
  authors: [{ name: "One Page Gospel Project" }],
  creator: "One Page Gospel",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://onepagegospel.org",
    siteName: "One Page Gospel",
    title: "One Page Gospel — The Good News, Clear & Complete",
    description:
      "A clear, beautiful, and comprehensive single-page presentation of the Christian Gospel with interactive scriptures and bridge illustration.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="antialiased selection:bg-amber-500/20 selection:text-amber-400 min-h-screen">
        <ThemeProvider>
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
