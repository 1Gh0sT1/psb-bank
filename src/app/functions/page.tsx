'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ShieldCheck, Cpu, Briefcase, Lock, Anchor, Globe, Database } from 'lucide-react';

const functions = [
  {
    id: 'settlement',
    title: 'Hybrid Settlement Authority',
    icon: <Cpu className="w-12 h-12" />,
    description: 'Designs and operates bespoke multi-currency structures and institutional digital asset custody to bridge the gap between traditional fiat and blockchain liquidity.'
  },
  {
    id: 'infrastructure',
    title: 'Forensic Infrastructure Architect',
    icon: <Database className="w-12 h-12" />,
    description: 'Licenses and manages the Pacific Ledger protocol, providing a transparent, immutable framework for real-time cross-border clearing and market efficiency.'
  },
  {
    id: 'fiduciary',
    title: 'Institutional Fiduciary Partner',
    icon: <Briefcase className="w-12 h-12" />,
    description: 'Acts as a high-level advisor to sovereign funds, global corporations, and family offices, offering strategic guidance on asset protection and multi-jurisdictional growth.'
  },
  {
    id: 'compliance',
    title: 'Sovereign Compliance Leader',
    icon: <Lock className="w-12 h-12" />,
    description: 'Implements FATF, OECD, and PFRC standards through real-time AML/KYC monitoring, ensuring absolute integrity and client confidentiality.'
  },
  {
    id: 'finance',
    title: 'Blue Finance Strategist',
    icon: <Anchor className="w-12 h-12" />,
    description: 'Finances critical maritime infrastructure and sovereign-backed Blue Bonds to align regional development with global environmental and economic goals.'
  }
];

export default function FunctionsPage() {
  return (
    <main className="min-h-screen bg-navy text-white">
      {/* Hero Section */}
      <section className="pt-64 lg:pt-80 pb-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.02] pointer-events-none z-0">
          <img src="/assets/kit/marks/psb-mark-white.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gold/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
          <Breadcrumbs 
            items={[
              { label: 'Institutional' },
              { label: 'Strategic Functions' }
            ]} 
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-black">Strategic Mandate</span>
            </div>
            <h1 className="text-6xl md:text-[6.5rem] font-serif leading-[0.9] mb-12 italic tracking-tighter">
              Institutional <br /> <span className="text-gold ml-24 md:ml-48">Functions</span>
            </h1>
            <p className="text-2xl text-white/40 font-light leading-relaxed max-w-2xl border-l border-gold/20 pl-10 ml-4">
              As the premier hybrid settlement institution in Oceania, Pacific Settlement Bank fulfills critical roles within the global financial architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid of Pillars */}
      <section className="pb-40 relative z-10">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {functions.map((func, idx) => (
              <motion.div
                key={func.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-navy p-12 lg:p-16 hover:bg-white/[0.02] transition-colors duration-500 group relative border border-white/5"
              >
                <div className="text-gold/20 mb-12 group-hover:text-gold transition-colors duration-500">
                  {func.icon}
                </div>
                
                <h3 className="text-3xl font-serif italic mb-6 group-hover:text-gold transition-colors duration-500 tracking-tight">
                  {func.title}
                </h3>
                
                <p className="text-lg text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors duration-500">
                  {func.description}
                </p>

                <div className="absolute top-12 right-12 text-[4rem] font-serif italic text-white/[0.03] select-none pointer-events-none group-hover:text-gold/[0.05] transition-colors duration-500">
                  0{idx + 1}
                </div>
              </motion.div>
            ))}
            
            {/* CTA / Summary Card */}
            <div className="bg-navy p-12 lg:p-16 flex flex-col justify-end border border-white/5">
                <div className="flex items-center gap-4 mb-8">
                  <Globe className="w-6 h-6 text-gold animate-pulse" />
                  <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-black">Global Operations</span>
                </div>
                <h4 className="text-2xl font-serif italic text-white/80 mb-6">Omnichannel Governance District</h4>
                <p className="text-sm text-white/30 font-light">
                  Executing directives across 11 regional operational nodes with real-time forensic oversight and absolute institutional autonomy.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Branding */}
      <div className="py-20 flex justify-center opacity-[0.05] grayscale pointer-events-none select-none">
        <img src="/assets/kit/marks/psb-mark-white.svg" alt="PSB Watermark" className="h-24 w-auto" />
      </div>
    </main>
  );
}
