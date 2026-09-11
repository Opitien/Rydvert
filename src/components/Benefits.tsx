import { Smartphone, Map as MapIcon, Eye, SlidersHorizontal } from "lucide-react";

const benefits = [
  {
    title: "MOBILE",
    description: "Your advertising moves beyond a single location — covering entire cities.",
    icon: <Smartphone size={18} className="text-rydvert-green" />,
  },
  {
    title: "LOCAL",
    description: "Reach the communities and streets that matter most to your business.",
    icon: <MapIcon size={18} className="text-rydvert-green" />,
  },
  {
    title: "VISIBLE",
    description: "Put your message in the real world where people actually spend their time.",
    icon: <Eye size={18} className="text-rydvert-green" />,
  },
  {
    title: "FLEXIBLE",
    description: "Build campaigns around your goals, target audience, and locations.",
    icon: <SlidersHorizontal size={18} className="text-rydvert-green" />,
  },
];

export function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-black border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="mb-16">
          <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-5">Why Rydvert</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.88] text-white">
            Built for<br />
            <span className="text-rydvert-green">the real world.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-white/[0.07] rounded-3xl overflow-hidden">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`p-8 md:p-10 group hover:bg-white/[0.02] transition-colors
                ${i % 2 === 0 && i < 3 ? "border-b sm:border-b" : ""}
                ${i < 3 ? "sm:border-r border-white/[0.07]" : ""}
                ${i < 2 ? "border-b border-white/[0.07]" : ""}
                ${i === 2 ? "sm:border-b-0 border-b border-white/[0.07] lg:border-b-0" : ""}
              `}
            >
              <div className="w-9 h-9 rounded-xl bg-rydvert-green/10 border border-rydvert-green/20 flex items-center justify-center mb-8">
                {b.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight">{b.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
