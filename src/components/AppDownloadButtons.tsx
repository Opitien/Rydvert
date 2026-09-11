"use client";

import { useWaitlist } from "./WaitlistProvider";

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.18 23.76c.31.17.67.19 1.01.07L15.47 12 11.77 8.3 3.18 23.76zM20.5 10.69l-2.83-1.62-4.05 3.66 4.05 3.66 2.85-1.63c.81-.46.81-1.61-.02-2.07zM2.01 1.05C1.98 1.2 2 1.36 2 1.53V22.47c0 .21.04.4.11.57L13.72 12 2.01 1.05zM15.47 12L4.19.24C3.85.12 3.49.14 3.18.31l8.59 8.58L15.47 12z" />
  </svg>
);

export function AppDownloadButtons() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="py-20 md:py-28 bg-black border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">

          <div>
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-5">The app</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] text-white max-w-xl">
              Advertising that moves<br />
              <span className="text-rydvert-green">with your audience.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs lg:block hidden mb-2">
              Rydvert connects businesses with vehicles that carry their message through the real world.
            </p>
            <button
              onClick={() => openWaitlist()}
              className="flex items-center gap-4 bg-white/5 border border-white/10 text-white px-6 py-4 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-colors w-full lg:w-64"
            >
              <AppleIcon />
              <div className="text-left">
                <div className="text-[10px] text-gray-500 leading-tight uppercase tracking-wider">Download on the</div>
                <div className="text-sm font-bold leading-tight">App Store</div>
              </div>
            </button>
            <button
              onClick={() => openWaitlist()}
              className="flex items-center gap-4 bg-white/5 border border-white/10 text-white px-6 py-4 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-colors w-full lg:w-64"
            >
              <GooglePlayIcon />
              <div className="text-left">
                <div className="text-[10px] text-gray-500 leading-tight uppercase tracking-wider">Get it on</div>
                <div className="text-sm font-bold leading-tight">Google Play</div>
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
