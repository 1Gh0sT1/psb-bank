"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function MonetaryStatisticsPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-navy">
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
              { label: 'Statistics' }
            ]} 
          />
          <div className="flex flex-col gap-12 pt-12">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16">
              <div className="max-w-4xl border-l border-gold/50 pl-10 md:pl-16">
                <h1 className="text-6xl lg:text-8xl font-serif text-white tracking-tight mb-10 leading-tight">
                  Monetary Statistics
                </h1>
                <p className="text-[11px] font-mono text-white/40 uppercase tracking-[0.2em] leading-loose max-w-2xl">
                  Transparency in Institutional Liquidity and Asset Management. Official Data Publication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Institutional Overview */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="mx-auto max-w-5xl px-8 lg:px-12">
          <div className="space-y-32">
            
            {/* OVERVIEW SECTION */}
            <div>
              <div className="prose prose-2xl prose-slate max-w-none text-navy/70 mb-20 italic font-light leading-relaxed">
                <p>
                  Pacific Settlement Bank (PSB) publishes consolidated monetary statistics to provide institutional stakeholders with a transparent view of our liquidity architecture, capital adequacy, and asset integrity. As the primary clearing house of the Pacific Financial Governance District (PFGD), all metrics are generated in real-time via the Pacific Ledger, ensuring that reported data is mathematically immutable and free from human bias.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-12 pt-16 border-t border-zinc-100">
                {[
                  { code: 'IMF SDDS PLUS', label: 'Special Data Dissemination Standard' },
                  { code: 'BASEL III', label: 'Liquidity Coverage & Stable Funding' },
                  { code: 'PFRC MANDATE', label: 'Real-time Forensic Monitoring' },
                ].map((std, i) => (
                  <div key={i} className="group">
                    <div className="text-[11px] font-black text-navy mb-2 tracking-widest">{std.code}</div>
                    <div className="text-[10px] font-medium text-gold uppercase tracking-[0.3em]">{std.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. KEY FINANCIAL METRICS TABLE */}
            <div className="pt-16 border-t border-zinc-100">
              <h3 className="text-[12px] font-black uppercase tracking-[0.5em] text-gold mb-16 italic">01 // Key Financial Metrics (Q1 2026)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-navy/10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                      <th className="py-6 pr-8 font-black">Metric Description</th>
                      <th className="py-6 px-8 text-right font-black">Amount (USD Equiv.)</th>
                      <th className="py-6 px-8 text-right font-black">Growth (YoY)</th>
                      <th className="py-6 pl-8 text-right font-black">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {[
                      { metric: 'Total Assets Under Custody', amount: '$184.6B', growth: '+16.2%', status: 'Sustained' },
                      { metric: 'Sovereign Liquid Reserve Ratio', amount: '94.5%', growth: '+2.4%', status: 'High' },
                      { metric: 'Tier 1 Capital Ratio', amount: '19.2%', growth: '+1.5%', status: 'Exceptional' },
                      { metric: 'Institutional Deposits', amount: '$126.8B', growth: '+11.4%', status: 'Growing' },
                      { metric: 'Digital Reserve Assets (BTC/ETH)', amount: '32,400 BTC / 255K ETH', growth: '+28.7%', status: 'Aggressive' },
                      { metric: 'Non-Performing Loans (NPL)', amount: '0.42%', growth: '-0.15%', status: 'Minimal' },
                    ].map((row, i) => (
                      <tr key={i} className="group hover:bg-zinc-50/50 transition-colors">
                        <td className="py-10 pr-8 text-sm font-black text-navy italic">{row.metric}</td>
                        <td className="py-10 px-8 text-right font-mono text-sm font-medium text-gold">{row.amount}</td>
                        <td className="py-10 px-8 text-right font-mono text-sm text-zinc-500">{row.growth}</td>
                        <td className="py-10 pl-8 text-right">
                          <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 border border-navy/10 text-navy/40 group-hover:text-gold transition-colors">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-12 text-[10px] font-mono text-zinc-400 uppercase tracking-widest italic leading-loose border-l border-gold/30 pl-8">
                Note: Reserves include gold-backed stablecoins (XAUg) and Pacific Solar Bonds.
              </p>
            </div>

            {/* 4. CURRENCY ALLOCATION */}
            <div className="pt-16 border-t border-zinc-100">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-8 mb-16">
                 <h3 className="text-[12px] font-black uppercase tracking-[0.5em] text-gold italic">02 // Currency & Asset Allocation</h3>
                 <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">As of March 31, 2026 // SHA256 Verified</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-navy/10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                      <th className="py-6 pr-8 font-black">Asset Class</th>
                      <th className="py-6 px-8 text-right font-black">Allocation</th>
                      <th className="py-6 pl-8 font-black">Strategic Function</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {[
                      { class: 'USD (Sovereign Fiat)', alloc: '42%', func: 'Global clearing and interbank liquidity.' },
                      { class: 'EUR / CHF', alloc: '20%', func: 'European corridors and fiduciary reserves.' },
                      { class: 'Tokenized Gold (XAU)', alloc: '18%', func: 'Inflation hedging and hard-asset swaps.' },
                      { class: 'Digital Assets (Hybrid)', alloc: '14%', func: 'Real-time settlement and digital arbitrage.' },
                      { class: 'Regional PFGD Currencies', alloc: '6%', func: 'Blue Economy infrastructure and local trade.' },
                    ].map((row, i) => (
                      <tr key={i} className="group hover:bg-zinc-50/50 transition-colors">
                        <td className="py-10 pr-8 text-sm font-black text-navy italic">{row.class}</td>
                        <td className="py-10 px-8 text-right font-mono text-sm font-medium text-gold">{row.alloc}</td>
                        <td className="py-10 pl-8 text-xs font-light text-zinc-400 leading-relaxed italic max-w-sm">{row.func}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5. LIQUIDITY ARCHITECTURE */}
            <div className="pt-16 border-t border-zinc-100">
              <h3 className="text-[12px] font-black uppercase tracking-[0.5em] text-gold mb-16 italic">03 // Liquidity Management Architecture</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { tier: 'L1', title: 'Instant-Access', amount: '$48B', desc: 'Cash equivalents, Money Market Funds, Digital Stablecoins.' },
                  { tier: 'L2', title: '7-Day Buffer', amount: '$72B', desc: 'Sovereign T-Bills, AAA-rated Blue Bonds.' },
                  { tier: 'L3', title: 'Forensic Pool', amount: '$18B', desc: 'Institutional BTC/ETH liquidity via Pacific Ledger.' },
                ].map((item, i) => (
                  <div key={i} className="p-10 border border-zinc-100 group hover:border-gold/30 transition-all duration-700">
                     <div className="text-[10px] font-black text-gold mb-8 tracking-widest uppercase">{item.tier} // {item.title}</div>
                     <div className="text-3xl font-mono font-medium text-navy mb-4 italic">{item.amount}</div>
                     <p className="text-[11px] font-light leading-relaxed text-zinc-400 m-0 italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. OPERATIONAL HIGHLIGHTS */}
            <div className="pt-16 border-t border-zinc-100">
              <h3 className="text-[12px] font-black uppercase tracking-[0.5em] text-gold mb-16 italic">04 // Regional Operational Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                 {[
                   { id: '01', node: 'Majuro (HQ) Node', desc: 'Liquidity ratio at 96.8%, surpassing PFRC requirements.' },
                   { id: '02', node: 'Samoa Digital Hub', desc: 'Processed $6.2B in hybrid settlements in Q1 (+24% QoQ).' },
                   { id: '03', node: 'Vanuatu Fiduciary Node', desc: 'ESG-aligned assets under management reached $31B.' },
                   { id: '04', node: 'Palau Innovation Hub', desc: 'Successfully issued $3.5B in sovereign-backed Blue Carbon Credits.' },
                 ].map((node, i) => (
                   <div key={i} className="flex gap-8 group pb-10 border-b border-zinc-50">
                      <span className="text-xs font-mono text-gold/30 mt-1 italic">{node.id}</span>
                      <div>
                         <h5 className="text-[11px] font-black uppercase tracking-widest text-navy mb-3 italic">{node.node}</h5>
                         <p className="text-xs font-light text-zinc-400 m-0 leading-relaxed italic">{node.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>

            {/* 7. COMPARATIVE ANALYTICS */}
            <div className="pt-16 border-t border-zinc-100">
              <h3 className="text-[12px] font-black uppercase tracking-[0.5em] text-gold mb-16 italic">05 // Comparative Analytics (2025–2026)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-navy/10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                      <th className="py-6 pr-8 font-black">Institution</th>
                      <th className="py-6 px-8 text-right font-black">2025 Reserves</th>
                      <th className="py-6 px-8 text-right font-black">2026 Reserves (Proj)</th>
                      <th className="py-6 pl-8 text-right font-black">YoY Growth</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {[
                      { name: 'Pacific Settlement Bank (PSB)', val25: '$142.8B', val26: '$184.6B', growth: '29.2%', highlighted: true },
                      { name: 'Oceania National Bank', val25: '$97.2B', val26: '$104.5B', growth: '7.5%' },
                      { name: 'Bank of South Pacific (BSP)', val25: '$64.1B', val26: '$69.8B', growth: '8.9%' },
                    ].map((row, i) => (
                      <tr key={i} className={`group ${row.highlighted ? 'bg-gold/5' : 'hover:bg-zinc-50/50'} transition-all`}>
                        <td className={`py-10 pr-8 text-sm font-black italic ${row.highlighted ? 'text-navy' : 'text-zinc-600'}`}>{row.name}</td>
                        <td className="py-10 px-8 text-right font-mono text-sm text-zinc-400 italic">{row.val25}</td>
                        <td className="py-10 px-8 text-right font-mono text-sm font-medium text-navy italic">{row.val26}</td>
                        <td className="py-10 pl-8 text-right font-mono text-sm font-bold text-gold italic">{row.growth}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 8. SYSTEMIC COMPLIANCE */}
            <div className="pt-16 border-t border-zinc-100">
               <div className="bg-navy p-12 lg:p-20 text-white relative overflow-hidden">
                  <h3 className="text-[12px] font-black uppercase tracking-[0.5em] text-gold mb-16 border-b border-white/10 pb-12 italic">Systemic Compliance & Algorithmic Audit Protocols</h3>
                  <div className="grid md:grid-cols-3 gap-16">
                     {[
                       { title: 'Immutable Ledger Telemetry', desc: 'PSB utilizes a direct-feed telemetry system synchronized via the Pacific Ledger. Daily liquidity and solvency reports are automatically transmitted to the PFRC.' },
                       { title: 'Forensic Data Sanitization', desc: 'Our transparency reports utilize "Clean-Room" protocols. While we provide proof of reserves, all PII is forensically sanitized to ensure privacy.' },
                       { title: 'Algorithmic Integrity', desc: 'All statistics are generated by the PSB Core AI (Leviathan-1). By removing human intervention, we prevent manual adjustments or institutional bias.' },
                     ].map((item, i) => (
                       <div key={i} className="space-y-6">
                          <h5 className="text-[10px] font-black uppercase tracking-widest text-gold italic leading-relaxed">{item.title}</h5>
                          <p className="text-xs font-light leading-relaxed text-white/40 m-0 italic">{item.desc}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* 9. DATA ACCESS PROTOCOL */}
            <div className="pt-16 border-t border-zinc-100">
               <div className="border border-zinc-100 p-12 lg:p-20 bg-zinc-50/30">
                  <header className="mb-16">
                     <h3 className="text-[14px] font-black uppercase tracking-[0.4em] text-navy mb-4 italic">Data Access & Forensic Requests</h3>
                     <p className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] italic">Tier-1 Institutional Clearance Required</p>
                  </header>
                  
                  <div className="grid md:grid-cols-2 gap-16">
                     <div className="space-y-10">
                        <p className="text-sm font-light leading-loose text-navy/60 italic m-0">
                          "Granular statistical dossiers are available to accredited financial institutions and regulatory bodies via our Encrypted Data Portal."
                        </p>
                        <div className="flex flex-col gap-4 text-[9px] font-bold text-zinc-400 uppercase tracking-widest">
                           <div className="flex justify-between border-b border-zinc-100 pb-3"><span>Submission Mode</span><span className="text-gold">PGP-Encrypted</span></div>
                           <div className="flex justify-between border-b border-zinc-100 pb-3"><span>Response SLA</span><span className="text-gold">5 Business Days</span></div>
                        </div>
                     </div>
                     <div className="flex flex-col justify-center gap-6 border-l border-zinc-200 pl-16">
                        <div className="text-[10px] font-black text-navy/30 uppercase tracking-[0.3em] italic">Institutional Verification Gateway</div>
                        <a href="mailto:info@pacificperf.com" className="text-2xl font-serif italic text-navy hover:text-gold transition-colors block">info@pacificperf.com</a>
                        <p className="text-[9px] font-medium text-zinc-400 uppercase leading-relaxed m-0 italic">
                          Mandatory: Regulatory license, signed NDA, and PFRC-cleared Client ID.
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            {/* COMPLIANCE DISCLAIMER */}
            <div className="mt-32 p-10 bg-zinc-50 border-l-4 border-gold relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -translate-y-1/2 translate-x-1/2 rounded-full" />
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-6">Transparency Disclaimer</h4>
              <div className="max-w-3xl space-y-8">
                <p className="text-sm text-navy/60 leading-relaxed font-light">
                  Monetary statistics are aggregated to protect client anonymity under the Sovereign Privacy Act. Data excludes specific PII or PEP-related identifiers to maintain absolute confidentiality.
                </p>
                <div className="pt-8 border-t border-zinc-200/60">
                  <p className="text-lg font-serif italic text-navy/80 leading-relaxed mb-4">
                    &quot;In offshore finance, transparency and privacy are not opposites—they are pillars of trust.&quot;
                  </p>
                  <cite className="not-italic text-[9px] font-black uppercase tracking-[0.3em] text-navy/30">
                    — Rajiv Kapoor, Chief Compliance Officer
                  </cite>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
