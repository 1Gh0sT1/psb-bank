'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function MonetaryPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Page Intro / Header - Elite "Old Money" Style */}
      <section className="pt-64 lg:pt-96 pb-20 border-b border-white/5 bg-navy relative overflow-hidden bg-gradient-to-br from-navy via-[#01060F] to-navy">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.02] pointer-events-none z-0">
          <img src="/assets/kit/marks/psb-mark-white.svg" alt="" className="w-full h-full object-contain" />
        </div>
        {/* Ambient Gold Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
          <Breadcrumbs 
            variant="white"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Monetary Policy' },
              { label: 'Operational Framework' }
            ]} 
          />
          <div className="flex flex-col gap-12 pt-12">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16">
              <div className="max-w-4xl border-l border-gold/50 pl-10 md:pl-16">
                <h1 className="text-6xl lg:text-8xl font-serif text-white tracking-tight mb-10">
                  Monetary Policy
                </h1>
                <p className="text-[11px] font-mono text-white/40 uppercase tracking-[0.2em] leading-loose max-w-2xl">
                  THE INSTITUTIONAL FRAMEWORK FOR SECURING CURRENCY STABILITY AND SYSTEMIC LIQUIDITY WITHIN THE SOVEREIGN JURISDICTION.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Content Framework - Swiss Conservative Editorial */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-8 lg:px-12">
          {/* Main Publishing Column */}
          <article className="space-y-32">
            
            {/* SECTION: OVERVIEW */}
            <div>
              <header className="mb-16">
                 <h2 className="text-[12px] font-black uppercase tracking-[0.5em] text-gold mb-8">01. Overview</h2>
                 <h3 className="text-3xl font-serif text-navy leading-tight italic">International Representation</h3>
              </header>
              
              <div className="space-y-10 text-zinc-600">
                <p className="text-base leading-relaxed font-light italic">
                  The Pacific Settlement Bank serves as the official and sovereign representative for the jurisdiction in all international gatherings, councils, and organizations related to:
                </p>
                
                <div className="space-y-12 mt-12">
                  {[
                    { title: 'Monetary policy', desc: 'Strategic discussions and institutional decisions regarding managing interest rates, inflation targets, and the overall money supply.' },
                    { title: 'Banking regulation', desc: 'Direct collaboration with international bodies to establish and maintain elite regulations for banks and financial institutions.' },
                    { title: 'Systemic Expertise', desc: 'Advisory on financial inclusion initiatives, anti-money laundering measures, and international financial cooperation.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-10 group">
                      <span className="text-xs font-mono text-gold/30 pt-1">/0{i+1}</span>
                      <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-navy mb-3 group-hover:text-gold transition-colors">{item.title}</h4>
                        <p className="text-xs font-light leading-relaxed m-0 italic">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-20 pt-20 border-t border-zinc-100">
                  <h3 className="text-2xl font-serif text-navy mb-8 mt-0 italic">Monetary Policy Objectives</h3>
                  <p className="text-sm leading-relaxed font-light mb-8 italic">
                     The Pacific Settlement Bank’s monetary policy prioritizes achieving price and financial stability by controlling inflation and maintaining a healthy financial system.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                     <div className="p-8 border border-zinc-100 bg-white">
                        <h5 className="text-[10px] font-black uppercase tracking-widest text-gold mb-4">Strategic Support</h5>
                        <p className="text-xs font-light leading-relaxed m-0 italic text-zinc-400">"Supporting targets to promote sustainable economic activity through liquidity management."</p>
                     </div>
                     <div className="p-8 border border-zinc-100 bg-white">
                        <h5 className="text-[10px] font-black uppercase tracking-widest text-gold mb-4">Resilience Building</h5>
                        <p className="text-xs font-light leading-relaxed m-0 italic text-zinc-400">"Strategic management of reserves to strengthen financial resilience against external shocks."</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION: FRAMEWORK */}
            <div>
              <header className="mb-16">
                 <h2 className="text-[12px] font-black uppercase tracking-[0.5em] text-gold mb-8">02. Framework</h2>
                 <h3 className="text-3xl font-serif text-navy leading-tight italic">Monetary Policy Reforms</h3>
              </header>

              <div className="space-y-12">
                <p className="text-sm font-light leading-loose text-zinc-600 italic">
                  To address systemic economic challenges, the Pacific Settlement Bank operates under significant reforms to its monetary policy framework.
                </p>

                <div className="space-y-8">
                   <div className="bg-navy p-12 text-white relative overflow-hidden group">
                      <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-6 border-b border-white/10 pb-6">Exchange Rate Regime</h5>
                      <p className="text-xs font-light leading-relaxed text-white/50 m-0 italic">
                         The Bank transitioned towards a floating regime, allowing the indigenous currency to reflect real market dynamics under sophisticated oversight.
                      </p>
                   </div>

                   <div className="bg-zinc-50 p-12">
                      <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/40 mb-6 border-b border-navy/5 pb-6 text-navy">Reserve Money Targeting</h5>
                      <p className="text-xs font-light leading-relaxed text-navy/40 m-0 italic">
                         Implementation of the Reserve Money Targeting Framework (RMTF) focuses on the precise calibration of commercial bank reserves.
                      </p>
                   </div>
                </div>
              </div>
            </div>

            {/* SECTION: STATEMENT */}
            <div>
              <header className="mb-16">
                 <h2 className="text-[12px] font-black uppercase tracking-[0.5em] text-gold mb-8">03. Disclosure</h2>
                 <h3 className="text-3xl font-serif text-navy leading-tight italic">Monetary Policy Statement</h3>
              </header>

              <div className="space-y-12">
                <p className="text-sm font-light leading-loose text-zinc-600 italic">
                  Transparency is maintained through the release of bi-annual statements.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="p-10 border border-zinc-100 flex flex-col justify-between h-56 group hover:border-gold transition-colors">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gold text-right italic">/DEC</span>
                      <div>
                         <h5 className="text-lg font-serif text-navy mb-3 italic">December Statement</h5>
                         <p className="text-xs font-light text-zinc-400 m-0 italic">End-of-year outlook outlining the strategic direction for the following six months.</p>
                      </div>
                   </div>
                   <div className="p-10 border border-zinc-100 flex flex-col justify-between h-56 group hover:border-gold transition-colors">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gold text-right italic">/JUN</span>
                      <div>
                         <h5 className="text-lg font-serif text-navy mb-3 italic">June Statement</h5>
                         <p className="text-xs font-light text-zinc-400 m-0 italic">Performance assessment addressing the remaining months of the fiscal year.</p>
                      </div>
                   </div>
                </div>

                <div className="mt-12 space-y-10">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-navy italic">Standard Content Architecture</h4>
                  <div className="space-y-8">
                     {[
                       { title: 'Performance Review', desc: 'Summary of institutional achievements and objective adherence.' },
                       { title: 'Economic Assessment', desc: 'In-depth analysis of factors impacting inflation and GDP growth.' },
                       { title: 'Strategic Outlook', desc: 'Forward-looking guidance on intended monetary strategies.' }
                     ].map((item, i) => (
                       <div key={i} className="flex gap-8 group">
                          <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center text-[10px] font-mono text-gold group-hover:bg-gold group-hover:text-white transition-all italic">
                             {i+1}
                          </div>
                          <div>
                             <h5 className="text-xs font-black uppercase tracking-widest text-navy mb-2 italic">{item.title}</h5>
                             <p className="text-xs font-light text-zinc-400 m-0 leading-relaxed italic">{item.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
                </div>
              </div>
            </div>

          </article>
        </div>
      </section>
    </div>
  );
}
