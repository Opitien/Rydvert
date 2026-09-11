"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type WaitlistContextType = {
  isOpen: boolean;
  openWaitlist: (preference?: "Advertise my business" | "Become a vehicle partner") => void;
  closeWaitlist: () => void;
};

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export function useWaitlist() {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error("useWaitlist must be used within a WaitlistProvider");
  }
  return context;
}

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preference, setPreference] = useState<"Advertise my business" | "Become a vehicle partner">("Advertise my business");
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const openWaitlist = (pref?: "Advertise my business" | "Become a vehicle partner") => {
    if (pref) setPreference(pref);
    setIsOpen(true);
    setStatus("idle");
  };

  const closeWaitlist = () => setIsOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <WaitlistContext.Provider value={{ isOpen, openWaitlist, closeWaitlist }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              onClick={closeWaitlist}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={closeWaitlist}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black transition-colors rounded-full hover:bg-gray-100"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="p-8">
                {status === "success" ? (
                  <div className="text-center py-8">
                    <div className="mx-auto w-16 h-16 bg-rydvert-green/10 text-rydvert-green rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">You're on the list.</h3>
                    <p className="text-gray-600">We'll let you know when Rydvert is ready.</p>
                    <button
                      onClick={closeWaitlist}
                      className="mt-8 w-full py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-1">Coming soon.</h3>
                    <p className="text-gray-600 mb-8">Be first to know when Rydvert launches.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rydvert-green focus:border-transparent transition-all" placeholder="Jane Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                        <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rydvert-green focus:border-transparent transition-all" placeholder="jane@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Business name (Optional)</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rydvert-green focus:border-transparent transition-all" placeholder="Company Inc." />
                      </div>

                      <div className="pt-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">I want to...</label>
                        <div className="space-y-2">
                          <label className="flex items-center p-3 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                            <input
                              type="radio"
                              name="preference"
                              value="Advertise my business"
                              checked={preference === "Advertise my business"}
                              onChange={() => setPreference("Advertise my business")}
                              className="w-4 h-4 text-rydvert-green focus:ring-rydvert-green border-gray-300"
                            />
                            <span className="ml-3 font-medium text-gray-900">Advertise my business</span>
                          </label>
                          <label className="flex items-center p-3 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                            <input
                              type="radio"
                              name="preference"
                              value="Become a vehicle partner"
                              checked={preference === "Become a vehicle partner"}
                              onChange={() => setPreference("Become a vehicle partner")}
                              className="w-4 h-4 text-rydvert-green focus:ring-rydvert-green border-gray-300"
                            />
                            <span className="ml-3 font-medium text-gray-900">Become a vehicle partner</span>
                          </label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full mt-6 py-4 bg-rydvert-green text-black rounded-full font-bold text-lg hover:bg-[#02d15a] transition-all disabled:opacity-70 flex items-center justify-center shadow-lg shadow-rydvert-green/20"
                      >
                        {status === "loading" ? <Loader2 className="animate-spin" /> : "Join the waitlist"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </WaitlistContext.Provider>
  );
}
