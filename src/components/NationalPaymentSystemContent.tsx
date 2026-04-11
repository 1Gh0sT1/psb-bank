'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ShieldCheck, Zap, CreditCard, Cpu, Users } from 'lucide-react';

export default function NationalPaymentSystemContent() {
  const visionPoints = [
    {
      icon: <Users className="w-8 h-8 stroke-[1px]" />,
      title: "Financial Inclusion",
      desc: "Enablement of optimal financial inclusion in South Sudan."
    },
    {
      icon: <Cpu className="w-8 h-8 stroke-[1px]" />,
      title: "Interoperability",
      desc: "Creation of an interoperable NPS through First Principles Thinking."
    },
    {
      icon: <CreditCard className="w-8 h-8 stroke-[1px]" />,
      title: "Cost Efficiency",
      desc: "Lowering of the cost of account to account and merchant payments."
    },
    {
      icon: <Zap className="w-8 h-8 stroke-[1px]" />,
      title: "Tech Deployment",
      desc: "Deployment of the latest technology to provide access to finance."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 stroke-[1px]" />,
      title: "MSME Enablement",
      desc: "Enabling MSMEs to become digital payment enabled at lowest cost."
    }
  ];

  return (
    <main className="bg-white min-h-screen text-navy">
      {/* 1. HERO - Institutional Standard */}
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
                { label: 'Banking & Currency' },
                { label: 'National Payment System' }
              ]}
            />
          </div>

          <div className="max-w-4xl">
            <div className="flex items-center gap-6 mb-12">
              <img src="/assets/kit/marks/psb-mark-white.svg" alt="PSB Logo" className="h-10 w-auto" />
              <div className="h-8 w-[1px] bg-gold/30" />
              <h1 className="text-[11px] font-black uppercase tracking-[0.8em] text-white/60">National Infrastructure</h1>
            </div>

            <h2 className="font-serif text-5xl lg:text-9xl text-white leading-[0.95] italic tracking-tight mb-16">
              National <br /> <span className="text-gold">Payment System</span>
            </h2>

            <p className="text-xl lg:text-2xl text-white/60 font-serif italic leading-relaxed max-w-2xl border-l border-gold/30 pl-10">
              Payment systems provide channels through which funds are transferred among financial institutions to discharge the payment obligations arising in the financial markets and across the wider economy.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FIVE CORE CONCEPTS (VISION) */}
      <section className="py-24 lg:py-40 bg-zinc-50 border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-8 lg:px-12 text-center mb-24">
          <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-navy/30 mb-8 italic">Vision & Strategy</h3>
          <h4 className="font-serif text-3xl lg:text-5xl text-navy italic">NPS Vision Objectives</h4>
        </div>

        <div className="mx-auto max-w-[1600px] px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-zinc-200 border border-zinc-200 shadow-sm overflow-hidden">
            {visionPoints.slice(0, 3).map((point, i) => (
              <div key={i} className="bg-white p-12 space-y-8 flex flex-col items-center text-center">
                <div className="text-gold mb-4 whitespace-nowrap">
                  {point.icon}
                </div>
                <h5 className="font-serif text-xl text-navy italic border-b border-zinc-100 pb-4 w-full">{point.title}</h5>
                <p className="text-xs text-navy/50 font-light leading-relaxed italic">{point.desc}</p>
              </div>
            ))}
            {/* Split for 3+2 logic on desktop if needed, but here simple grid is fine */}
            {visionPoints.slice(3, 5).map((point, i) => (
              <div key={i + 3} className="bg-white p-12 space-y-8 flex flex-col items-center text-center">
                <div className="text-gold mb-4 whitespace-nowrap">
                  {point.icon}
                </div>
                <h5 className="font-serif text-xl text-navy italic border-b border-zinc-100 pb-4 w-full">{point.title}</h5>
                <p className="text-xs text-navy/50 font-light leading-relaxed italic">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED CONTENT SECTION */}
      <section className="py-32 lg:py-48 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            {/* Left Context Column */}
            <div className="lg:col-span-8 space-y-24">
              <div className="space-y-12">
                <div className="flex items-center gap-6">
                  <h3 className="font-serif text-3xl lg:text-4xl text-navy italic">Context of the NPS</h3>
                </div>
                <p className="text-lg text-navy/60 font-serif leading-relaxed italic max-w-3xl">
                  As public institutions responsible for preserving public trust in the national currencies, and in line with their mandate for financial and monetary stability, central banks exercise a special form of supervision of payment systems called “oversight”.
                </p>
              </div>

              <div className="space-y-12">
                <div className="flex items-center gap-6">
                  <h3 className="font-serif text-3xl lg:text-4xl text-navy italic">The National Payments System (NPS)</h3>
                </div>
                <div className="prose prose-lg prose-slate font-serif italic text-navy/60 leading-relaxed max-w-3xl space-y-8">
                  <p>
                    The national payments system (NPS) comprises the financial market infrastructures as well as retail payment systems, instruments and payment service providers (PSPs). The term financial market infrastructure (FMI) refers to systemically important payment systems (SIPS), central securities depositories (CSDs), securities settlement systems (SSSs), central counterparties (CCPs), and trade repositories (TRs).
                  </p>
                  <p>
                    Networks and platforms for the delivery of retail payments play an important role today in supporting financial access. Modern retail payment technologies are already being used to integrate underserved and non-served segments of the population into the formal financial sector.
                  </p>
                </div>
              </div>

              <div className="space-y-12 bg-zinc-50 p-12 lg:p-20 border border-zinc-100">
                <div className="flex items-center gap-6 mb-12">
                  <h3 className="font-serif text-2xl lg:text-3xl text-navy italic underline decoration-gold/20 underline-offset-[16px]">Embryonic South Sudan National Financial Inclusion Strategy.</h3>
                </div>
                <p className="text-lg text-navy/50 font-serif leading-relaxed italic">
                  The core objective set forth in a National Financial Inclusion Strategy (NIFS) is the development of a strategy and implementation plan for a country to achieve an inclusive financial system in which every adult has access to and is able to make full use of a range of adequate, quality and affordable financial services.
                </p>
              </div>
            </div>

            {/* Right Sidebar Metadata */}
            <div className="lg:col-span-4 lg:pl-16 lg:border-l border-zinc-100 sticky top-32">
              <div className="space-y-16">
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-navy/30 mb-8 underline decoration-gold/30 underline-offset-[12px]">Infrastructure Summary</h5>
                  <ul className="space-y-6">
                    {[
                      "Systemically Important Payment Systems (SIPS)",
                      "Central Securities Depositories (CSDs)",
                      "Securities Settlement Systems (SSSs)",
                      "Central Counterparties (CCPs)",
                      "Trade Repositories (TRs)"
                    ].map((item, i) => (
                      <li key={i} className="text-[11px] font-black uppercase tracking-[0.2em] text-navy/60 flex gap-4">
                        <span className="text-gold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-10 bg-navy text-white text-center group overflow-hidden relative">
                  <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-gold block mb-4">Official Mandate</span>
                  <p className="text-xs font-serif italic text-white/40 leading-relaxed">
                    Financial Market Infrastructure Governance Act Compliance 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BRANDING STRIP */}
      <section className="py-24 border-t border-zinc-100 flex justify-center opacity-10">
        <img src="/assets/kit/marks/psb-mark-blue.svg" alt="" className="h-16 w-auto grayscale" />
      </section>
    </main>
  );
}
