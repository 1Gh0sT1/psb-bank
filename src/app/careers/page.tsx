"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

// --- Types ---
interface JobPosition {
  id: string;
  title: string;
  location: string;
  level: string;
  compensation: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  applyIf: string;
}

// --- Data ---
const POSITIONS: JobPosition[] = [
  {
    id: "cdaca",
    title: "Chief Digital Asset Compliance Architect (CDACA)",
    location: "Apia, Samoa",
    level: "Executive Tier",
    compensation: "$500,000 – $700,000 + Equity",
    overview: "You will design the regulatory \"Shield\" for PSB’s multi-billion dollar hybrid portfolio. Your task is to ensure that High-Velocity digital asset flows remain invisible to systemic threats while maintaining absolute alignment with PFRC and FATF standards.",
    responsibilities: [
      "Develop AI-driven heuristics to monitor cross-chain liquidity across Layer-1 and Layer-2 protocols.",
      "Liaise with regulators in Singapore, Abu Dhabi, and Switzerland to standardize the Pacific Ledger.",
      "Conduct \"Black-Box\" stress tests on PSB’s cold-storage infrastructure to simulate nation-state level asset-seizure attempts."
    ],
    requirements: [
      "15+ years in digital asset compliance or forensic blockchain analysis for a Tier-1 financial hub.",
      "PhD in Cryptography or a Juris Doctor (JD) specializing in Supranational Digital Law.",
      "Mastery of Chainalysis and TRM Labs; fluency in Mandarin or Russian."
    ],
    applyIf: "You can balance the ethos of decentralization with the rigors of institutional compliance—and prove it mathematically."
  },
  {
    id: "pqc",
    title: "Lead Post-Quantum Cybersecurity Strategist",
    location: "Majuro, Marshall Islands",
    level: "Principal",
    compensation: "$600,000 – $850,000 + Bonuses",
    overview: "Your mission is simple: Ensure the Pacific Settlement Bank vault remains impenetrable in the age of Quantum Supremacy. You will protect over 10T in nominal client assets from Shor’s Algorithm iterations and AI-driven spear-phishing campaigns.",
    responsibilities: [
      "Architect and maintain the bank’s Lattice-Based Encryption vault (Quantum-Resistant).",
      "Manage the Leviathan Cyber Fusion Center, a 24/7 tactical unit composed of elite operatives.",
      "Simulate \"Year 2030\" offensive cyber-scenarios to identify vulnerabilities in SWIFT/SEPA bridges."
    ],
    requirements: [
      "20+ years securing critical infrastructure, nuclear command systems, or Top-Secret military networks.",
      "Groundbreaking published research in Post-Quantum Cryptography (PQC) in Nature or IEEE.",
      "Active TS/SCI clearance or equivalent high-level security credentials."
    ],
    applyIf: "You can crack a 2048-bit RSA key in your sleep—and then build something that makes that impossible for everyone else."
  }
];

// --- Components ---

