'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function FXAuctionContent() {
  return (
    <main className="bg-white min-h-screen pb-0">
      {/* 1. HERO / INTRODUCTION */}
      <section className="bg-navy pt-48 lg:pt-60 pb-32 lg:pb-48 relative overflow-hidden">
        {/* Watermark Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.02] pointer-events-none z-0">
          <img src="/assets/kit/marks/psb-mark-white.svg" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
          <div className="mb-12">
            <Breadcrumbs 
              variant="white"
              items={[
                { label: 'Home', href: '/' },
                { label: 'Banking & Markets' },
                { label: 'FX Auction' }
              ]} 
            />
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
            <div className="w-full lg:w-8/12">
              <div className="flex items-center gap-6 mb-12">
                <img src="/assets/kit/marks/psb-mark-white.svg" alt="PSB Logo" className="h-10 w-auto" />
                <div className="h-8 w-[1px] bg-gold/30" />
                <h1 className="text-[11px] font-black uppercase tracking-[0.8em] text-white/60">FX Auction</h1>
              </div>
              
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-[8rem] text-white leading-[0.9] italic tracking-tight">
                The Sovereign <br /> Gateway to <br /> <span className="text-gold">Multimodal Liquidity</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARCHITECTURAL OVERVIEW */}
      <section className="bg-zinc-50 py-24 lg:py-48 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="mb-16 lg:mb-24">
             <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-navy/30 mb-8 italic">Structure</h3>
             <h4 className="font-serif text-3xl sm:text-4xl lg:text-7xl text-navy italic leading-snug">Architectural Overview.</h4>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
             <div className="space-y-10 text-[16px] lg:text-[18px] text-navy/70 font-serif italic leading-relaxed">
                <p>
                  The Pacific Settlement Bank (PSB) conducts high-stakes, bespoke asset auctions engineered specifically for central banks, sovereign wealth funds (SWFs), multinational conglomerates, and accredited institutional investors. Operating within the Pacific Financial Governance District (PFGD), PSB provides a unique venue where traditional G10 fiat liquidity intersects with institutional-grade digital assets and tokenized hard commodities.
                </p>
                <p>
                  Unlike legacy central bank auctions that are restricted by T+2 settlement delays and rigid fiat-only structures, PSB’s auction engine utilizes the Pacific Ledger protocol. This allows for the simultaneous optimization of liquidity across our 11 strategic regional nodes, providing participants with unprecedented agility in cross-border capital rebalancing.
                </p>
             </div>

             <div className="space-y-12">
                <p className="text-[11px] font-black uppercase tracking-[0.4em] text-gold border-b border-gold/20 pb-4">
                   Core Auction Pillars
                </p>
                <div className="space-y-8">
                   {[
                     { title: "Multimodal Liquidity Pools", desc: "A single auction session allows for synchronized bidding across fiat (USD, EUR, CHF, JPY), digital reserve assets (BTC, ETH, Institutional Stablecoins), and tokenized precious metals (XAU, XPT)." },
                     { title: "Sovereign-Tier Exclusivity", desc: "Access is restricted to Tier-1 entities. Participation requires a minimum liquidity mandate of $25M USD in PSB-vaulted assets or a verified institutional AUM of $500M USD." },
                     { title: "The Pacific Institutional Reference Rate (PIRR)", desc: "All auctions are governed by our proprietary benchmark, which aggregates interbank spreads from global hubs (Singapore, Zurich) with real-time regional liquidity and commodity futures." }
                   ].map((pillar, i) => (
                     <div key={i} className="border-l-2 border-gold/30 pl-8 py-2">
                        <h5 className="font-serif text-xl text-navy italic mb-2">{pillar.title}</h5>
                        <p className="text-sm text-navy/50 font-light leading-relaxed">{pillar.desc}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC AUCTION CYCLES */}
      <section className="py-32 lg:py-48 bg-white">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="w-full lg:w-5/12">
               <div className="border-l-4 border-gold pl-12">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-navy/30 mb-8 italic">Frequency</h3>
                 <h4 className="font-serif text-5xl lg:text-7xl text-navy leading-tight italic">Auction Cycles.</h4>
                 <p className="mt-12 text-lg text-navy/60 font-serif italic italic leading-relaxed">
                   The frequency and volume of PSB auctions are not static. Our Liquidity Intelligence Unit (LIU) monitors global macroeconomic catalysts to trigger sessions when market depth is most needed.
                 </p>
               </div>
            </div>
            
            <div className="w-full lg:w-7/12 space-y-8">
               <div className="px-10 py-12 bg-zinc-50 border border-zinc-100 italic font-serif">
                  <h5 className="text-[11px] font-black uppercase tracking-[0.4em] text-navy/30 mb-10 pb-6 border-b border-zinc-200">2026 Institutional Calendar Logic</h5>
                  <div className="space-y-12">
                     {[
                       { q: "Q1", title: "Capital Allocation Phase", desc: "Focus on initial portfolio positioning and sovereign reserve diversification." },
                       { q: "Q2", title: "Fiscal Sovereignty Season", desc: "Increased frequency (8–10 sessions) to facilitate multinational tax-neutrality structuring and residency renewals." },
                       { q: "Q3", title: "Infrastructure & Blue Finance", desc: "Strategic auctions dedicated to funding regional maritime projects and Blue Bond liquidations." },
                       { q: "Q4", title: "Year-End Rebalancing", desc: "Maximum operational density (10+ sessions) to support global institutional portfolio closing and audit-ready asset migration." }
                     ].map((item, i) => (
                       <div key={i} className="flex gap-10 items-start">
                          <span className="text-2xl text-gold font-serif">{item.q}</span>
                          <div>
                             <h6 className="text-[14px] font-bold text-navy mb-2 tracking-tight">{item.title}</h6>
                             <p className="text-sm text-navy/50 leading-relaxed font-light">{item.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MANDATORY PROTOCOLS */}
      <section className="py-32 lg:py-48 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
          <div className="mb-24 text-center">
            <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-gold mb-8 italic">Compliance</h3>
            <h4 className="font-serif text-4xl lg:text-7xl text-white italic">Mandatory Protocols.</h4>
            <p className="mt-8 text-white/40 font-serif italic max-w-2xl mx-auto">
               To maintain the integrity of the Pacific Financial Governance District, all participants must adhere to the following rigorous onboarding and execution standards:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              {
                id: "I",
                title: "Eligibility Verification",
                items: [
                  { label: "Institutional Class", val: "Corporations and funds must demonstrate institutional-grade compliance and a minimum AUM of $500M USD." },
                  { label: "Private Sovereign Class", val: "High-net-worth individuals must be pre-vetted with a minimum of $25M USD under PSB custodial management." }
                ]
              },
              {
                id: "II",
                title: "Execution via QSAP",
                desc: "Bids are submitted exclusively through the Quantum-Secure Auction Platform (QSAP). This environment utilizes lattice-based encryption to prevent \"front-running\" and protect institutional order intent from high-frequency trading (HFT) predatory algorithms."
              },
              {
                id: "III",
                title: "Settlement Integrity",
                items: [
                  { label: "Fiat Settlement", val: "Executed through tax-neutral institutional accounts in Majuro (Marshall Islands) or Apia (Samoa)." },
                  { label: "Digital Settlement", val: "Atomic swaps via the Pacific Ledger, moving assets directly into PSB’s post-quantum blockchain vaults with no exposure to public exchange risk." }
                ]
              }
            ].map((section, i) => (
              <div key={i} className="bg-navy p-12 lg:p-16 space-y-10 group hover:bg-white/[0.02] transition-colors duration-500">
                 <div className="flex items-center gap-6">
                    <span className="text-gold font-serif text-3xl italic">{section.id}.</span>
                    <h5 className="font-serif text-2xl text-white italic group-hover:text-gold transition-colors">{section.title}</h5>
                 </div>
                 
                 {section.desc && (
                   <p className="text-sm text-white/40 font-light leading-relaxed">{section.desc}</p>
                 )}

                 {section.items && (
                   <div className="space-y-8">
                     {section.items.map((item, idx) => (
                       <div key={idx} className="space-y-2">
                          <span className="text-[10px] font-black uppercase tracking-widest text-gold/60">{item.label}</span>
                          <p className="text-sm text-white/40 font-light leading-relaxed">{item.val}</p>
                       </div>
                     ))}
                   </div>
                 )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE PSB ADVANTAGE */}
      <section className="py-32 lg:py-48 bg-white border-b border-zinc-100">
         <div className="mx-auto max-w-7xl px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-24 items-center">
               <div className="w-full lg:w-1/2">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-navy/30 mb-8 italic">Efficiency</h3>
                  <h4 className="font-serif text-5xl lg:text-7xl text-navy italic leading-snug">The PSB Advantage.</h4>
               </div>
               <div className="w-full lg:w-1/2 grid grid-cols-1 gap-12">
                  {[
                    { title: "Total Anonymity (Zero-Knowledge Proofs)", desc: "We utilize ZK-proof technology to mask bidder identities and order volumes, allowing massive capital moves to occur without triggering market-wide slippage or speculation." },
                    { title: "Sovereign Protection", desc: "All settlements are structured under the unique legal framework of the Pacific Financial Governance District, providing immunity from external jurisdictional overreach and ensuring capital remains within a high-trust, low-tax environment." },
                    { title: "Forensic Speed", desc: "While traditional auctions take days to clear, PSB clears 96% of transactions in under 10 seconds using our proprietary AI-matching engine and real-time ledger synchronization." }
                  ].map((adv, i) => (
                    <div key={i} className="flex gap-10">
                       <span className="w-px h-12 bg-gold/30 shrink-0" />
                       <div className="space-y-2">
                          <h5 className="font-serif text-xl italic text-navy">{adv.title}</h5>
                          <p className="text-sm text-navy/50 font-light leading-relaxed">{adv.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 6. REGULATORY SUPREMACY */}
      <section className="py-32 lg:py-48 bg-zinc-50 border-b border-zinc-100">
         <div className="mx-auto max-w-7xl px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
               <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-navy/30 mb-12 italic">Jurisdiction</h3>
               <h4 className="font-serif text-4xl lg:text-6xl text-navy italic mb-16 underline decoration-gold/20 underline-offset-[20px]">Regulatory Supremacy & Compliance</h4>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-24">
                  {[
                    { title: "PFRC Mandate", desc: "All auction activities are directly overseen by the Pacific Financial Regulation Commission, ensuring absolute transparency for institutional audits." },
                    { title: "FATF & OECD ALIGNMENT", desc: "We fully implement the Travel Rule (Rule 15b) for all digital asset transitions and adhere to the Common Reporting Standard (CRS) for institutional transparency." },
                    { title: "Volatility Safeguards", desc: "Our system includes \"Circuit Breakers\"—automatic halt triggers that freeze bidding if intra-auction price swings exceed 5%, protecting participants from anomalous market shocks." }
                  ].map((item, i) => (
                    <div key={i} className="space-y-6">
                       <h6 className="text-[10px] font-black uppercase tracking-widest text-gold">{item.title}</h6>
                       <p className="text-xs text-navy/60 font-serif italic leading-loose m-0">
                          {item.desc}
                       </p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 7. CTA / REQUEST ACCESS */}
      <section className="py-32 lg:py-48 bg-white">
         <div className="mx-auto max-w-7xl px-8 lg:px-12">
            <div className="bg-navy p-12 lg:p-24 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:scale-110 transition-transform duration-1000" />
               
               <div className="relative z-10 max-w-3xl">
                  <h3 className="text-[12px] font-black uppercase tracking-[0.5em] text-gold mb-12">Requesting Auction Access</h3>
                  <p className="text-2xl lg:text-3xl font-serif italic text-white/80 leading-relaxed mb-16">
                     Access to the PSB Auction Floor is granted only after a comprehensive forensic audit of the applicant's liquidity and compliance status.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                     <div className="space-y-10">
                        <div className="space-y-4">
                           <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Secure Communication</span>
                           <a href="mailto:info@pacificapitalnetwork.com" className="text-xl font-mono text-gold hover:text-white transition-colors block">
                              info@pacificapitalnetwork.com
                           </a>
                        </div>
                        <div className="space-y-4">
                           <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Official Dossier Entry</span>
                           <p className="text-sm font-light text-white/40 italic leading-relaxed m-0">
                              Submit your PGP-Encrypted Dossier with MT799 or Proof-of-Reserves.
                           </p>
                        </div>
                     </div>
                     
                     <div className="border-l border-white/10 pl-12 space-y-6 hidden md:block">
                        <div className="text-[10px] font-black uppercase tracking-widest text-gold/40">Dossier Requirements</div>
                        <ul className="space-y-4 text-[11px] font-black uppercase tracking-widest text-white/20">
                           <li>• AUCTION_ACCESS_INVITATION</li>
                           <li>• Signed SWIFT MT799</li>
                           <li>• ISO 20225 Certification</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Decorative Branding */}
      <div className="py-24 bg-zinc-50 flex flex-col items-center gap-12 opacity-[0.05] grayscale pointer-events-none select-none border-t border-zinc-100">
        <img src="/assets/kit/marks/psb-mark-blue.svg" alt="PSB Watermark" className="h-20 w-auto" />
        <span className="text-[10px] font-black uppercase tracking-[1em] text-navy">Institutional Resilience</span>
      </div>
    </main>
  );
}
