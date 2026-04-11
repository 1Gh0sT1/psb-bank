"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

const content = {
  intro: {
    heading: "Who we are",
    logo: "/assets/kit/marks/psb-mark-blue.svg",
    image: "/images/about/hq.png",
    established: "Established in 2011 pursuant to the Sovereign Financial Framework Act of the Marshall Islands. Founded to bridge the gap between traditional capital markets and the emerging digital economy, PSB operates as a premier, autonomous financial institution headquartered in Majuro, Republic of the Marshall Islands.",
    mission: "PSB’s mission is to provide an unshakeable foundation for global liquidity, combining institutional security with cutting-edge transparency under the mandate of the Pacific Financial Regulation Commission (PFRC). This is achieved through:",
    achievedThrough: [
      {
        title: "Sovereign Asset Protection & Hybrid Liquidity",
        desc: "Bespoke multi-currency settlement structures, institutional-grade digital asset custody, and seamless fiat-to-crypto gateways."
      },
      {
        title: "Forensic Regulatory Excellence",
        desc: "Absolute adherence to FATF and OECD frameworks, reinforced by the Pacific Ledger protocol, ensuring real-time oversight and immutable transaction integrity."
      },
      {
        title: "Blue Economy & Infrastructure Resilience",
        desc: "Lead underwriting of sovereign-backed Blue Bonds and high-tech infrastructure projects designed to foster economic stability across Oceania."
      }
    ],
    final: "As a global leader in hybrid settlement services, PSB serves as the primary clearing agent for institutional clients and sovereign entities. By integrating quantum-resistant security with blockchain-based clearing, the bank empowers its clients to navigate the complexities of modern finance while fostering the economic resilience and digital sovereignty of Pacific island nations."
  },
  governance: {
    intro: "Pacific Settlement Bank (PSB) is governed by a Board of Directors (BoD) established under Article 14 (b) of the PSB Charter (2011). This 11-member board, chaired by the Chief Executive Officer (CEO), is the supreme authority responsible for the bank's strategic trajectory, macro-risk oversight, and jurisdictional alignment.",
    composition: "The board’s composition is engineered to balance decisive executive leadership with rigorous independent oversight:",
    stats: [
      { label: "Executive Members", val: "4 Members", type: "CEO, COO, CTO, CCO" },
      { label: "Non-Executive Members", val: "7 Members", type: "Independent Global Luminaries" }
    ],
    details: "The BoD convenes quarterly at the Global Governance Hub in Majuro, with strategic field sessions at PSB regional nodes (e.g., Tahiti, Fiji, Vanuatu) to audit operational performance and ensure total alignment with the PFRC mandate. The Executive Leadership Team (ELT) manages the day-to-day operations across our 11 global departments, executing the Board's directives with precision."
  },
  functions: [
    {
      title: "Hybrid Settlement Authority",
      desc: "Designs and operates bespoke multi-currency structures and institutional digital asset custody to bridge the gap between traditional fiat and blockchain liquidity."
    },
    {
      title: "Forensic Infrastructure Architect",
      desc: "Licenses and manages the Pacific Ledger protocol, providing a transparent, immutable framework for real-time cross-border clearing and market efficiency."
    },
    {
      title: "Institutional Fiduciary Partner",
      desc: "Acts as a high-level advisor to sovereign funds, global corporations, and family offices, offering strategic guidance on asset protection and multi-jurisdictional growth."
    },
    {
      title: "Sovereign Compliance Leader",
      desc: "Implements FATF, OECD, and PFRC standards through real-time AML/KYC monitoring, ensuring absolute integrity and client confidentiality."
    },
    {
      title: "Blue Finance Strategist",
      desc: "Finances critical maritime infrastructure and sovereign-backed Blue Bonds to align regional development with global environmental and economic goals."
    }
  ],
  differentiators: [
    {
      title: "Sovereign Autonomy",
      desc: "Operates under the unique protection of the Pacific Financial Governance District, ensuring independence from external political fluctuations and rapid regulatory agility."
    },
    {
      title: "Technological Convergence",
      desc: "The only institution to offer a unified ledger for fiat and digital assets, powered by quantum-resistant encryption."
    },
    {
      title: "Real-Time Forensic Oversight",
      desc: "Trust is not assumed; it is proven through immutable records and real-time transparency for every institutional stakeholder."
    }
  ]
};