const JobAccordion = ({ position }: { position: JobPosition }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-zinc-100 last:border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-10 flex flex-col md:flex-row md:items-center justify-between text-left group transition-all hover:bg-zinc-50/50 px-4 -mx-4"
      >
        <div className="flex-1">
          <h3 className="font-serif italic text-3xl text-navy group-hover:text-gold transition-colors duration-300">
            {position.title}
          </h3>
          <div className="mt-4 flex flex-wrap gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-navy/40">
            <span>{position.location}</span>
            <span className="w-1 h-1 rounded-full bg-gold/50 self-center" />
            <span>{position.level}</span>
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:text-right">
          <span className="text-xl font-light text-navy/70 italic block mb-1">
            {position.compensation}
          </span>
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gold">
            {isOpen ? "Collapse Details" : "View Opportunity"}
          </span>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-16 pt-4 grid lg:grid-cols-12 gap-16 px-4">
              <div className="lg:col-span-12 border-l-2 border-gold/20 pl-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-6">Role Overview</h4>
                <p className="text-xl font-light leading-relaxed text-navy/80 italic max-w-4xl">
                  {position.overview}
                </p>
              </div>

              <div className="lg:col-span-6 pl-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-8">Key Responsibilities</h4>
                <ul className="space-y-6">
                  {position.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-6 items-start">
                      <span className="text-gold text-lg mt-1">/</span>
                      <span className="text-lg font-light text-navy/70 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-6 pl-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-8">Requirements</h4>
                <ul className="space-y-6">
                  {position.requirements.map((item, i) => (
                    <li key={i} className="flex gap-6 items-start">
                      <span className="text-gold text-lg mt-1">/</span>
                      <span className="text-lg font-light text-navy/70 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 pt-12 border-t border-zinc-100">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-4">Apply If</h4>
                  <p className="text-lg font-serif italic text-navy/90">{position.applyIf}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen text-navy font-sans antialiased overflow-x-hidden">
      {/* 1. HERO SECTION - Elite "Old Money" Style */}
      <section className="bg-navy pt-64 pb-24 lg:pt-96 lg:pb-32 relative overflow-hidden bg-gradient-to-br from-navy via-[#01060F] to-navy">
        {/* Ambient Gold Glows */}
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        {/* Background Logo Pattern */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.02] pointer-events-none z-0">
          <img src="/assets/kit/marks/psb-mark-white.svg" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10 text-center lg:text-left">
          <Breadcrumbs
            variant="white"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Strategic Careers' }
            ]}
          />

          <div className="max-w-5xl border-l border-gold/50 pl-10">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-9xl text-white italic mb-10 leading-tight tracking-tight">
              The Path of <br className="hidden lg:block" />
              Sovereign Excellence
            </h1>
            <p className="text-xl lg:text-2xl text-white/40 font-light leading-relaxed italic max-w-3xl">
              Pacific Settlement Bank is not hiring employees; we are recruiting the architects of a secure,
              autonomous financial future. We seek the global 0.1%.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MISSION SECTION (Editorial) */}
      <section className="py-24 lg:py-48 border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-8">The Mandate</h2>
              <div className="w-12 h-[1px] bg-gold mb-12 opacity-30" />
              <p className="font-serif italic text-4xl text-navy leading-tight">
                "We do not just manage capital; we engineer the infrastructure of sovereignty."
              </p>
            </div>
            <div className="lg:col-span-8 lg:pl-24">
              <div className="prose prose-2xl prose-slate !max-w-none text-navy/60 font-light leading-relaxed italic">
                <p className="mb-12">
                  At PSB, we operate at the intersection of international maritime law, quantum-cryptographic
                  security, and global institutional liquidity. Our mission is to ensure price stability
                  and absolute asset protection for sovereign nations and global family offices.
                </p>
                <p>
                  The Future of Money is not merely digital—it is autonomous, resilient, and invisible to
                  systemic threats. We are building that reality on the Pacific Ledger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRIVILEGE FRAMEWORK (Why Join) */}
      <section className="py-24 lg:py-48 bg-zinc-50/50">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-gold text-center mb-24">The Institutional Privilege Framework</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {[
              {
                title: "Sovereign Compensation",
                desc: "Tax-neutral structures under Marshall Islands & Samoa jurisdictions, maximizing global purchasing power."
              },
              {
                title: "The Pacific Rotation",
                desc: "Strategic placement across our 11 nodes (Tahiti, Palau, Cook Islands) with private villa accommodations."
              },
              {
                title: "Elite OPSEC Perks",
                desc: "Biometric-secured residences, encrypted satellite uplinks, and tactical threat-intelligence training."
              },
              {
                title: "Legislative Access",
                desc: "Collaborate directly with the Executive Board and PFRC to shape supranational digital asset law."
              },
              {
                title: "Radical Meritocracy",
                desc: "A flat hierarchy where the most elegant mathematical solution always triumphs over bureaucracy."
              }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="text-gold text-xs font-black mb-6 tracking-widest opacity-30 group-hover:opacity-100 transition-opacity">0{idx + 1} //</div>
                <h3 className="font-serif italic text-2xl text-navy mb-4">{item.title}</h3>
                <p className="text-navy/50 font-light leading-relaxed text-lg tracking-wide">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OPEN POSITIONS */}
      <section className="py-24 lg:py-48">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="flex items-center justify-between mb-24 border-b border-zinc-100 pb-12">
            <h2 className="font-serif italic text-4xl lg:text-6xl text-navy">Strategic Opportunities</h2>
            <div className="text-[9px] font-black uppercase tracking-[0.4em] text-navy/20 flex gap-4">
              <span>Updated April 2026</span>
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            </div>
          </div>

          <div className="space-y-4">
            {POSITIONS.map((pos) => (
              <JobAccordion key={pos.id} position={pos} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. APPLICATION PROTOCOL */}
      <section className="py-24 lg:py-48 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-[500px] opacity-[0.05] pointer-events-none z-0">
          <img src="/assets/kit/marks/psb-mark-white.svg" alt="" className="w-full h-full object-contain object-right-bottom" />
        </div>

        <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Institutional' },
              { label: 'Strategic Careers' }
            ]}
          />
          <div className="max-w-4xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-12">The Submission Protocol</h2>
            <p className="text-3xl lg:text-5xl font-serif italic mb-12 leading-tight">
              Standard resumes are not accepted. <br />
              Discretion is mandatory.
            </p>

            <div className="grid md:grid-cols-3 gap-12 mt-24">
              <div>
                <span className="block text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4">Phase 01</span>
                <h4 className="text-xl font-bold mb-4">Prepare Dossier</h4>
                <p className="text-white/40 font-light leading-relaxed">Include PGP Public Key, CV, and proof of high-stakes achievements.</p>
              </div>
              <div>
                <span className="block text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4">Phase 02</span>
                <h4 className="text-xl font-bold mb-4">Secure Encryption</h4>
                <p className="text-white/40 font-light leading-relaxed">Encrypt all files using the PSB Public Key (available on our onion-mirror).</p>
              </div>
              <div>
                <span className="block text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4">Phase 03</span>
                <h4 className="text-xl font-bold mb-4">Protocol-Based Send</h4>
                <p className="text-white/40 font-light leading-relaxed flex flex-col gap-2">
                  <span>Send to: <span className="text-gold">info@pacificapitalnetwork.com</span></span>
                  <span className="text-[9px] uppercase tracking-widest mt-2">[POSITION_CODE] || [SHA-256_HASH] || [SIGNAL_ID]</span>
                </p>
              </div>
            </div>

            <div className="mt-24 pt-12 border-t border-white/10 text-center lg:text-left">
              <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em]">
                Final Note: We do not hire those who follow the path. We hire those who define where the path begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECONDARY NOTICES */}
      <section className="py-16 bg-white border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
          </div>
        </div>
      </section>
    </div>
  );
}
