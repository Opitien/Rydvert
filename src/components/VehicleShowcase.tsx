/* Editorial vehicle showcase — "On the road" */
function VehicleCard({
  badge,
  brand,
  sub,
  wide = false,
}: {
  badge: string;
  brand: string;
  sub: string;
  wide?: boolean;
}) {
  return (
    <div className={`relative bg-[#0d0d0d] rounded-2xl overflow-hidden ${wide ? "md:col-span-2" : ""}`}>
      {/* Status indicator */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-white/[0.08] rounded-full px-3 py-1">
        <div className="w-1.5 h-1.5 rounded-full bg-rydvert-green animate-pulse" />
        <span className="text-white/70 text-[10px] font-medium">{badge}</span>
      </div>

      {/* Vehicle illustration */}
      <div className={`flex items-end justify-center px-8 pt-12 pb-0 ${wide ? "aspect-[2/1]" : "aspect-[4/3]"}`}>
        <svg
          viewBox="0 0 400 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {/* Body */}
          <rect x="10"  y="60"  width="380" height="85" rx="6" fill="#1a1a1a" />
          {/* Cab */}
          <rect x="10"  y="30"  width="90"  height="76" rx="6" fill="#1a1a1a" />
          {/* Windscreen */}
          <rect x="18"  y="38"  width="74"  height="50" rx="3" fill="#0a1a1a" />
          {/* Ad panel */}
          <rect x="110" y="68"  width="272" height="70" rx="3" fill="#000" />
          <rect x="110" y="68"  width="272" height="70" rx="3" stroke="#02E965" strokeWidth="1" strokeOpacity="0.3" />

          {/* Brand text */}
          <text x="246" y="100" textAnchor="middle" fontFamily="system-ui,sans-serif" fontWeight="900" fontSize="18" fill="white">
            {brand}
          </text>
          <text x="246" y="118" textAnchor="middle" fontFamily="system-ui,sans-serif" fontWeight="400" fontSize="8"  fill="#555" letterSpacing="2">
            {sub}
          </text>

          {/* Live badge */}
          <rect x="352" y="72" width="26" height="12" rx="6" fill="#02E965" />
          <text x="365" y="81" textAnchor="middle" fontFamily="system-ui,sans-serif" fontWeight="800" fontSize="6" fill="#000">LIVE</text>

          {/* Wheel left */}
          <circle cx="90"  cy="145" r="18" fill="#111" stroke="#252525" strokeWidth="3" />
          <circle cx="90"  cy="145" r="7"  fill="#1a1a1a" />
          {/* Wheel right */}
          <circle cx="300" cy="145" r="18" fill="#111" stroke="#252525" strokeWidth="3" />
          <circle cx="300" cy="145" r="7"  fill="#1a1a1a" />

          {/* Door line */}
          <line x1="108" y1="62" x2="108" y2="145" stroke="#222" strokeWidth="1.5" />
          {/* Headlight */}
          <rect x="12" y="98" width="8" height="5" rx="2.5" fill="#02E965" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}

export function VehicleShowcase() {
  return (
    <section className="bg-black border-t border-white/[0.04] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs tracking-widest font-bold text-white/20 uppercase">On the road</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-black text-white tracking-tight">
              Your brand, in motion.
            </h2>
          </div>
          <p className="text-white/30 text-sm max-w-xs leading-relaxed">
            Every campaign runs on real vehicles, across real streets, reaching real people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <VehicleCard badge="Abuja · Active"    brand="FRESHBREW"  sub="COFFEE · 3 LOCATIONS"  />
          <VehicleCard badge="Lagos · 2.4km"     brand="URBAN"      sub="FASHION · NEW SEASON"   />
          <VehicleCard badge="Abuja · Active"    brand="NOVA"       sub="REAL ESTATE · LEKKI"    />
        </div>

      </div>
    </section>
  );
}
