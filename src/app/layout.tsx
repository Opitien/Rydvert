import type { Metadata } from "next";
import "./globals.css";
import { WaitlistProvider } from "@/components/WaitlistProvider";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Rydvert | Advertise on the move.",
  description: "Put your brand where people are — on the streets, in motion, and across the city.",
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
