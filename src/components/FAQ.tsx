"use client";

import { useWaitlist } from "./WaitlistProvider";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is Rydvert?",
    answer: "Rydvert is a mobile advertising platform that allows businesses to advertise on moving vehicles, turning everyday cars and delivery fleets into mobile advertising spaces across the city.",
  },
  {
    question: "How does advertising on vehicles work?",
    answer: "Businesses create a campaign and upload their artwork. We handle printing and installation on participating vehicles. Those vehicles then drive their normal daily routes — giving your brand continuous exposure across the city.",
  },
  {
    question: "Who can advertise with Rydvert?",
    answer: "Any business looking for local exposure. From new startups and local restaurants to real estate agents and event organizers — if your customers are in the city, Rydvert can reach them.",
  },
  {
    question: "How can I become a vehicle partner?",
    answer: "Join our waitlist as a driver partner. Once we launch in your area, you'll download the app, get your vehicle set up, and start earning passively as you drive your normal routes.",
  },
  {
    question: "Is the Rydvert app available yet?",
    answer: "Not yet — we are currently in our pre-launch phase. Join the waitlist to be notified the moment we go live in your city.",
  },
  {
    question: "Where will Rydvert operate?",
    answer: "We are launching initially in select major Nigerian cities. Waitlist data helps us prioritize where to launch next, so make sure to sign up.",
  },
  {
    question: "How do I join the waitlist?",
    answer: "Click any 'Join the waitlist' button on this page. Fill in your details and tell us whether you want to advertise or partner as a driver. We'll reach out as soon as we launch.",
  },
];

export function FAQ() {
  const { openWaitlist } = useWaitlist();

  return (
    <section id="faq" className="py-20 md:py-28 bg-black border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-4xl">

        <div className="mb-16">
          <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-5">FAQ</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.88] text-white">
            Questions.
          </h2>
        </div>

        <div className="divide-y divide-white/[0.06]">
          {faqs.map((faq, i) => (
            <details key={i} className="group py-7 cursor-pointer">
              <summary className="flex justify-between items-center gap-4 font-bold text-white list-none select-none">
                <span className="text-lg">{faq.question}</span>
                <span className="w-8 h-8 flex-shrink-0 rounded-full border border-white/10 flex items-center justify-center transition-transform group-open:rotate-45 group-open:border-rydvert-green group-open:text-rydvert-green">
                  <Plus size={15} />
                </span>
              </summary>
              <div className="text-gray-500 mt-5 leading-relaxed pr-12">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
