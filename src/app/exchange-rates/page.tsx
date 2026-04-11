"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

// --- Data based on TZ #275-314 ---
const EXECUTION_TIERS = [
  {
    tier: "Tier 1: Standard Institutional",
    mandate: "$1M – $10M USD Equivalent",
    features: [
      "Direct access to interbank spreads with a 0.05% liquidity buffer.",
      "T+0 settlement for major G10 pairs (USD, EUR, GBP, JPY)."
    ]
  },
  {
    tier: "Tier 2: Premium Global",
    mandate: "$10M – $50M USD Equivalent",
    features: [
      "Bespoke, ultra-tight spreads with prioritized execution on the Pacific Ledger.",
      "Access to exotic Pacific pairs (WST, VUV, FJD) with guaranteed depth."
    ]
  },
  {
    tier: "Tier 3: Sovereign & Major Corporate",
    mandate: "$50M+ USD Equivalent",
    features: [
      "Direct \"Dark Pool\" execution to minimize market impact.",
      "Negotiated locked-in rates via the Global Liquidity Desk."
    ]
  }
];

const SectionHeader = ({ label, title, light = false }: { label: string; title: string; light?: boolean }) => (
  <div className="mb-16">
    <span className={`text-[10px] font-black uppercase tracking-[0.5em] mb-8 block ${light ? 'text-gold/50' : 'text-gold'}`}>
      {label}
    </span>
    <h2 className={`font-serif italic text-4xl lg:text-6xl leading-tight ${light ? 'text-white' : 'text-navy'}`}>
      {title}
    </h2>
  </div>
);

