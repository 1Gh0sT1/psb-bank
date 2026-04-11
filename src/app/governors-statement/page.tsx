'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function GovernorsStatementPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-navy">
      {/* 1. Page Intro / Header - Very Strong Ceremonial Title Block */}
      <section className="pt-64 lg:pt-80 pb-20 bg-navy relative overflow-hidden">
        {/* Ambient Gold Glows & Brand Mark */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.02] pointer-events-none z-0">
          <img src="/assets/kit/marks/psb-mark-white.svg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'About Us' },
              { label: "Governor's Statement" }
            ]} 
          />
          <div className="flex flex-col gap-12 pt-12">
            
            <div className="max-w-4xl border-l border-gold/50 pl-10 md:pl-16">
              <h2 className="text-[12px] font-black uppercase tracking-[0.6em] text-gold mb-6">Institutional Address</h2>
              <h1 className="text-3xl sm:text-5xl lg:text-8xl font-serif text-white tracking-tight mb-8 leading-tight">
                GOVERNOR’S STATEMENT
              </h1>
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                <span className="text-lg lg:text-xl font-light text-white/60 tracking-wide">Dr. Alistair Thorne, Governor & CEO</span>
                <div className="h-[1px] w-12 bg-gold/30 hidden md:block" />
                <span className="text-[11px] font-mono text-gold uppercase tracking-[0.3em]">Q2 2026 Address to Institutional Stakeholders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content - Editorial Ceremony */}
      <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-8 lg:px-12 relative z-10">
          
          {/* A Message from the Governor */}
          <article className="prose prose-xl prose-slate max-w-none mb-32">
            <h3 className="text-[12px] font-black uppercase tracking-[0.5rem] text-gold mb-12 border-b border-zinc-100 pb-8">
              A Message from the Governor
            </h3>
            <div className="space-y-10 text-navy/90 font-serif leading-relaxed text-xl lg:text-2xl">
              <p className="font-bold mb-12 italic">Ladies and Gentlemen,</p>
              
              <p>
                In an era defined by unprecedented geopolitical shifts and the rapid erosion of traditional financial boundaries, Pacific Settlement Bank (PSB) stands as an unyielding bastion of stability. We do not merely safeguard assets; we architect the future of sovereign digital finance.
              </p>
              
              <p>
                Our performance in 2025—culminating in $184.6B in assets under custody and a near-perfect 99/100 transparency rating—is a testament to the resilience of the Pacific Financial Governance District (PFGD). While the global banking sector grapples with legacy vulnerabilities, PSB has thrived by embracing the intersection of sovereign law and post-quantum technology.
              </p>
            </div>
          </article>

          {/* Our Three Strategic Pillars */}
          <section className="mb-32">
             <h3 className="text-[12px] font-black uppercase tracking-[0.5rem] text-gold mb-16">
               Our Three Strategic Pillars
             </h3>
             <div className="space-y-16">
                {[
                  {
                    title: "Sovereign Digital Sovereignty",
                    text: "We have successfully deployed quantum-resistant Lattice-Based Encryption across all our nodes, ensuring that client capital is immune to the emerging threats of the next decade."
                  },
                  {
                    title: "Blue Economy Leadership",
                    text: "Through the issuance of $3.5B in Sovereign Blue Carbon Credits, we have aligned institutional profit with the survival and prosperity of the Pacific ecosystem."
                  },
                  {
                    title: "Forensic Transparency",
                    text: "By integrating the Pacific Ledger directly with the PFRC, we have eliminated the \"trust gap,\" providing absolute clarity to regulators while maintaining total anonymity for our clients."
                  }
                ].map((pillar, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start group">
                    <div className="md:col-span-1 text-2xl font-serif text-gold/30 italic">0{idx + 1}</div>
                    <div className="md:col-span-11 border-l-2 border-gold/10 pl-10 group-hover:border-gold transition-colors duration-700">
                      <h4 className="text-xl font-black uppercase tracking-widest text-navy mb-4">{pillar.title}</h4>
                      <p className="text-lg text-zinc-500 font-light leading-relaxed">{pillar.text}</p>
                    </div>
                  </div>
                ))}
             </div>
          </section>

          {/* Strategic Priorities for 2026–2027 */}
          <section className="mb-32 p-16 bg-zinc-50 border border-zinc-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -translate-y-1/2 translate-x-1/2 rounded-full" />
            <h3 className="text-[12px] font-black uppercase tracking-[0.5rem] text-gold mb-16">
              Strategic Priorities for 2026–2027
            </h3>
            <div className="space-y-12">
               {[
                 {
                   label: "Expansion of the Pacific Ledger",
                   desc: "We are forging new alliances with sovereign nations to establish the Ledger as the primary clearing protocol for regional CBDCs."
                 },
                 {
                   label: "Algorithmic Governance (Leviathan-1)",
                   desc: "Deploying our proprietary Leviathan-1 AI to automate 100% of forensic AML/KYC screenings, ensuring that illicit flows are neutralized before they enter our ecosystem."
                 },
                 {
                   label: "Sovereign Digital Identity (SDI)",
                   desc: "Enhancing our biometric \"Level 42\" protocols to provide Ultra-High-Net-Worth (UHNW) clients with a single, encrypted digital passport for global movement."
                 }
               ].map((priority, i) => (
                 <div key={i} className="flex gap-10 items-start pb-10 border-b border-zinc-200 last:border-0 last:pb-0">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                    <div>
                       <h5 className="text-[11px] font-black uppercase tracking-widest text-navy mb-3">{priority.label}</h5>
                       <p className="text-sm text-zinc-500 font-light leading-relaxed m-0">{priority.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </section>

          {/* Navigating Global Challenges */}
          <section className="mb-32">
             <h3 className="text-[12px] font-black uppercase tracking-[0.5rem] text-gold mb-16">
               Navigating Global Challenges
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  {
                    title: "Geopolitical Resilience",
                    text: "In Q1 2026, we successfully identified and neutralized 1,400+ sophisticated attempts at systemic intrusion, safeguarding $6.2B in institutional liquidity."
                  },
                  {
                    title: "Climate Finance Advocacy",
                    text: "In partnership with the Pacific Islands Forum, PSB has channeled $750M into regional coastal resilience, proving that capital preservation and environmental integrity are inseparable."
                  },
                  {
                    title: "Defense of Privacy",
                    text: "We continue to advocate against extra-jurisdictional overreach. Our position remains firm: Offshore trusts are a legitimate instrument of sovereignty, and we will continue to utilize Zero-Knowledge Proofs to shield them from unwarranted scrutiny."
                  }
                ].map((challenge, i) => (
                  <div key={i} className="flex flex-col gap-6">
                    <h5 className="text-[11px] font-black uppercase tracking-widest text-navy pt-6 border-t border-zinc-100">{challenge.title}</h5>
                    <p className="text-sm text-zinc-500 font-light leading-relaxed m-0 italic">
                      {challenge.text}
                    </p>
                  </div>
                ))}
             </div>
          </section>

          {/* A Word to Our Clients & Looking Ahead */}
          <section className="mb-32 space-y-24">
             <div className="border-l-4 border-gold pl-12 py-4">
                <h3 className="text-[12px] font-black uppercase tracking-[0.5rem] text-gold mb-10 text-gold">
                  A Word to Our Clients
                </h3>
                <p className="text-xl lg:text-2xl font-serif text-navy leading-relaxed">
                  To our institutional partners and private clients: Privacy is not a privilege—it is a fundamental human right. In 2026, PSB will double its investment in Zero-Knowledge (ZK) technology. We are building a world where your transactions are mathematically invisible to the public eye, yet forensically compliant with the law. We have achieved a 100% clean audit across all 11 nodes, proving that ethics and anonymity can coexist in a high-velocity economy.
                </p>
             </div>

             <div className="space-y-12">
                <h3 className="text-[12px] font-black uppercase tracking-[0.5rem] text-gold mb-10">
                  Looking Ahead
                </h3>
                <div className="text-lg lg:text-xl font-light text-navy/70 leading-relaxed space-y-8">
                  <p>
                    The road ahead is complex. As quantum computing challenges traditional encryption and central banks rethink monetary sovereignty, PSB will remain your anchor in the storm.
                  </p>
                  <p>
                    I invite you to review our 2026–2030 Strategic Roadmap and join us in defining a future where finance is not just global—but optimal, ethical, and absolutely secure.
                  </p>
                </div>
             </div>
          </section>

          {/* Contact the Governor’s Office */}
          <section className="pt-24 border-t border-gold/20">
             <div className="bg-navy p-12 lg:p-20 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:scale-125 transition-transform duration-1000" />
                
                <h3 className="text-[12px] font-black uppercase tracking-[0.5rem] text-gold mb-12">Contact the Governor’s Office</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                   <div className="space-y-10">
                      <div className="space-y-3">
                         <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Secure Email (PGP-encrypted)</span>
                         <a href="mailto:governor@psb-pacific.com" className="text-xl font-mono text-gold hover:text-white transition-colors block">
                            governor@psb-pacific.com
                         </a>
                      </div>
                      <div className="space-y-3">
                         <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Executive Office</span>
                         <p className="text-sm font-light text-white/60 leading-relaxed m-0">
                           Level 42, The Leviathan Plaza, <br />
                           Majuro, MH 96960
                         </p>
                      </div>
                   </div>
                   
                   <div className="flex items-center justify-center border-l border-white/10 hidden md:flex">
                      <div className="text-center group">
                         <div className="text-[8px] font-black uppercase tracking-[0.5rem] text-white/20 mb-6 group-hover:text-gold transition-colors duration-700">Official Correspondence</div>
                         <div className="w-16 h-[1px] bg-gold/30 mx-auto" />
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* Final Quote & Signature */}
          <section className="pt-32 pb-20 flex flex-col items-center gap-12 text-center">
             <div className="flex flex-col items-center gap-8 group">
                <img src="/assets/kit/marks/psb-mark-blue.svg" alt="PSB Seal" className="w-16 h-16 opacity-20 mb-4" />
                <div className="w-[1px] h-16 bg-gold/30 group-hover:h-24 transition-all duration-1000" />
                <p className="text-2xl lg:text-3xl font-serif italic text-navy/90 leading-relaxed max-w-3xl">
                  "In uncertainty, we find strategy. В регулировании мы находим доверие."
                </p>
                <div className="flex flex-col items-center mt-6">
                   <span className="text-gold text-2xl font-serif italic mb-2 tracking-tight">— Dr. Alistair Thorne</span>
                   <span className="text-[10px] font-black uppercase tracking-[0.4rem] text-navy/30">Governor & CEO</span>
                </div>
             </div>
          </section>

        </div>
      </section>

      {/* Corporate Identity Strip */}
      <section className="bg-zinc-50 py-24 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-navy/20">
              <div className="flex items-center gap-6">
                 <img src="/assets/kit/marks/psb-mark-blue.svg" alt="PSB" className="h-6 filter grayscale opacity-40" />
                 <span>Sovereign Mandate // 2026</span>
              </div>
              <div className="hidden lg:block">PACIFIC FINANCIAL GOVERNANCE DISTRICT</div>
              <div className="flex items-center gap-4">
                 <span className="w-2 h-2 rounded-full bg-gold" />
                 Institutional Leadership
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
