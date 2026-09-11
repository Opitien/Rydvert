"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWaitlist } from "./WaitlistProvider";
import { BarChart2, MapPin, Plus } from "lucide-react";
import Image from "next/image";

/* ── Vehicle image with ad overlay ── */
function HeroVehicle() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:mr-0 lg:ml-auto rounded-3xl overflow-hidden shadow-2xl border-[4px] border-white/10 group">
      {/* Glow behind image */}
      <div className="absolute inset-0 bg-rydvert-green/10 blur-[60px] rounded-full scale-110 pointer-events-none" />

      {/* Vehicle Image */}
      <Image
        src="/vechile.jpg"
        alt="Rydvert mobile advertising on a vehicle"
        width={800}
        height={600}
        className="w-full h-auto object-cover relative z-0 transition-transform duration-700 group-hover:scale-105"
        priority
      />

      {/* Simulated Ad Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-[12%] top-[38%] bg-rydvert-green px-6 py-4 md:px-8 md:py-5 rounded-2xl shadow-2xl flex flex-col items-center justify-center transform -rotate-2 group-hover:rotate-0 transition-all duration-500 border border-white/20">
          <Image src="/logo-black.svg" alt="Rydvert" width={160} height={40} className="w-24 md:w-36 lg:w-40 h-auto" />
        </div>
      </div>

      {/* Location / Status Badge */}
      <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5 z-20 flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 md:px-4 md:py-2.5 shadow-xl">
        <MapPin size={12} className="text-rydvert-green md:w-[14px] md:h-[14px]" />
        <span className="text-white/80 text-[10px] md:text-xs font-medium">Lagos, Nigeria</span>
        <div className="w-px h-3 bg-white/20 mx-1" />
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-rydvert-green animate-pulse" />
          <span className="text-rydvert-green text-[8px] md:text-[10px] font-black uppercase tracking-wider">LIVE</span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const { openWaitlist } = useWaitlist();
  const [showStores, setShowStores] = useState(false);

  return (
    <section className="relative bg-black min-h-screen flex flex-col overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col flex-1 justify-center pt-36 pb-16 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-8 flex-1">

          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-[55%] flex flex-col gap-8"
          >


            <div>
              <h1 className="text-white font-black leading-[1.0] tracking-tight text-[3.2rem] md:text-[5rem] lg:text-[5.5rem]">
                Advertise<br />on the move.
              </h1>
              <p className="text-white/40 text-xl mt-5 leading-relaxed max-w-sm">
                Turn everyday journeys into advertising opportunities. Reach people where they are on the streets.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => openWaitlist()}
                className="px-7 py-3.5 bg-rydvert-green text-black font-bold rounded-full hover:bg-white transition-colors text-sm"
              >
                Join the waitlist
              </button>
              <button
                onClick={() => setShowStores(!showStores)}
                className="px-7 py-3.5 border border-white/10 text-white/60 font-medium rounded-full hover:border-white/20 hover:text-white transition-colors text-sm"
              >
                Get the app
              </button>
            </div>

            {/* App store badges */}
            <div className="h-[60px]">
              <AnimatePresence>
                {showStores && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    className="flex gap-3 overflow-hidden"
                  >
                    {[
                      {
                        icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>,
                        top: "Download on the", bottom: "App Store"
                      },
                      {
                        icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M3.18 23.76c.31.17.67.19 1.01.07L15.47 12 11.77 8.3 3.18 23.76zM20.5 10.69l-2.83-1.62-4.05 3.66 4.05 3.66 2.85-1.63c.81-.46.81-1.61-.02-2.07zM2.01 1.05C1.98 1.2 2 1.36 2 1.53V22.47c0 .21.04.4.11.57L13.72 12 2.01 1.05zM15.47 12L4.19.24C3.85.12 3.49.14 3.18.31l8.59 8.58L15.47 12z"/></svg>,
                        top: "Get it on", bottom: "Google Play"
                      },
                    ].map((b) => (
                      <button
                        key={b.bottom}
                        onClick={() => openWaitlist()}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/20 transition-colors"
                      >
                        {b.icon}
                        <div className="text-left">
                          <div className="text-white/30 text-[9px] leading-none">{b.top}</div>
                          <div className="text-white text-xs font-semibold">{b.bottom}</div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right — Vehicle Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-[45%] flex justify-center lg:justify-start"
          >
            <HeroVehicle />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