export default function ExchangeRatesPage() {
  return (
    <div className="bg-white min-h-screen text-navy font-sans antialiased overflow-x-hidden">
      {/* 1. HERO - Sovereign Standard */}
      <section className="pt-64 lg:pt-96 pb-20 border-b border-white/5 bg-navy relative overflow-hidden bg-gradient-to-br from-navy via-[#01060F] to-navy">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.02] pointer-events-none z-0">
          <img src="/assets/kit/marks/psb-mark-white.svg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
          <Breadcrumbs 
            variant="white"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Banking & Markets' },
              { label: 'Exchange Rates' }
            ]} 
          />

          <div className="border-l border-gold/50 pl-10 mb-16">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-9xl text-white mb-8 leading-tight tracking-tight">
              Exchange Rates
            </h1>
            <div className="flex flex-wrap items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
              <span>Institution: Pacific Settlement Bank</span>
              <span className="w-1 h-1 rounded-full bg-gold/50" />
              <span>Reference Quote: 08:00 GMT+12</span>
              <span className="w-1 h-1 rounded-full bg-gold/50" />
              <span className="text-gold">Sovereign Standard</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="py-24 lg:py-48 border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-4">
              <SectionHeader label="Overview" title="High-Velocity Global Gateway" />
              <div className="w-12 h-[1px] bg-gold mb-12 opacity-30" />
            </div>
            <div className="lg:col-span-8 lg:pl-24">
              <div className="prose prose-2xl prose-slate !max-w-none text-navy/60 font-light leading-relaxed italic">
                <p className="mb-12">
                  Pacific Settlement Bank (PSB) operates a high-velocity liquidity engine designed for the specific needs of the Pacific Financial Governance District (PFGD). We bridge the gap between traditional G10 fiat markets and the emerging digital asset economy.
                </p>
                <div className="grid md:grid-cols-2 gap-12 mt-16 text-lg not-italic font-sans">
                   <div className="border-l border-gold/30 pl-8">
                      <h4 className="font-bold text-navy mb-4">Global Aggregation Layer</h4>
                      <p className="text-navy/50">Our rates are derived from a composite of Tier-1 interbank liquidity providers in London, New York, and Singapore, integrated with proprietary decentralized pools.</p>
                   </div>
                   <div className="border-l border-gold/30 pl-8">
                      <h4 className="font-bold text-navy mb-4">Real-Time Synchronization</h4>
                      <p className="text-navy/50">All quotes are processed through the Pacific Ledger, ensuring that the rate you see is the rate at which your transaction is cleared.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PIRR SPOTLIGHT */}
      <section className="py-24 lg:py-48 bg-zinc-50/50">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="bg-white border border-zinc-100 p-12 lg:p-24 shadow-sm relative overflow-hidden">
             <div className="relative z-10 max-w-4xl">
                <SectionHeader label="Proprietary Standard" title="The Pacific Institutional Reference Rate (PIRR)" />
                <p className="text-2xl font-light text-navy/70 leading-relaxed italic mb-12">
                  The PIRR is our proprietary, forensic-grade benchmark index. It serves as the "Sovereign Standard" for all financial operations within our 11 regional nodes.
                </p>
                <ul className="grid md:grid-cols-2 gap-8 list-none p-0 tracking-wide text-navy/60 text-sm">
                   <li className="flex gap-4 items-baseline">
                      <span className="text-gold font-black">/</span>
                      <span>Trust & Estate Planning: Automated USD/EUR/AUD/NZD conversions for complex international legacy structures.</span>
                   </li>
                   <li className="flex gap-4 items-baseline">
                      <span className="text-gold font-black">/</span>
                      <span>Sovereign Debt Settlements: Specialized AUD/NZD/USD rates for the liquidation of regional infrastructure and blue bonds.</span>
                   </li>
                   <li className="flex gap-4 items-baseline">
                      <span className="text-gold font-black">/</span>
                      <span>Digital Arbitrage Efficiency: Instant fiat-to-digital settlements that eliminate the standard 48-hour banking delay.</span>
                   </li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* 4. EXECUTION TIERS */}
      <section className="py-24 lg:py-48">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <SectionHeader label="Liquidity Classes" title="Execution Protocols" />
          <div className="grid lg:grid-cols-3 gap-12 mt-24">
            {EXECUTION_TIERS.map((item, idx) => (
              <div key={idx} className="border border-zinc-100 p-12 hover:shadow-sm transition-all duration-500 group">
                <h3 className="font-serif italic text-2xl text-navy mb-2 group-hover:text-gold transition-colors">{item.tier}</h3>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/20 mb-8">{item.mandate}</div>
                <div className="w-8 h-[1px] bg-gold/30 mb-8" />
                <ul className="space-y-4">
                   {item.features.map((feat, i) => (
                     <li key={i} className="text-sm text-navy/50 font-light flex gap-3">
                        <span className="text-gold">•</span>
                        {feat}
                     </li>
                   ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HYBRID ASSETS */}
      <section className="py-24 lg:py-48 bg-navy text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
          <SectionHeader label="Settlement Paths" title="Hybrid Asset Classes" light />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-24">
             {[
               { title: "Fiat Currencies", desc: "Support for 55+ global currencies, including specialized corridors for Asia-Pacific trade." },
               { title: "Digital Reserve Assets", desc: "Institutional liquidity for BTC, ETH, and compliant Stablecoins (USDC/EURC)." },
               { title: "Precious Metals", desc: "Real-time settlement for XAU (Gold) and XAG (Silver) vault-to-vault swaps." },
               { title: "Blue Carbon Credits", desc: "Trading and settlement rates for sovereign-backed environmental assets." }
             ].map((asset, i) => (
               <div key={i} className="border-t border-white/10 pt-12">
                  <h4 className="font-serif italic text-2xl text-white mb-4">{asset.title} //</h4>
                  <p className="text-white/40 font-light text-sm leading-relaxed tracking-wide">{asset.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. COMPLIANCE & VOLATILITY */}
      <section className="py-24 lg:py-40 bg-zinc-50 border-y border-zinc-100">
        <div className="mx-auto max-w-5xl px-8 lg:px-12">
           <SectionHeader label="Forensic Compliance" title="Forensic Compliance & Volatility Guard" />
           <div className="space-y-12 text-navy text-sm font-light leading-relaxed italic">
              <p>Every FX flow is monitored by PFRC-integrated AI to ensure 100% compliance with FATF and OECD transparency mandates.</p>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                   <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-4">Geopolitical Stress</h4>
                   <p className="text-navy/60">A 1.5% – 4.0% premium is applied to settlements involving unstable or high-risk jurisdictions (e.g., ARS, TRY, ZAR).</p>
                </div>
                <div>
                   <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-4">Weekend Liquidity</h4>
                   <p className="text-navy/60">Transactions initiated during non-interbank hours (Saturday/Sunday) include a 0.85% premium to maintain liquidity buffer integrity.</p>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. BESPOKE REQUEST */}
      <section className="py-24 lg:py-48">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
           <div className="max-w-4xl border-l-[3px] border-gold pl-10 lg:pl-16">
              <SectionHeader label="Bespoke Quotes" title="Requesting Bespoke Quotes" />
              <p className="text-2xl font-light text-navy/60 leading-relaxed italic mb-16">
                For large-scale liquidations or unique settlement paths, authorized clients must utilize our Encrypted Rate Portal.
              </p>
              
              <div className="grid md:grid-cols-2 gap-16">
                 <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-4">Contact Protocol</h4>
                    <p className="text-3xl font-serif text-navy">liquidity@psb-pacific.com</p>
                    <div className="mt-8 text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex flex-col gap-2">
                       <span>PGP Encryption: Mandatory</span>
                       <span>SLA: 45 Minutes</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
