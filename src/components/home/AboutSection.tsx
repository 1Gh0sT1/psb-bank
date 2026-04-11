'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-48 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start relative">

          {/* Left Column: Image & Layered Trust Card */}
          <div className="w-full lg:w-5/12 relative">
            <div className="relative aspect-square overflow-hidden border border-zinc-100 shadow-2xl">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                src="/images/about/hq.png"
                alt="The Leviathan Plaza - PSB Headquarters"
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Institutional Pillars Card (Floating) */}
            <div className="absolute -bottom-10 -right-8 lg:-right-16 bg-white border border-zinc-100 p-8 lg:p-10 shadow-2xl max-w-xs hidden sm:block">
              <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-navy/40 mb-8 border-b border-zinc-50 pb-4">Institutional Pillars</h4>
              <ul className="space-y-6">
                {[
                  { label: 'Foundation', val: 'Sovereign Act 2011' },
                  { label: 'Presence', val: '11 Strategic Nodes' },
                  { label: 'Compliance', val: 'FATF / OECD Standards' },
                  { label: 'Transparency', val: 'Pacific Ledger Protocol' }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="text-[7px] font-black uppercase tracking-widest text-gold mb-1">{item.label}</span>
                    <span className="text-xs font-serif text-navy italic">{item.val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Narrative & Accordion */}
          <div className="w-full lg:w-7/12 pt-6 lg:pt-0">
            <div className="border-l-4 border-gold pl-10 mb-12">
              <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-navy/30 mb-6 italic">About the Bank</h2>
              <h3 className="font-serif text-5xl lg:text-7xl text-navy leading-tight italic">Pacific Settlement <br />Bank (PSB).</h3>
              {/* About PSB - Literal TZ Text Layout */}
              <div className="flex flex-col gap-12 text-xl text-navy/50 font-light leading-relaxed mb-16 italic font-serif">
                <p>
                  Pacific Settlement Bank (PSB) was established in 2011 pursuant to the Sovereign Financial Framework Act of the Marshall Islands. Founded to bridge the gap between traditional capital markets and the emerging digital economy, PSB operates as a premier, autonomous financial institution headquartered in Majuro, Republic of the Marshall Islands.
                </p>
                <p className="text-navy/60 not-italic font-serif border-t border-zinc-100 pt-10">
                  The Pacific Settlement Bank (PSB) is the central node for institutional capital and forensic transparency across the PFGD jurisdictions. Our mandate centers on capital preservation and high-stakes fiduciary engineering.
                </p>
              </div>
            </div>

            {/* Board of Directors Accordion */}
            <div className="border-y border-zinc-100">
              <BoardAccordion />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function BoardAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-12">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between group text-left"
      >
        <div className="flex flex-col">
          <h4 className="font-serif text-3xl lg:text-4xl text-navy group-hover:text-gold transition-colors">The Board of Directors</h4>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/30 mt-4 italic">Supreme Governing & Fiduciary Body</p>
        </div>
        <div className={`w-12 h-12 rounded-full border border-zinc-100 flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-navy border-navy' : 'group-hover:border-gold'}`}>
          <span className={`text-2xl transition-all duration-500 font-light ${isOpen ? 'text-white rotate-180' : 'text-navy group-hover:text-gold'}`}>
            {isOpen ? '−' : '+'}
          </span>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pt-16 pb-8 space-y-12">
              <div className="p-10 bg-zinc-50 border border-zinc-100">
                <h5 className="text-[10px] font-black uppercase tracking-widest text-gold mb-8">4 Executive Members</h5>
                <p className="text-sm text-navy/60 font-light leading-relaxed italic">
                  Comprising the CEO, Chief Operating Officer (COO), Chief Technology Officer (CTO), and Chief Compliance Officer (CCO).
                </p>
              </div>
              <div className="p-10 bg-zinc-50 border border-zinc-100">
                <h5 className="text-[10px] font-black uppercase tracking-widest text-gold mb-8">7 Non-Executive Members</h5>
                <p className="text-sm text-navy/60 font-light leading-relaxed italic">
                  Independent global experts in international maritime law, quantum-cryptography, and Pacific macroeconomics, appointed to ensure diverse representation and objective governance.
                </p>
              </div>

              <div className="space-y-8 text-lg text-navy/40 font-light leading-relaxed italic">
                <p>
                  The Board convenes quarterly at the Global Governance Hub in Majuro, with additional field sessions held at regional strategic nodes (e.g., Tahiti, Fiji, and Vanuatu) to review operational performance and PFRC-compliance audits.
                </p>
                <p>
                  Extraordinary sessions are mandated to address systemic shifts, such as emerging cybersecurity paradigms or changes in global fiscal policy. The non-executive body includes high-level representatives from key Pacific jurisdictions, ensuring that PSB remains the bedrock of regional financial stability.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
