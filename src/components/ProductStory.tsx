/* Product Story section — "THE IDEA" */
export function ProductStory() {
  return (
    <section id="product" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Copy */}
          <div>
            <span className="text-xs tracking-widest font-bold text-black/30 uppercase">The idea</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-black text-black leading-tight tracking-tight">
              Advertising that moves.
            </h2>
            <p className="mt-6 text-black/60 text-lg leading-relaxed max-w-md">
              Rydvert turns participating vehicles into moving advertising spaces. Instead of a fixed billboard, your campaign travels through the city — reaching new people on every journey.
            </p>
            <p className="mt-4 text-black/40 leading-relaxed max-w-md">
              For businesses, it means genuine reach in the real world. For vehicle owners, it's a way to earn from space that already exists.
            </p>
          </div>

          {/* Campaign creation phone mockup */}
          <div className="flex justify-center">
            <div className="relative w-[240px]">
              <div className="absolute inset-0 bg-black/5 blur-[40px] rounded-full scale-110 pointer-events-none" />
              <div className="relative bg-[#0d0d0d] rounded-[2.2rem] border-[4px] border-black/10 overflow-hidden shadow-xl">
                <div className="h-5 bg-[#0d0d0d] flex items-center justify-center">
                  <div className="w-20 h-4 bg-black rounded-b-2xl" />
                </div>

                <div className="px-4 pb-5 flex flex-col gap-3">
                  <div className="flex items-center justify-between pt-1 mb-1">
                    <span className="text-white font-bold text-sm">New Campaign</span>
                    <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30 text-xs">✕</div>
                  </div>

                  {/* Ad preview */}
                  <div className="w-full h-28 bg-black rounded-xl border border-white/[0.07] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #02E965, transparent 70%)" }} />
                    <div className="text-center z-10">
                      <div className="text-white font-black text-sm">YOUR BRAND</div>
                      <div className="text-rydvert-green text-[9px] font-bold mt-1">PREVIEW</div>
                    </div>
                  </div>

                  {[
                    { label: "Campaign name", val: "Summer Launch" },
                    { label: "Location", val: "Abuja, Central" },
                    { label: "Duration", val: "2 weeks" },
                  ].map((f) => (
                    <div key={f.label}>
                      <div className="text-white/20 text-[9px] font-bold uppercase tracking-wider mb-1">{f.label}</div>
                      <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-2.5 text-white text-xs">{f.val}</div>
                    </div>
                  ))}

                  <button className="w-full py-3 mt-1 bg-rydvert-green text-black font-bold rounded-xl text-xs uppercase tracking-wider">
                    Launch campaign
                  </button>
                </div>

                <div className="h-5 flex items-center justify-center bg-[#0d0d0d]">
                  <div className="w-20 h-1 bg-white/10 rounded-full" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
