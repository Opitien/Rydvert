"use client";

import { useWaitlist } from "./WaitlistProvider";

export function FinalCTA() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="bg-black border-t border-white/[0.04] py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <span className="text-xs tracking-widest font-bold text-white/20 uppercase">Coming soon</span>

        <h2 className="mt-6 text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
          Rydvert is coming.
        </h2>

        <p className="mt-5 text-white/40 text-lg max-w-md mx-auto leading-relaxed">
          Be first on the road. Join the waitlist and we'll notify you the moment we launch.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => openWaitlist()}
            className="px-8 py-4 bg-rydvert-green text-black font-bold rounded-full hover:bg-white transition-colors text-sm"
          >
            Join the waitlist
          </button>
          <button
            onClick={() => openWaitlist()}
            className="px-8 py-4 border border-white/10 text-white/60 rounded-full hover:border-white/20 hover:text-white transition-colors text-sm"
          >
            Get the app
          </button>
        </div>

      </div>
    </section>
  );
}
