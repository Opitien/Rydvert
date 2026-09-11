"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Preference = "Advertise my business" | "Become a vehicle partner";

type WaitlistContextType = {
  isOpen: boolean;
  openWaitlist: (preference?: Preference) => void;
  closeWaitlist: () => void;
};

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export function useWaitlist() {
  const context = useContext(WaitlistContext);
  if (!context) throw new Error("useWaitlist must be used within a WaitlistProvider");
  return context;
}

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preference, setPreference] = useState<Preference>("Advertise my business");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const openWaitlist = (pref?: Preference) => {
    if (pref) setPreference(pref);
    setIsOpen(true);
    setStatus("idle");
  };
  const closeWaitlist = () => setIsOpen(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeWaitlist();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  };

  return (
    <WaitlistContext.Provider value={{ isOpen, openWaitlist, closeWaitlist }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            role="dialog"
            aria-modal="true"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeWaitlist}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-[500px] max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/[0.08] rounded-[24px] shadow-2xl p-6 md:p-8 custom-scrollbar"
            >
              <button
                onClick={closeWaitlist}
                className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
                aria-label="Close"
              >
                <X size={14} />
              </button>

              {status === "success" ? (
                <div className="text-center py-6">
                  <div className="mx-auto w-16 h-16 bg-rydvert-green/10 text-rydvert-green rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3 uppercase">You're on the list.</h3>
                  <p className="text-white/40 text-sm leading-relaxed">We'll let you know when Rydvert is ready.</p>
                  <button
                    onClick={closeWaitlist}
                    className="mt-8 w-full py-4 bg-rydvert-green text-black rounded-xl font-black hover:bg-white transition-colors uppercase tracking-wide text-sm"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <p className="text-rydvert-green text-[10px] font-black tracking-widest uppercase mb-1">Coming soon</p>
                    <h3 className="text-2xl font-black text-white uppercase leading-tight tracking-tight">Be first to know.</h3>
                    <p className="text-white/40 mt-2 text-sm leading-relaxed pr-6">Join the waitlist and we'll notify you the moment Rydvert launches.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-black text-white/40 uppercase tracking-wider mb-2">
                        Full name
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#111] border border-white/[0.05] text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors text-sm"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-white/40 uppercase tracking-wider mb-2">
                        Email address
                      </label>
                      <input
                        required
                        type="email"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#111] border border-white/[0.05] text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors text-sm"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-white/40 uppercase tracking-wider mb-2">
                        Business name <span className="lowercase font-normal tracking-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#111] border border-white/[0.05] text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors text-sm"
                        placeholder="Company Inc."
                      />
                    </div>

                    <div className="pt-2">
                      <label className="block text-[10px] font-black text-white/40 uppercase tracking-wider mb-3">
                        I want to...
                      </label>
                      <div className="space-y-2">
                        {(["Advertise my business", "Become a vehicle partner"] as Preference[]).map((opt) => (
                          <label
                            key={opt}
                            className={`flex items-center gap-3.5 px-4 py-3 rounded-xl border cursor-pointer transition-all ${
                              preference === opt
                                ? "border-rydvert-green bg-rydvert-green/[0.03] text-white"
                                : "border-white/[0.05] bg-[#111] text-white/60 hover:border-white/10"
                            }`}
                          >
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                              preference === opt ? "border-rydvert-green" : "border-white/20"
                            }`}>
                              {preference === opt && <div className="w-2 h-2 rounded-full bg-rydvert-green" />}
                            </div>
                            <input
                              type="radio"
                              name="wl-preference"
                              value={opt}
                              checked={preference === opt}
                              onChange={() => setPreference(opt)}
                              className="sr-only"
                            />
                            <span className="text-sm font-medium">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full mt-4 py-4 bg-rydvert-green text-black rounded-xl font-black text-sm hover:bg-white transition-all disabled:opacity-60 flex items-center justify-center gap-2 uppercase tracking-wide"
                    >
                      {status === "loading" ? <Loader2 className="animate-spin" size={20} /> : "Join the waitlist"}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </WaitlistContext.Provider>
  );
}
