"use client";

import { motion } from "framer-motion";
import { MapPin, BarChart2, Plus } from "lucide-react";

/* ── Phone mockup shell ── */
function Phone({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative w-[240px] flex-shrink-0 ${className}`}>
      <div className="bg-[#0d0d0d] rounded-[2.2rem] border-[4px] border-white/10 overflow-hidden shadow-2xl">
        {/* Notch */}
        <div className="h-5 bg-[#0d0d0d] flex items-center justify-center">
          <div className="w-20 h-4 bg-black rounded-b-xl" />
        </div>
        <div className="h-[480px] overflow-hidden bg-[#0d0d0d]">
          {children}
        </div>
        {/* Home bar */}
        <div className="h-5 flex items-center justify-center">
          <div className="w-20 h-1 bg-white/10 rounded-full" />
        </div>
      </div>
    </div>
  );
}

/* ── Screen 1: Campaign creation ── */
function CreateScreen() {
  return (
    <div className="h-full flex flex-col p-4">
      <div className="flex items-center justify-between mb-5">
        <span className="text-white font-bold text-sm">New Campaign</span>
        <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <Plus size={12} className="text-white/40" />
        </div>
      </div>

      {/* Ad preview thumbnail */}
      <div className="w-full aspect-video bg-black rounded-xl border border-white/[0.07] flex items-center justify-center mb-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #02E965, transparent 70%)" }} />
        <div className="text-center z-10">
          <div className="text-white font-black text-lg leading-none">YOUR</div>
          <div className="text-rydvert-green font-black text-lg leading-none">BRAND</div>
        </div>
        <div className="absolute bottom-2 right-2 bg-rydvert-green text-black text-[8px] font-black px-2 py-0.5 rounded">PREVIEW</div>
      </div>

      {/* Fields */}
      <div className="space-y-3">
        <div>
          <div className="text-white/30 text-[9px] font-bold uppercase tracking-wider mb-1">Campaign name</div>
          <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-2.5 text-white text-xs font-medium">Summer Launch 2026</div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1">
            <div className="text-white/30 text-[9px] font-bold uppercase tracking-wider mb-1">Location</div>
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-2.5 text-white text-xs flex items-center gap-1.5">
              <MapPin size={10} className="text-rydvert-green" />
              Abuja
            </div>
          </div>
          <div className="flex-1">
            <div className="text-white/30 text-[9px] font-bold uppercase tracking-wider mb-1">Duration</div>
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-2.5 text-white text-xs">2 weeks</div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <button className="w-full py-3 bg-rydvert-green text-black font-bold rounded-xl text-xs uppercase tracking-wider">
          Launch campaign
        </button>
      </div>
    </div>
  );
}

/* ── Screen 2: Active campaign analytics ── */
function AnalyticsScreen() {
  return (
    <div className="h-full flex flex-col p-4">
      <div className="flex items-center justify-between mb-5">
        <span className="text-white font-bold text-sm">Campaign</span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-rydvert-green animate-pulse" />
          <span className="text-rydvert-green text-[10px] font-bold">Active</span>
        </div>
      </div>

      <div className="bg-rydvert-green rounded-xl p-4 mb-4">
        <div className="text-black/50 text-[9px] font-bold uppercase tracking-wider mb-1">Total impressions</div>
        <div className="text-black font-black text-2xl">12,480</div>
        <div className="text-black/60 text-xs mt-1">↑ 18% this week</div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {[
          { label: "Vehicles", value: "8" },
          { label: "Distance", value: "342km" },
          { label: "Days left", value: "9" },
          { label: "Areas", value: "6" },
        ].map((s) => (
          <div key={s.label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3">
            <div className="text-white/30 text-[9px] font-bold uppercase tracking-wider">{s.label}</div>
            <div className="text-white font-black text-lg mt-0.5">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Mini chart bars */}
      <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3">
        <div className="flex items-center gap-1.5 mb-3">
          <BarChart2 size={11} className="text-white/30" />
          <span className="text-white/30 text-[9px] font-bold uppercase tracking-wider">Daily views</span>
        </div>
        <div className="flex items-end gap-1 h-10">
          {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{ height: `${h}%`, backgroundColor: i === 5 ? "#02E965" : "rgba(255,255,255,0.08)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function AppScreens() {
  return (
    <section className="bg-black py-24 md:py-32 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <span className="text-xs tracking-widest font-bold text-white/20 uppercase">The product</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-black text-white tracking-tight">
            Manage campaigns from your phone.
          </h2>
          <p className="mt-3 text-white/40 max-w-md leading-relaxed">
            Create, launch, and track campaigns wherever you are. The Rydvert app puts the full advertising workflow in your pocket.
          </p>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-4 lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Phone>
              <CreateScreen />
            </Phone>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:-translate-y-6"
          >
            <Phone>
              <AnalyticsScreen />
            </Phone>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
