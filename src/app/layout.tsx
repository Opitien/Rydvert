import type { Metadata, Viewport } from "next";
import "./globals.css";
import { WaitlistProvider } from "@/components/WaitlistProvider";
import { Navbar } from "@/components/Navbar";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rydvert.com"),
  title: {
    default: "Rydvert | Advertise on the move.",
    template: "%s | Rydvert"
  },
  description: "Turn everyday journeys into high-impact advertising opportunities. Rydvert brings your brand to the streets with premium mobile vehicle advertising in Nigeria.",
  keywords: ["mobile advertising", "vehicle advertising", "out of home advertising", "OOH", "Nigeria advertising", "Rydvert", "transit advertising", "fleet branding"],
  authors: [{ name: "Rydvert" }],
  creator: "Rydvert",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://rydvert.com",
    title: "Rydvert | Advertise on the move.",
    description: "Turn everyday journeys into high-impact advertising opportunities. Rydvert brings your brand to the streets with premium mobile vehicle advertising.",
    siteName: "Rydvert",
    images: [
      {
        url: "/social-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Rydvert Mobile Advertising",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rydvert | Advertise on the move.",
    description: "Turn everyday journeys into high-impact advertising opportunities. Rydvert brings your brand to the streets.",
    images: ["/social-image.jpeg"],
    creator: "@rydvert",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-black">
        <WaitlistProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        </WaitlistProvider>
      </body>
    </html>
  );
}
