"use client";

import { useWaitlist } from "./WaitlistProvider";
import { ArrowRight, Map, Clock, Wallet } from "lucide-react";

export function DriverSection() {
  const { openWaitlist } = useWaitlist();

  return (
    <section id="for-drivers" className="py-20 md:py-28 bg-black border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-16 lg:gap-24">

          {/* Dashboard mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="w-full max-w-sm bg-[#0a0a0a] border border-white/[0.07] rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-rydvert-green/10 rounded-full blur-3xl" />

              <div className="flex justify-between items-center mb-8 relative z-10">
                <span className="text-white font-black text-sm uppercase tracking-wider">Partner Dashboard</span>
                <div className="w-9 h-9 rounded-full border border-rydvert-green/30 bg-rydvert-green/10 flex items-center justify-center">
                  <span className="text-rydvert-green text-xs font-black">JD</span>
                </div>
              </div>

              <div className="bg-black/50 border border-white/[0.06] p-6 rounded-2xl mb-6 relative z-10">
                <div className="text-gray-600 text-[10px] font-black tracking-widest uppercase mb-1">This month</div>
                <div className="text-5xl font-black text-white mb-2">₦45,500</div>
                <div className="text-rydvert-green text-xs font-bold">↑ 12% from last month</div>
              </div>

              <div className="space-y-3 relative z-10">
                {[
                  { icon: <Map size={16} />, label: "Distance Covered", value: "142 km", sub: "This week" },
                  { icon: <Clock size={16} />, label: "Time Active", value: "24 hrs", sub: "This week" },
                  { icon: <Wallet size={16} />, label: "Campaigns Run", value: "3", sub: "Active" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between bg-white/[0.03] border border-white/[0.06] rounded-xl px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="text-rydvert-green">{stat.icon}</div>
                      <div>
                        <div className="text-white text-sm font-medium">{stat.label}</div>
                        <div className="text-gray-600 text-xs">{stat.sub}</div>
                      </div>
                    </div>
                    <div className="text-white font-black">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-5">For drivers</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.88] text-white mb-8">
              Turn your vehicle<br />into a moving<br />
              <span className="text-rydvert-green">billboard.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
              If you're a vehicle owner or driver, Rydvert gives you a new way to earn from the space your vehicle already has. Drive your normal routes, get paid.
            </p>
            <button
              onClick={() => openWaitlist("Become a vehicle partner")}
              className="group px-8 py-4 bg-rydvert-green text-black rounded-full font-bold hover:bg-white transition-colors flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start"
            >
              Join as a vehicle partner
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
