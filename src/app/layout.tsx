import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";
import SecurityProvider from "@/components/SecurityProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  display: 'swap',
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Pacific Settlement Bank | Sovereign Financial Framework",
    template: "%s | Pacific Settlement Bank"
  },
  description: "Sovereign. Secure. Infinite. Pacific Settlement Bank (PSB) is the central node for institutional capital and forensic transparency.",
  keywords: ["Pacific Settlement Bank", "PSB", "Sovereign Banking", "Financial Framework", "Institutional Capital", "Majuro Bank"],
  authors: [{ name: "Pacific Settlement Bank" }],
  creator: "Pacific Settlement Bank",
  publisher: "Pacific Settlement Bank",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/assets/kit/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/kit/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/kit/favicons/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/assets/kit/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/assets/kit/favicons/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pacificapitalnetwork.com',
    siteName: 'Pacific Settlement Bank',
    title: 'Pacific Settlement Bank | Sovereign Financial Framework',
    description: 'Sovereign. Secure. Infinite. The central node for institutional capital and forensic transparency.',
    images: [
      {
        url: '/assets/kit/header-footer/psb-header-blue.png',
        width: 1200,
        height: 630,
        alt: 'Pacific Settlement Bank',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pacific Settlement Bank | Sovereign Financial Framework',
    description: 'Sovereign. Secure. Infinite.',
    images: ['/assets/kit/header-footer/psb-header-blue.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${outfit.variable} font-sans min-h-full antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <SecurityProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </SecurityProvider>
      </body>
    </html>
  );
}
