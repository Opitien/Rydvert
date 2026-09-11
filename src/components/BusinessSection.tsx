"use client";

import { useWaitlist } from "./WaitlistProvider";
import { Check, MapPin } from "lucide-react";
import { ArrowRight } from "lucide-react";

export function BusinessSection() {
  const { openWaitlist } = useWaitlist();

  return (
    <section id="for-businesses" className="py-20 md:py-28 bg-black border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-5">For businesses</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.88] text-white mb-8">
              Put your business<br />
              <span className="text-rydvert-green">in motion.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
              Whether you are launching a new product, opening a restaurant, or running a local promotion — Rydvert gets your message seen across the city.
            </p>
            <ul className="space-y-4 mb-12">
              {[
                "New businesses & startups",
                "Product launches & events",
                "Local restaurants & retail",
                "Real estate & local services",
                "Promotions & seasonal campaigns",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-rydvert-green/10 border border-rydvert-green/30 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-rydvert-green" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => openWaitlist("Advertise my business")}
              className="group px-8 py-4 bg-rydvert-green text-black rounded-full font-bold hover:bg-white transition-colors flex items-center gap-2"
            >
              Join the waitlist
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Phone mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[320px] bg-black rounded-[2.5rem] p-2 border-[5px] border-white/10 shadow-2xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-white/10 rounded-b-2xl z-20" />

              <div className="bg-[#0a0a0a] rounded-[2rem] h-[640px] overflow-hidden flex flex-col pt-10">

                {/* App header */}
                <div className="px-6 py-4 border-b border-white/[0.06] flex justify-between items-center">
                  <span className="text-white font-black text-sm uppercase tracking-wider">Create Campaign</span>
                  <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center">
                    <span className="text-white/40 text-xs">✕</span>
                  </div>
                </div>

                {/* Form */}
                <div className="flex-1 p-6 space-y-5 overflow-hidden">
                  <div>
                    <label className="text-gray-600 text-[10px] font-bold tracking-widest uppercase mb-2 block">Campaign name</label>
                    <div className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white font-medium text-sm">
                      Summer Launch
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-600 text-[10px] font-bold tracking-widest uppercase mb-2 block">Advertisement</label>
                    <div className="w-full h-28 bg-white/[0.03] border border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center text-gray-600 gap-1">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mb-1">
                        <span className="text-white/20 text-lg">↑</span>
                      </div>
                      <span className="text-xs">summer_ad_final.png</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-600 text-[10px] font-bold tracking-widest uppercase mb-2 block">Location</label>
                    <div className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm flex items-center gap-2">
                      <MapPin size={14} className="text-rydvert-green" />
                      Abuja, Central Area
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-600 text-[10px] font-bold tracking-widest uppercase mb-2 block">Status</label>
                    <div className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                      <span className="text-gray-400">Preparing</span>
                    </div>
                  </div>
                </div>

                {/* Launch button */}
                <div className="p-6 border-t border-white/[0.06]">
                  <button className="w-full py-4 bg-rydvert-green text-black font-black rounded-xl text-sm uppercase tracking-wider">
                    Launch campaign
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
