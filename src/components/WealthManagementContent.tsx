'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function WealthManagementContent() {
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
                { label: 'Wealth Management' }
              ]} 
            />
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
            <div className="w-full lg:w-9/12">
              <div className="flex items-center gap-6 mb-12">
                <img src="/assets/kit/marks/psb-mark-white.svg" alt="PSB Logo" className="h-10 w-auto" />
                <div className="h-8 w-[1px] bg-gold/30" />
                <h1 className="text-[11px] font-black uppercase tracking-[0.8em] text-white/60">Wealth Management</h1>
              </div>
              
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-[7rem] text-white leading-[0.95] italic tracking-tight mb-16">
                The Philosophy of <br /> <span className="text-gold">Capital Preservation</span>
              </h2>

              <div className="max-w-2xl space-y-8 text-lg lg:text-xl text-white/60 font-serif italic leading-relaxed">
                 <p className="border-l-4 border-gold pl-10 text-white/80 not-italic">
                    At Pacific Settlement Bank (PSB), we don&apos;t just manage assets; we engineer fortresses for generational wealth. In an era of global fiscal instability and invasive oversight, PSB provides a sanctuary where capital is protected by the unique legal sovereignty of the Pacific Financial Governance District (PFGD).
                 </p>
                 <p className="pl-10">
                    Our Wealth Management division operates at the intersection of Swiss fiduciary traditions and post-quantum digital security. We serve a curated circle of sovereign wealth funds, multinational family offices, and institutional titans who require more than just a bank—they require a strategic partner in jurisdictional agility.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE PILLARS */}
      <section className="bg-zinc-50 py-24 lg:py-48 border-y border-zinc-100 relative">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="mb-24">
             <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-navy/30 mb-8 italic">Efficiency</h3>
             <h4 className="font-serif text-3xl sm:text-4xl lg:text-7xl text-navy italic leading-snug">Core Pillars of Our <br />Wealth Ecosystem.</h4>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 shadow-sm overflow-hidden">
             {/* A. Multi-Jurisdictional Trust Structuring */}
             <div className="bg-white p-12 lg:p-16 space-y-12 group hover:bg-zinc-50 transition-all duration-700">
                <div className="space-y-6">
                   <span className="text-[10px] font-black text-gold uppercase tracking-widest block">PILLAR_01</span>
                   <h5 className="font-serif text-3xl text-navy group-hover:text-gold transition-colors italic">Multi-Jurisdictional <br />Trust Structuring</h5>
                   <p className="text-sm text-navy/50 font-light leading-relaxed max-w-md">
                      We utilize the most sophisticated legal frameworks across our 11 strategic nodes (Majuro, Apia, Port Vila, and beyond) to create impenetrable trust structures.
                   </p>
                </div>
                
                <div className="space-y-10">
                   {[
                     { title: "Hybrid Asset Trusts", desc: "The first in the world to legally wrap G10 fiat, physical gold (XAU), and digital reserve assets (BTC/ETH) into a single, unified deed." },
                     { title: "Dynastic Continuity", desc: "Trust deeds designed to survive for centuries, protected from foreign litigation and probate interference by the Sovereign Financial Framework Act." },
                     { title: "Zero-Knowledge Privacy", desc: "While we maintain absolute compliance with PFRC mandates, client ownership data is shielded by ZK-proof encryption, ensuring that your legacy remains your business." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-8">
                        <span className="text-gold font-serif italic py-1">0{i+1}</span>
                        <div className="space-y-2">
                           <h6 className="text-[14px] font-bold text-navy tracking-tight uppercase">{item.title}</h6>
                           <p className="text-xs text-navy/40 font-light leading-relaxed italic">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             {/* B. The "Pacific Ledger" Custody Protocol */}
             <div className="bg-navy p-12 lg:p-16 space-y-12 text-white relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl pointer-events-none" />
                
                <div className="space-y-6 relative z-10">
                   <span className="text-[10px] font-black text-gold uppercase tracking-widest block">PILLAR_02</span>
                   <h5 className="font-serif text-3xl text-white italic">The &quot;Pacific Ledger&quot; <br />Custody Protocol</h5>
                   <p className="text-sm text-white/40 font-light leading-relaxed max-w-md">
                      Custody is no longer about a physical vault; it&apos;s about cryptographic certainty.
                   </p>
                </div>

                <div className="space-y-10 relative z-10">
                   {[
                     { title: "Quantum-Resistant Cold Storage", desc: "All institutional holdings are secured in deep-glacier vaults where private keys are generated via lattice-based cryptography." },
                     { title: "Atomic Interoperability", desc: "Move $100M+ between fiat and digital gold in under 60 seconds with zero exposure to public exchange volatility." },
                     { title: "Biometric Sovereign Access", desc: "Our \"Level 42\" security protocol requires multi-location biometric hardware authentication for any asset movement exceeding $5M USD." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-8 border-l border-white/10 pl-8">
                        <div className="space-y-2">
                           <h6 className="text-[14px] font-bold text-gold tracking-tight uppercase group-hover:text-white transition-colors">{item.title}</h6>
                           <p className="text-xs text-white/40 font-light leading-relaxed italic">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. TAILORED SOLUTIONS */}
      <section className="py-32 lg:py-48 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-24 items-start relative">
             <div className="w-full lg:w-1/2">
                <div className="sticky top-32">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-navy/30 mb-8 italic">Bespoke Access</h3>
                  <h4 className="font-serif text-5xl lg:text-8xl text-navy italic leading-tight mb-16 underline decoration-gold/20 underline-offset-[20px]">Institutional <br />Titans.</h4>
                  
                  <div className="p-12 bg-zinc-50 border border-zinc-100 flex items-center justify-center relative group grayscale hover:grayscale-0 transition-all duration-1000">
                     <img src="/assets/kit/marks/psb-mark-blue.svg" alt="" className="h-32 w-auto opacity-10 group-hover:opacity-100 transition-opacity" />
                     <div className="absolute inset-x-0 bottom-0 py-6 text-center text-[9px] font-black uppercase tracking-[0.5em] text-navy/30">
                        Fiduciary Stamp Verified
                     </div>
                  </div>
                </div>
             </div>

             <div className="w-full lg:w-1/2 space-y-24">
                <div className="space-y-10 border-b border-zinc-100 pb-24 group">
                   <div className="flex items-center gap-6">
                      <span className="text-2xl text-gold font-serif italic">I.</span>
                      <h5 className="font-serif text-3xl text-navy group-hover:text-gold transition-colors">Global Family Office Support (GFO)</h5>
                   </div>
                   <p className="text-lg text-navy/50 font-serif italic leading-relaxed">
                      PSB provides the back-office infrastructure for the world&apos;s most significant family offices. From private jet financing and maritime insurance to cross-border tax-neutral liquidations, our Concierge Fiduciary Team handles the complexities of a global life.
                   </p>
                </div>

                <div className="space-y-10 group">
                   <div className="flex items-center gap-6">
                      <span className="text-2xl text-gold font-serif italic">II.</span>
                      <h5 className="font-serif text-3xl text-navy group-hover:text-gold transition-colors">Sovereign Debt & Blue Bond Investment</h5>
                   </div>
                   <p className="text-lg text-navy/50 font-serif italic leading-relaxed">
                      Gain exclusive access to the Blue Economy. PSB clients are the primary underwriters for sovereign-backed environmental bonds, funding coral reef restoration and oceanic infrastructure while earning stable, tax-exempt yields.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. ONBOARDING PROCESS */}
      <section className="py-32 lg:py-48 bg-zinc-50 border-y border-zinc-100 relative">
         <div className="mx-auto max-w-7xl px-8 lg:px-12 text-center mb-32">
            <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-navy/30 mb-8 italic">Gateway</h3>
            <h4 className="font-serif text-4xl lg:text-6xl text-navy italic">The Forensic Onboarding Process.</h4>
            <p className="mt-8 text-gold text-[10px] font-black uppercase tracking-[0.5em]">Access is a Privilege, Not a Right</p>
         </div>

         <div className="mx-auto max-w-7xl px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Forensic AML Scan",
                desc: "Our proprietary AI audits the entire history of the capital, ensuring 100% \"clean-room\" status before it enters the Pacific Ledger."
              },
              {
                step: "02",
                title: "Strategic Alignment",
                desc: "We map your global tax residency and asset protection goals to our 11 nodes to find the optimal jurisdictional \"sweet spot.\""
              },
              {
                step: "03",
                title: "Sovereign Vault Activation",
                desc: "Issuance of your unique Sovereign Digital Identity (SDI) and activation of your post-quantum vault."
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-8 bg-white p-16 border border-zinc-100 shadow-sm relative group overflow-hidden hover:border-gold/30 transition-all">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <span className="text-5xl font-serif text-gold italic group-hover:scale-110 transition-transform block">{item.step}</span>
                 <h5 className="font-serif text-2xl text-navy italic">{item.title}</h5>
                 <p className="text-sm text-navy/40 font-light leading-relaxed max-w-xs italic">{item.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* 5. FIDUCIARY RESPONSIBILITY */}
      <section className="py-32 lg:py-48 bg-navy text-white relative">
         <div className="mx-auto max-w-7xl px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-24 items-start">
               <div className="w-full lg:w-5/12">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-gold mb-10">Institutional Ethics</h3>
                  <h4 className="font-serif text-4xl lg:text-7xl text-white italic mb-12">Fiduciary <br />Responsibility.</h4>
                  <div className="p-12 border border-white/10 bg-white/[0.02] flex items-center gap-8 group hover:bg-white/[0.05] transition-all">
                     <div className="w-px h-16 bg-gold" />
                     <p className="font-serif italic text-lg text-white/60 leading-relaxed">
                        &quot;We are the leaders in transparency for the right reasons, protecting the system from systemic risk while protecting the client from overreach.&quot;
                     </p>
                  </div>
               </div>

               <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 italic font-serif">
                  {[
                    { label: "PFRC Oversight", val: "100% alignment with the Pacific Financial Regulation Commission." },
                    { label: "OECD/FATF Compliance", val: "Global standards integrated with sovereign privacy protocols." },
                    { label: "ESG Mandate", val: "5% of all wealth management fees are automatically redirected to the Pacific Marine Conservation Fund." }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-4">
                       <span className="text-[10px] font-black uppercase tracking-widest text-gold opacity-60">— {stat.label}</span>
                       <p className="text-xl text-white/80 leading-snug">{stat.val}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 6. CONTACT CTA */}
      <section className="py-32 lg:py-48 bg-white">
         <div className="mx-auto max-w-7xl px-8 lg:px-12 text-center">
            <div className="mb-16 grayscale opacity-20 hover:opacity-100 transition-all duration-1000">
               <img src="/assets/kit/marks/psb-mark-blue.svg" alt="" className="h-16 w-auto mx-auto" />
            </div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-navy/30 mb-8">Access the Wealth Hub</h4>
            <Link 
              href="/contact-us" 
              className="inline-flex items-center gap-6 px-16 py-8 bg-navy text-gold text-[10px] font-black uppercase tracking-[0.4em] hover:bg-gold hover:text-navy transition-all duration-700 group shadow-2xl"
            >
              Contact Wealth Management Division
              <span className="transition-transform group-hover:translate-x-4">→</span>
            </Link>
         </div>
      </section>
    </main>
  );
}
