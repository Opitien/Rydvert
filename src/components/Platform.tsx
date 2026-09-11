"use client";

import { useWaitlist } from "./WaitlistProvider";
import { ArrowRight } from "lucide-react";

export function Platform() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="bg-white border-t border-black/[0.06] py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <span className="text-xs tracking-widest font-bold text-black/30 uppercase">The platform</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-black text-black tracking-tight">
            Built for two sides.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* For Businesses */}
          <div id="for-businesses" className="bg-black rounded-2xl p-10 flex flex-col">
            <span className="text-rydvert-green text-xs font-bold tracking-widest uppercase mb-6">For businesses</span>
            <h3 className="text-white text-xl font-black leading-tight mb-4">
              Reach people beyond screens and traditional billboards.
            </h3>
            <p className="text-white/50 leading-relaxed text-sm mb-8">
              Create a campaign, choose your target area, and get your brand moving across the city. Works for any local business — restaurants, retail, real estate, events, and more.
            </p>
            <ul className="space-y-2.5 mb-10">
              {["Set your target location", "Upload your artwork", "Campaign goes live on vehicles", "Track performance in-app"].map((i) => (
                <li key={i} className="text-white/40 text-sm flex items-center gap-2.5">
                  <div className="w-1 h-1 rounded-full bg-rydvert-green flex-shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
            <button
              onClick={() => openWaitlist("Advertise my business")}
              className="mt-auto group flex items-center gap-2 text-sm font-bold text-rydvert-green hover:gap-3 transition-all"
            >
              Join as a business
              <ArrowRight size={16} />
            </button>
          </div>

          {/* For Vehicle Owners */}
          <div id="for-drivers" className="bg-black/[0.03] border border-black/[0.07] rounded-2xl p-10 flex flex-col">
            <span className="text-black/30 text-xs font-bold tracking-widest uppercase mb-6">For vehicle owners</span>
            <h3 className="text-black text-xl font-black leading-tight mb-4">
              Turn your vehicle into advertising space.
            </h3>
            <p className="text-black/50 leading-relaxed text-sm mb-8">
              If you own a car, van, or commercial vehicle, Rydvert lets you earn passively while driving your normal routes. No detours. No extra trips.
            </p>
            <ul className="space-y-2.5 mb-10">
              {["Sign up as a vehicle partner", "Get matched with campaigns in your area", "Drive your normal routes", "Earn monthly from your vehicle"].map((i) => (
                <li key={i} className="text-black/40 text-sm flex items-center gap-2.5">
                  <div className="w-1 h-1 rounded-full bg-black/30 flex-shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
            <button
              onClick={() => openWaitlist("Become a vehicle partner")}
              className="mt-auto group flex items-center gap-2 text-sm font-bold text-black hover:gap-3 transition-all"
            >
              Join as a partner
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
