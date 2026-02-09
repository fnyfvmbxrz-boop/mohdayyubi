import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Mohammad | Enterprise Tech, AI Products, History",
    template: "%s | Mohammad",
  },
  description:
    "I sell enterprise tech, build AI products, and dig into history for lessons that still apply today. Based in Riyadh, Saudi Arabia.",
  keywords: [
    "enterprise technology",
    "AI products",
    "digital transformation",
    "Saudi Arabia",
    "GCC",
    "technology consulting",
  ],
  authors: [{ name: "Mohammad" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mohammad",
    title: "Mohammad | Enterprise Tech, AI Products, History",
    description:
      "I sell enterprise tech, build AI products, and dig into history for lessons that still apply today.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad | Enterprise Tech, AI Products, History",
    description:
      "I sell enterprise tech, build AI products, and dig into history for lessons that still apply today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${plusJakarta.className} antialiased`}>
        <ThemeProvider>
          <Navigation />
          <main className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
