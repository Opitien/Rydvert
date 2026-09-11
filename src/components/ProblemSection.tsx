export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-black border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="mb-16">
          <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-5">The problem</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.88] text-white">
            Your customers<br />are moving.<br />
            <span className="text-rydvert-green">Your ads should too.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">

          {/* Traditional */}
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-10">
            <p className="text-gray-600 text-xs font-bold tracking-widest uppercase mb-8">Traditional advertising</p>
            <ul className="space-y-5">
              {[
                "Stays fixed in one location",
                "Limited daily impressions",
                "Same people see it every day",
                "Easy to ignore after a while",
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 text-gray-500 text-lg">
                  <span className="text-gray-700 font-bold">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Rydvert */}
          <div className="bg-rydvert-green rounded-3xl p-10 relative overflow-hidden">
            <p className="text-black/50 text-xs font-bold tracking-widest uppercase mb-8">Rydvert</p>
            <ul className="space-y-5">
              {[
                "Moves through the entire city",
                "New audiences reached every day",
                "Meets people where they already are",
                "Impossible to tune out on the streets",
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 text-black text-lg font-medium">
                  <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center flex-shrink-0 text-xs font-black">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