export default function AboutUsContent() {
  return (
    <main className="bg-white min-h-screen pb-0 pt-48 lg:pt-56">
      {/* 2. HERO / INTRO */}
      <section className="mx-auto max-w-7xl px-8 lg:px-12 mb-32 lg:mb-48 border-t border-transparent relative overflow-hidden">
        <div className="pt-12">
          <Breadcrumbs 
            variant="navy"
            items={[
              { label: 'Home', href: '/' },
              { label: 'About Us' },
              { label: 'Who We Are' }
            ]} 
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start relative">
          <div className="w-full lg:w-7/12">
            <div className="flex items-center gap-6 mb-12">
              <img src={content.intro.logo} alt="PSB Logo" className="h-10 w-auto filter brightness-0" />
              <div className="h-8 w-[1px] bg-gold/30" />
              <h1 className="text-[11px] font-black uppercase tracking-[0.8em] text-navy/60"> Who we are</h1>
            </div>
            
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-navy leading-tight italic mb-12 lg:mb-16 tracking-tight">
              Who we are.
            </h2>
            
            <div className="max-w-xl space-y-8 lg:space-y-10 text-[14px] lg:text-[15px] text-navy/60 font-light leading-relaxed italic">
              <p className="border-l-4 border-gold pl-6 lg:pl-10 text-lg lg:text-xl text-navy/80 py-4 not-italic font-serif">
                {content.intro.established}
              </p>
              <p className="pl-6 lg:pl-10">
                {content.intro.mission}
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-5/12 relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-zinc-100 shadow-2xl">
              <motion.img 
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                src={content.intro.image} 
                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 hover:grayscale-0 hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent pointer-events-none" />
            </div>
            
            <div className="absolute -bottom-10 -left-10 bg-white border border-zinc-100 p-10 shadow-2xl max-w-xs hidden lg:block">
              <span className="text-[9px] font-black text-gold uppercase tracking-[0.4em] mb-4 block">Established</span>
              <span className="font-serif text-6xl text-navy italic">2011</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACHIEVED THROUGH */}
      <section className="bg-zinc-50 py-24 lg:py-48 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
             <div className="max-w-2xl">
                <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-navy/30 mb-8 italic">Methodology</h3>
                <h4 className="font-serif text-3xl sm:text-4xl lg:text-7xl text-navy italic leading-snug">Sovereign <br className="hidden sm:block" />Execution Framework.</h4>
             </div>
             <p className="text-[11px] font-black uppercase tracking-[0.4em] text-gold border-b border-gold pb-4 inline-block w-fit">
                Operational Mandates
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-8">
            {content.intro.achievedThrough.map((item, i) => (
              <motion.div 
                key={i} 
                className="group h-[320px] sm:h-[400px] [perspective:1000px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-white p-12 lg:p-16 flex flex-col justify-between border border-zinc-200 shadow-sm [backface-visibility:hidden]">
                    <div className="space-y-8">
                      <span className="text-[9px] font-black text-gold uppercase tracking-[0.4em]">Mandate Node_0{i+1}</span>
                      <h5 className="font-serif text-3xl text-navy italic leading-tight">{item.title}</h5>
                    </div>
                    <div className="text-gold text-[10px] font-black uppercase tracking-widest flex items-center gap-4">
                      View Mandate Details <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 h-full w-full bg-navy p-12 lg:p-16 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center border border-navy/20">
                    <p className="text-sm lg:text-base text-gold/80 font-serif italic leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="mt-8 pt-8 border-t border-white/10 uppercase text-[9px] font-black tracking-widest text-white/30">
                      Institutional Record Verified
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 max-w-4xl text-navy/40 font-light leading-loose italic">
             <p>{content.intro.final}</p>
          </div>
        </div>
      </section>

      {/* 4. GOVERNANCE Section */}
      <section className="py-32 lg:py-48 bg-white relative">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-24 lg:gap-48 relative">
            <div className="w-full lg:w-5/12">
               <div className="border-l-4 border-gold pl-12 lg:sticky lg:top-32">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-navy/30 mb-8 italic">Supreme Authority</h3>
                 <h4 className="font-serif text-5xl lg:text-7xl text-navy leading-tight italic">Governance.</h4>
                 
                 <div className="mt-20 space-y-12">
                   {content.governance.stats.map((stat, i) => (
                     <div key={i} className="flex flex-col">
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gold mb-2">{stat.label}</span>
                        <span className="font-serif text-4xl text-navy italic">{stat.val}</span>
                        <span className="text-[10px] font-bold text-navy/30 uppercase tracking-[0.2em] mt-4">{stat.type}</span>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
            
            <div className="w-full lg:w-7/12 space-y-12 text-[15px] text-navy/60 font-light leading-relaxed italic pt-12 lg:pt-0">
               <p className="text-xl text-navy/80 font-serif not-italic leading-relaxed border-b border-zinc-200 pb-12">
                  {content.governance.intro}
               </p>
               <p>{content.governance.composition}</p>
               <div className="h-[0.5px] w-full bg-zinc-200" />
               <p className="leading-loose font-serif">
                  {content.governance.details}
               </p>
               
               <div className="pt-10">
                  <Link href="/board-of-directors" className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-navy hover:text-gold transition-colors">
                     View Board Records <span className="text-gold">→</span>
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FUNCTIONS Section */}
      <section className="py-32 lg:py-48 bg-zinc-50 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="mb-24 flex items-center justify-between border-b border-zinc-100 pb-12">
            <h3 className="font-serif text-4xl lg:text-7xl text-navy italic">Primary Functions.</h3>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/20">Institutional Mandates</span>
          </div>

          <div className="space-y-px bg-zinc-100 border border-zinc-100 shadow-sm">
             {content.functions.map((func, i) => (
                <div key={i} className="group bg-white p-12 lg:p-16 flex flex-col md:flex-row gap-12 lg:gap-24 hover:bg-zinc-50 transition-all duration-700">
                   <div className="w-full md:w-1/3">
                      <div className="flex items-center gap-6">
                         <span className="text-[9px] font-black text-gold">0{i+1} —</span>
                         <h5 className="font-serif text-3xl text-navy group-hover:text-gold transition-colors duration-500">{func.title}</h5>
                      </div>
                   </div>
                   <div className="w-full md:w-2/3">
                      <p className="text-[15px] text-navy/50 font-light leading-relaxed italic">
                         {func.desc}
                      </p>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. KEY DIFFERENTIATORS */}
      <section className="bg-navy py-48 lg:py-72 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
          <div className="text-center mb-32">
             <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-gold mb-10">Operational Edge</h3>
             <h4 className="font-serif text-5xl lg:text-7xl text-white italic">Key Differentiators.</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
             {content.differentiators.map((diff, i) => (
                <div key={i} className="flex flex-col border-l border-white/10 pl-10 h-full justify-between">
                   <h5 className="font-serif text-4xl text-white italic mb-10">{diff.title}</h5>
                   <p className="text-sm text-white/30 font-light leading-relaxed italic mt-auto border-t border-white/5 pt-10">
                      {diff.desc}
                   </p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. CONTACT CTA */}
      <section className="py-32 lg:py-48 bg-white">
         <div className="mx-auto max-w-7xl px-8 lg:px-12 text-center">
            <div className="mb-16 grayscale opacity-40 hover:opacity-100 transition-all duration-1000">
               <img src="/assets/kit/marks/psb-mark-blue.svg" alt="" className="h-16 w-auto mx-auto" />
            </div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-navy/30 mb-8">Access the Fiduciary Hub</h4>
            <Link 
              href="/contact-us" 
              className="inline-flex items-center gap-6 px-16 py-8 bg-navy text-gold text-[10px] font-black uppercase tracking-[0.4em] hover:bg-gold hover:text-navy transition-all duration-700 group shadow-2xl"
            >
              Contact Pacific Settlement Bank
              <span className="transition-transform group-hover:translate-x-4">→</span>
            </Link>
         </div>
      </section>
    </main>
  );
}
