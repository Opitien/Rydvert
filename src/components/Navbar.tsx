"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useWaitlist } from "./WaitlistProvider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openWaitlist } = useWaitlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/[0.06]" : "bg-transparent"
        } py-5`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <Image
              src={scrolled ? "/logo-white.svg" : "/logo-white.svg"}
              alt="Rydvert"
              width={120}
              height={28}
              className="h-7 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <Link href="#product" className="hover:text-white transition-colors">Product</Link>
            <Link href="#for-businesses" className="hover:text-white transition-colors">For Businesses</Link>
            <Link href="#for-drivers" className="hover:text-white transition-colors">For Vehicle Owners</Link>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => openWaitlist()}
              className="text-sm font-bold px-5 py-2.5 bg-rydvert-green text-black rounded-full hover:bg-white transition-colors"
            >
              Join waitlist
            </button>
          </div>

          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 bg-black z-30 flex flex-col pt-24 px-8 transition-all duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-8 text-3xl font-black text-white">
          {[
            { label: "Product", href: "#product" },
            { label: "For Businesses", href: "#for-businesses" },
            { label: "For Vehicle Owners", href: "#for-drivers" },
          ].map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)} className="hover:text-rydvert-green transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pb-16">
          <button
            onClick={() => { setMobileOpen(false); openWaitlist(); }}
            className="w-full py-4 bg-rydvert-green text-black rounded-full font-bold text-lg hover:bg-white transition-colors"
          >
            Join the waitlist
          </button>
        </div>
      </div>
    </>
  );
}
