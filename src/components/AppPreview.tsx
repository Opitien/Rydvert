"use client";

import { motion } from "framer-motion";
import { Search, Home, User, MapPin, CheckCircle2 } from "lucide-react";

export function AppPreview() {
  return (
    <section className="py-20 md:py-28 bg-black border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="mb-16">
          <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-5">The app</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.88] text-white">
            Designed for<br />
            <span className="text-rydvert-green">the modern city.</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">

          {/* Screen 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[270px] h-[560px] bg-[#0a0a0a] rounded-[2.5rem] border-[5px] border-white/10 shadow-2xl relative overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-white/10 rounded-b-2xl z-20" />
            <div className="flex-1 pt-10 p-5 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="font-black text-white">Good Morning</h3>
                  <p className="text-gray-600 text-xs mt-0.5">Abuja, Nigeria</p>
                </div>
                <div className="w-9 h-9 bg-rydvert-green rounded-full flex items-center justify-center font-black text-black text-sm">R</div>
              </div>

              <div className="bg-rydvert-green p-5 rounded-2xl mb-5">
                <div className="text-black/50 text-[10px] font-black uppercase tracking-wider mb-1">Active campaign</div>
                <div className="text-2xl font-black text-black mb-3">Summer Promo</div>
                <div className="flex justify-between items-end">
                  <div className="text-black/60 text-xs">12 Vehicles</div>
                  <div className="font-black text-black">4.2k Views</div>
                </div>
              </div>

              <div className="text-gray-600 text-[10px] font-black uppercase tracking-wider mb-3">Quick Actions</div>
              <div className="grid grid-cols-2 gap-2 mb-auto">
                {[{ icon: <Search size={16} />, label: "Find Vehicles" }, { icon: <MapPin size={16} />, label: "Set Route" }].map((a) => (
                  <div key={a.label} className="bg-white/[0.04] border border-white/[0.06] p-4 rounded-xl flex flex-col items-center gap-2">
                    <div className="text-rydvert-green">{a.icon}</div>
                    <span className="text-white text-[10px] font-bold">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-14 border-t border-white/[0.06] flex justify-around items-center px-6">
              <Home size={20} className="text-rydvert-green" />
              <Search size={20} className="text-gray-700" />
              <User size={20} className="text-gray-700" />
            </div>
          </motion.div>

          {/* Screen 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full max-w-[270px] h-[560px] bg-[#0a0a0a] rounded-[2.5rem] border-[5px] border-white/10 shadow-2xl relative overflow-hidden flex flex-col md:-translate-y-8"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-white/10 rounded-b-2xl z-20" />

            {/* Map bg */}
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-[#111]">
                <div className="absolute top-1/3 left-0 w-full h-[2px] bg-white/5 rotate-6" />
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -rotate-3" />
                <div className="absolute top-0 left-1/3 w-[2px] h-full bg-white/5 rotate-6" />

                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path d="M40,150 Q120,200 180,140 T300,280" stroke="#333" strokeWidth="8" fill="transparent" strokeLinecap="round" />
                  <path d="M40,150 Q120,200 180,140 T300,280" stroke="#02E965" strokeWidth="3" fill="transparent" strokeLinecap="round" />
                </svg>

                <div className="absolute top-[250px] left-[260px] w-5 h-5 bg-rydvert-green rounded-full border-2 border-black shadow-[0_0_12px_rgba(2,233,101,0.6)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                </div>
              </div>

              {/* Header */}
              <div className="absolute top-10 left-4 right-4 bg-[#0a0a0a]/90 backdrop-blur-sm p-4 rounded-2xl border border-white/[0.06]">
                <h3 className="font-black text-white text-sm text-center">Live Tracking</h3>
                <p className="text-gray-600 text-xs text-center mt-0.5">Vehicle #842 · Wuse Zone 2</p>
              </div>

              {/* Bottom sheet */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#0a0a0a] border-t border-white/[0.06] rounded-t-3xl p-6">
                <div className="w-10 h-1 bg-white/10 rounded-full mx-auto mb-5" />
                <h4 className="font-black text-white mb-1">Vehicle Status</h4>
                <div className="flex items-center gap-2 text-rydvert-green text-xs font-bold mb-5">
                  <CheckCircle2 size={14} /> AD ACTIVE
                </div>
                <button className="w-full py-3.5 bg-rydvert-green text-black rounded-xl font-black text-sm uppercase tracking-wider">
                  View Analytics
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
