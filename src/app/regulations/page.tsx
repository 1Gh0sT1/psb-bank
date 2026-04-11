import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { regulatoryAuthorities as authorities } from '@/data/regulations';

export default function RegulationsPage() {

  return (
    <div className="bg-white min-h-screen text-navy font-sans antialiased overflow-x-hidden">
      {/* 1. HERO - Elite Institutional Header */}
      <section className="pt-64 lg:pt-96 pb-20 border-b border-white/5 bg-navy relative overflow-hidden bg-gradient-to-br from-navy via-[#01060F] to-navy">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.02] pointer-events-none z-0">
          <img src="/assets/kit/marks/psb-mark-white.svg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Monetary Policy' },
              { label: 'Regulations' }
            ]} 
          />

          <div className="max-w-4xl border-l border-gold/50 pl-10 md:pl-16">
            <h1 className="text-6xl lg:text-9xl font-serif text-white tracking-tight leading-[0.9] mb-10">
              Regulations
            </h1>
            <p className="text-[10px] md:text-xs font-black text-gold uppercase tracking-[0.5em] mb-8 block">
              REGULATORY OVERSIGHT / Upholding Global Standards in Offshore Finance
            </p>
            <p className="text-sm font-mono text-white/40 uppercase tracking-widest max-w-2xl leading-loose">
              Pacific Settlement Bank (PSB) operates under a sophisticated, multi-layered regulatory architecture designed for the complexities of modern, hybrid finance.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE REGULATORY FRAMEWORK */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-20 lg:gap-32 items-start">
            <div className="lg:col-span-7">
               <span className="text-[10px] font-black text-gold uppercase tracking-[0.4em] mb-8 block">01 // Architectural Mandate</span>
               <h2 className="text-4xl lg:text-6xl font-serif text-navy italic leading-snug mb-12">
                 THE REGULATORY FRAMEWORK
               </h2>
               <div className="prose prose-xl prose-slate text-navy/70 font-light leading-relaxed">
                 <p className="mb-8">
                   Pacific Settlement Bank (PSB) operates under a sophisticated, multi-layered regulatory architecture designed for the complexities of modern, hybrid finance. Our primary governing mandate is derived from the <span className="text-navy font-bold">Sovereign Financial Framework Act (2011)</span>, which establishes PSB as the foundational clearing house of the Pacific Financial Governance District (PFGD).
                 </p>
                 <p>
                   We maintain a rigorous dual-compliance model blending direct sovereign supervision with absolute global interoperability. This equilibrium ensures that client information remains shielded under the Sovereign Privacy Act, while providing total forensic transparency for authorized regulators.
                 </p>
               </div>
            </div>
            
            <div className="lg:col-span-5 bg-zinc-50 border border-zinc-100 p-12 lg:p-16 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 -translate-y-12 translate-x-12 rounded-full blur-2xl" />
               <h3 className="text-[10px] font-black text-navy uppercase tracking-[0.4em] mb-10 pb-4 border-b border-gold/20">Operational Principles</h3>
               <ul className="space-y-8">
                 <li className="flex gap-6">
                    <span className="text-gold font-serif italic text-xl">01</span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-navy mb-2">Direct Sovereign Supervision</p>
                      <p className="text-sm text-navy/50 font-light leading-relaxed">Real-time oversight by the Pacific Financial Regulation Commission (PFRC), ensuring every institutional flow is audited via the Pacific Ledger.</p>
                    </div>
                 </li>
                 <li className="flex gap-6">
                    <span className="text-gold font-serif italic text-xl">02</span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-navy mb-2">Global Interoperability</p>
                      <p className="text-sm text-navy/50 font-light leading-relaxed">Absolute adherence to G10 standards, including the OECD Common Reporting Standard (CRS) and FATF Travel Rule (Rule 15b).</p>
                    </div>
                 </li>
                 <li className="flex gap-6">
                    <span className="text-gold font-serif italic text-xl">03</span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-navy mb-2">Data Sovereignty</p>
                      <p className="text-sm text-navy/50 font-light leading-relaxed">Client information is shielded under the Sovereign Privacy Act, blending Swiss-grade confidentiality with total forensic transparency for authorized regulators.</p>
                    </div>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRIMARY REGULATORY AUTHORITIES (INSTITUTIONAL MATRIX) */}
      <section className="py-24 lg:py-40 bg-zinc-50 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="text-center mb-24">
             <span className="text-[10px] font-black text-gold uppercase tracking-[0.4em] mb-6 block">02 // Jurisdictional Matrix</span>
             <h2 className="text-4xl lg:text-5xl font-serif text-navy italic">Primary Regulatory Authorities</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="border-b-2 border-navy/10 text-[9px] font-black uppercase tracking-[0.3em] text-navy/40">
                  <th className="py-8 pr-6">Jurisdiction</th>
                  <th className="py-8 pr-6">Regulatory Body</th>
                  <th className="py-8 pr-6">PSB License Number</th>
                  <th className="py-8 pr-6">Key Strategic Focus</th>
                  <th className="py-8 text-right">Expiry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {authorities.map((auth, idx) => (
                  <tr key={idx} className="group hover:bg-white transition-colors">
                    <td className="py-8 pr-6 text-sm font-bold text-navy tracking-tight">{auth.jurisdiction}</td>
                    <td className="py-8 pr-6">
                      <a href={auth.url} target="_blank" rel="noopener noreferrer" className="text-sm font-serif text-navy hover:text-gold transition-colors">
                        {auth.body}
                      </a>
                    </td>
                    <td className="py-8 pr-6 text-[11px] font-mono text-gold tracking-widest">{auth.license}</td>
                    <td className="py-8 pr-6 text-xs text-navy/50 font-light tracking-wide italic">{auth.focus}</td>
                    <td className="py-8 text-right text-[11px] font-mono text-navy/40 group-hover:text-navy transition-colors">{auth.expiry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. INSTITUTIONAL COMPLIANCE NOTES */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
               <h3 className="text-3xl font-serif text-navy italic leading-snug">Institutional Compliance Notes</h3>
               <p className="mt-8 text-sm text-navy/40 leading-relaxed font-light">
                 All operational licenses listed above are issued under the Sovereign Financial Framework Act (2011). PSB is a Tier-1 clearing participant; any revocation or suspension in one jurisdiction triggers an immediate automatic audit across the entire Pacific Ledger nodes to maintain systemic integrity.
               </p>
            </div>
            
            <div className="lg:col-span-2 space-y-12">
              <div className="flex gap-10 items-start pb-12 border-b border-zinc-100">
                 <div className="w-16 h-16 rounded-full bg-gold/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-all">
                    <span className="text-gold font-serif italic text-2xl">A</span>
                 </div>
                 <div>
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-navy mb-4">PFRC Oversight</h4>
                    <p className="text-sm text-navy/50 font-light leading-relaxed max-w-2xl">
                      The Marshall Islands HQ serves as the central forensic hub. All cross-border transactions are subjected to SHA-256 fingerprinting for immutable regulatory recall.
                    </p>
                 </div>
              </div>
              
              <div className="flex gap-10 items-start pb-12 border-b border-zinc-100">
                 <div className="w-16 h-16 rounded-full bg-gold/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-serif italic text-2xl">B</span>
                 </div>
                 <div>
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-navy mb-4">FATF/OECD Reciprocity</h4>
                    <p className="text-sm text-navy/50 font-light leading-relaxed max-w-2xl">
                      PSB maintains a 99/100 Compliance Score, participating in the Automatic Exchange of Information (AEOI) while protecting client data through the Sovereign Privacy Protocol.
                    </p>
                 </div>
              </div>

              <div className="flex gap-10 items-start pb-12 border-b border-zinc-100">
                 <div className="w-16 h-16 rounded-full bg-gold/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-serif italic text-2xl">C</span>
                 </div>
                 <div>
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-navy mb-4">Audit Cycle</h4>
                    <p className="text-sm text-navy/50 font-light leading-relaxed max-w-2xl">
                      Monthly internal stress tests and quarterly independent audits by Pacific Assurance Group ensure 1:1 asset backing across all 12 nodes.
                    </p>
                 </div>
              </div>

              <div className="pt-8">
                 <p className="text-[10px] font-black text-gold uppercase tracking-[0.3em] leading-relaxed italic">
                   For full jurisdictional disclosure, institutional clients may request the PSB Regulatory Compendium (2026 Edition).
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GLOBAL REGULATORY ALLIANCES & AFFILIATIONS */}
      <section className="py-24 lg:py-40 bg-navy text-white relative overflow-hidden">
        {/* Subtle Watermark for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.02] pointer-events-none z-0">
          <img src="/assets/kit/marks/psb-mark-white.svg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mb-24">
             <span className="text-[10px] font-black text-gold uppercase tracking-[0.4em] mb-6 block">03 // Global Framework Interoperability</span>
             <h2 className="text-4xl lg:text-6xl font-serif leading-tight mb-10">Global Regulatory Alliances & Affiliations</h2>
             <p className="text-sm text-white/50 leading-relaxed font-light tracking-wide italic">
               Pacific Settlement Bank (PSB) operates at the intersection of global standards and sovereign autonomy. We collaborate with the world’s leading oversight bodies to ensure that our cross-border clearing pathways remain the most secure and transparent in the Pacific Financial Governance District (PFGD).
             </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
             {[
               { name: "Financial Action Task Force (FATF)", detail: "PSB is a regional leader in the implementation of the Travel Rule (Rule 15b). Every digital asset transition is processed through our internal validator nodes, providing an immutable audit trail for institutional compliance." },
               { name: "OECD Global Forum", detail: "We maintain full participation in the Automatic Exchange of Information (AEOI) and Common Reporting Standard (CRS), ensuring tax transparency while utilizing the Sovereign Privacy Protocol to protect non-reportable trust structures." },
               { name: "Pacific Islands Forum (PIF)", detail: "PSB serves as a founding institutional member of the Pacific Anti-Money Laundering Network (PALMN), driving the standard for financial integrity across Oceania." },
               { name: "International Swaps and Derivatives Association (ISDA)", detail: "Our derivatives and commodity hedging operations are fully ISDA-compliant, executed in strategic partnership with global Prime Brokers, including Goldman Sachs and MUFG." },
               { name: "IMF & World Bank (Observer Status)", detail: "PSB provides regional data contributions to the International Monetary Fund’s technical missions regarding digital currency stability in the Pacific." },
               { name: "Pacific Financial Governance District", detail: "Foundational clearing house under the Sovereign Financial Framework Act (2011)." },
             ].map((alliance, i) => (
                <div key={i} className="bg-navy p-10 lg:p-12 hover:bg-white/5 transition-all group">
                   <h4 className="text-sm font-bold text-gold uppercase tracking-widest mb-6 leading-relaxed group-hover:translate-x-2 transition-transform duration-500">{alliance.name}</h4>
                   <p className="text-xs text-white/40 leading-loose font-light tracking-wide group-hover:text-white/60 transition-colors">{alliance.detail}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. FORENSIC COMPLIANCE & INSTITUTIONAL AUDITS */}
      <section className="py-24 lg:py-40 bg-zinc-50 border-b border-zinc-100 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-50 rounded-full blur-[160px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,33,71,0.12) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-40 rounded-full blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(197,160,89,0.08) 0%, transparent 70%)' }} />

        <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
          <div className="mb-20">
            <span className="text-[10px] font-black text-gold uppercase tracking-[0.5em] mb-6 block">
              04 // Active Oversight
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <h2 className="text-4xl lg:text-6xl font-serif text-navy leading-tight max-w-2xl italic">
                Forensic Compliance<br />&amp; Institutional Audits
              </h2>
              <p className="text-sm text-navy/40 font-light leading-relaxed max-w-md italic border-l border-gold/40 pl-6">
                At PSB, trust is verified through real-time forensic oversight. We don&apos;t wait for the end of the year; we audit every second.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: "01",
                title: "Real-Time\nLedger Audit",
                desc: "Every transaction on the Pacific Ledger generates a unique SHA-256 Forensic Fingerprint, allowing for instantaneous regulatory recall without compromising client anonymity.",
                status: "Active // 24/7",
                /* Fingerprint — цифровой отпечаток транзакции SHA-256 */
                icon: (
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                  </svg>
                )
              },
              {
                num: "02",
                title: "Annual\nExternal Audit",
                desc: "Conducted by Pacific Assurance Group (PwC-Affiliated). This includes a 1:1 asset-backing verification for all fiat and digital reserves.",
                status: "Verified // 2025",
                /* Shield-check — подтверждение соответствия активов */
                icon: (
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01.15 14.42a11.952 11.952 0 0011.85 10.58c5.893 0 10.803-4.287 11.763-9.95A12.001 12.001 0 0021 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                )
              },
              {
                num: "03",
                title: "Quarterly Cybersecurity Stress Tests",
                desc: "Led by Kroll's Sovereign Risk Division. These audits simulate \"Year 2030\" quantum-computing attacks to ensure our digital vaults remain impenetrable.",
                status: "Secured // Q1 2026",
                /* CPU chip — квантовые кибератаки и цифровые хранилища */
                icon: (
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                  </svg>
                )
              },
              {
                num: "04",
                title: "Whistleblower\nIntegrity Portal",
                desc: "A secure, zero-knowledge reporting channel for institutional transparency. All submissions are PGP-encrypted.",
                status: "Secure Channel",
                /* Eye-slash — zero-knowledge анонимность отправителя */
                icon: (
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                )
              },
            ].map((audit, i) => (
              <div
                key={i}
                className="relative flex flex-col p-8 lg:p-10 group hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                style={{
                  background: 'linear-gradient(160deg, #0d2d52 0%, #082040 60%, #061830 100%)',
                  boxShadow: '0 20px 60px rgba(0,20,50,0.45), 0 8px 24px rgba(0,20,50,0.30), 0 2px 6px rgba(0,20,50,0.20), inset 0 1px 0 rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Subtle inner glow top edge */}
                <div className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
                  style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)' }} />
                {/* Gold top-right corner accent */}
                <div className="absolute top-0 right-0 w-16 h-[1px] pointer-events-none"
                  style={{ background: 'linear-gradient(to left, rgba(197,160,89,0.8), transparent)' }} />
                <div className="absolute top-0 right-0 h-16 w-[1px] pointer-events-none"
                  style={{ background: 'linear-gradient(to bottom, rgba(197,160,89,0.8), transparent)' }} />
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(197,160,89,0.08) 0%, transparent 60%)' }} />

                {/* Icon — без рамки */}
                <div className="relative z-10 flex items-start justify-between mb-10">
                  <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {audit.icon}
                  </div>
                  <span className="text-[9px] font-black tracking-[0.35em] uppercase transition-colors duration-300"
                    style={{ color: 'rgba(255,255,255,0.12)' }}>{audit.num}</span>
                </div>

                <div className="relative z-10 flex-1">
                  {/* Статус: точка и текст — явный gap через style */}
                  <div className="flex items-center mb-5" style={{ gap: '10px' }}>
                    <span className="block flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    <span className="text-[9px] font-black uppercase" style={{ color: 'rgba(197,160,89,0.7)', letterSpacing: '0.22em' }}>{audit.status}</span>
                  </div>
                  <h4 className="text-xl font-serif text-white mb-5 leading-snug whitespace-pre-line">{audit.title}</h4>
                  <p className="text-xs leading-relaxed font-light" style={{ color: 'rgba(255,255,255,0.45)' }}>{audit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Secure Channel footer */}
          <div className="mt-5 px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{
              background: 'linear-gradient(160deg, #0d2d52 0%, #082040 100%)',
              boxShadow: '0 8px 32px rgba(0,20,50,0.30), inset 0 1px 0 rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}>
            <div className="flex items-center" style={{ gap: '12px' }}>
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold animate-pulse block" />
              <span className="text-[9px] font-black uppercase" style={{ color: 'rgba(255,255,255,0.30)', letterSpacing: '0.45em' }}>Secure Channel</span>
            </div>
            <a href="mailto:forensic@psb-pacific.com" className="text-sm font-mono text-gold hover:text-white transition-colors" style={{ letterSpacing: '0.12em' }}>
              forensic@psb-pacific.com
            </a>
          </div>
        </div>
      </section>

      {/* 7. KEY DOCUMENTS ARCHIVE */}
      <section className="py-24 lg:py-40 bg-white relative">
        <div className="mx-auto max-w-4xl px-8 lg:px-12 text-center">
           <h3 className="text-3xl font-serif text-navy italic mb-12">Key Governance & Regulatory Documents</h3>
           
           <div className="bg-navy rounded-none p-6 mb-16 inline-flex items-center gap-6 border-l-4 border-gold">
              <span className="text-gold text-lg">!</span>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/70">
                [!NOTE] Access to the following documents requires an active <span className="text-white">Client ID</span> and <span className="text-white">PFRC Authorization Level 2</span>.
              </p>
           </div>
           
           <div className="space-y-4">
              {[
                { name: "Annual Sovereign Compliance Report 2025 (PDF)", detail: "A comprehensive overview of our liquidity ratios and regulatory standing." },
                { name: "PFGD Digital Asset Implementation Guide (PDF)", detail: "Technical standards for institutional stablecoin settlement." },
                { name: "Pacific AML/CFT Forensic Handbook (PDF)", detail: "Our internal manual for high-velocity transaction monitoring." }
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-8 border border-zinc-100 hover:border-gold/30 hover:bg-zinc-50 transition-all cursor-not-allowed group">
                   <div className="text-left">
                     <span className="text-sm font-serif text-navy/60 group-hover:text-navy transition-colors">{doc.name}</span>
                     <p className="text-[10px] text-navy/40 mt-1">{doc.detail}</p>
                   </div>
                   <div className="flex items-center gap-4">
                      <span className="text-[9px] font-black uppercase tracking-widest text-navy/20">Restricted Access</span>
                      <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center opacity-30">
                        <svg className="w-3 h-3 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 8. CONTACT COMPLIANCE */}
      <section className="py-24 lg:py-32 bg-zinc-50 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div>
                <h2 className="text-4xl font-serif text-navy italic mb-10">Contact the Compliance Division</h2>
                <p className="text-sm text-navy/50 leading-relaxed font-light max-w-lg italic">
                  For institutional inquiries, license verification, or subpoena responses, please utilize our encrypted channels:
                </p>
             </div>
             
             <div className="grid gap-px bg-zinc-200 border border-zinc-200 overflow-hidden">
                <div className="bg-white p-10 flex justify-between items-center group cursor-pointer">
                   <div>
                      <span className="text-[9px] font-black text-gold uppercase tracking-widest mb-2 block">Direct Email</span>
                      <p className="text-sm font-bold text-navy hover:text-gold transition-colors">compliance@psb-pacific.com</p>
                   </div>
                   <svg className="w-5 h-5 text-navy/20 group-hover:text-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="bg-white p-10 flex justify-between items-center">
                   <div>
                      <span className="text-[9px] font-black text-gold uppercase tracking-widest mb-2 block">Global HQ Phone</span>
                      <p className="text-sm font-bold text-navy">+692 625 4305 (Ext. 4200)</p>
                   </div>
                   <svg className="w-5 h-5 text-navy/20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className="bg-white p-10 flex justify-between items-center group cursor-pointer bg-navy overflow-hidden relative">
                 <div className="absolute inset-y-0 right-0 w-[400px] opacity-[0.05] pointer-events-none z-0">
                    <img src="/assets/kit/marks/psb-mark-white.svg" alt="" className="w-full h-full object-contain object-right" />
                 </div>
                   <div className="relative z-10">
                      <span className="text-[9px] font-black text-gold uppercase tracking-widest mb-2 block tracking-[0.4em]">PGP Public Key</span>
                      <p className="text-sm font-bold text-white group-hover:text-gold transition-colors uppercase tracking-widest">[Click to Download Security Certificate]</p>
                   </div>
                   <svg className="w-5 h-5 text-gold relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
             </div>
          </div>
          <div className="mt-16 text-center">
             <p className="text-[9px] font-black uppercase tracking-[0.4em] text-navy/30 italic">
               Note: All unencrypted communications containing sensitive PII (Personally Identifiable Information) will be automatically quarantined by our AI firewall.
             </p>
          </div>
        </div>
      </section>

      {/* 9. WHY TRUST PSB / BOARD STATEMENT */}
      <section className="py-24 lg:py-48 bg-white text-center">
        <div className="mx-auto max-w-4xl px-8 lg:px-12 text-center">
           <h2 className="text-4xl lg:text-5xl font-serif text-navy italic mb-12">Why Trust Pacific Settlement Bank?</h2>
           <span className="text-[10px] font-black text-gold uppercase tracking-[0.5em] mb-12 block">Absolute Neutrality // Institutional Record</span>
           
           <div className="grid md:grid-cols-3 gap-16 mb-24">
              <div>
                <p className="text-4xl font-serif text-navy mb-4">Pristine Record</p>
                <p className="text-[9px] font-black text-navy/40 uppercase tracking-widest">Zero Enforcement Actions or regulatory penalties since the activation of our sovereign charter in 2011.</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-navy mb-4">Integrity Rating</p>
                <p className="text-[9px] font-black text-navy/40 uppercase tracking-widest">Rated 99/100 on the Regional Financial Transparency Index (2025).</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-navy mb-4">Legal Fortress</p>
                <p className="text-[9px] font-black text-navy/40 uppercase tracking-widest">Client assets are legally shielded under the Sovereign Financial Framework Act, providing immunity from external civil litigation and overreach.</p>
              </div>
           </div>

           <div className="relative inline-block">
              <span className="absolute -top-10 -left-10 text-9xl text-gold/10 font-serif leading-none italic">“</span>
              <p className="text-2xl lg:text-4xl font-serif text-navy italic leading-relaxed relative z-10 max-w-3xl mx-auto">
                In the new era of finance, compliance is the only currency that buys absolute security. At PSB, we don&apos;t just follow the rules—we build the ledger that proves them.
              </p>
              <div className="mt-12">
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-navy">The Board of Directors</p>
                 <p className="text-[9px] font-medium uppercase tracking-[0.4em] text-gold mt-2 tracking-[0.6em]">Pacific Settlement Bank</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
