/* How It Works — 4 minimal steps */
export function HowItWorks() {
  const steps = [
    { num: "01", label: "Create",  desc: "Design your campaign and upload your artwork." },
    { num: "02", label: "Match",   desc: "We connect your campaign with available vehicles in your area." },
    { num: "03", label: "Move",    desc: "Your advertising goes on the road through the city." },
    { num: "04", label: "Measure", desc: "Track impressions and campaign performance in the app." },
  ];

  return (
    <section id="how-it-works" className="bg-white border-t border-black/[0.06] py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <span className="text-xs tracking-widest font-bold text-black/30 uppercase">How it works</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-black text-black tracking-tight">
            Four steps from campaign to street.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-black/[0.08] rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`p-8 ${i < 3 ? "border-b sm:border-b lg:border-b-0 sm:last:border-r-0 lg:border-r border-black/[0.06]" : ""} ${i === 1 ? "sm:border-r-0 lg:border-r border-black/[0.06]" : ""}`}
            >
              <span className="text-black/20 text-xs font-bold">{s.num}</span>
              <h3 className="mt-3 text-lg font-black text-black">{s.label}</h3>
              <p className="mt-2 text-sm text-black/50 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
