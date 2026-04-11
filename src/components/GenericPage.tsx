import React from "react";
import Link from "next/link";
import Breadcrumbs from './Breadcrumbs';

interface GenericPageProps {
  title: string;
  html: string;
}

export default function GenericPage({ title, html }: GenericPageProps) {
  return (
    <div className="bg-white min-h-screen text-navy font-sans antialiased">
      {/* 1. INTERNAL HERO - Elite "Old Money" Style */}
      <section className="bg-navy pt-64 pb-24 lg:pt-96 lg:pb-32 relative overflow-hidden bg-gradient-to-br from-navy via-[#01060F] to-navy">
        {/* Ambient Gold Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
          <Breadcrumbs 
            items={[
              { label: title }
            ]} 
          />
          <div className="flex items-center gap-6 mb-12">
            <img src="/assets/kit/marks/psb-mark-white.svg" alt="PSB" className="h-10 w-auto mr-4" />
            <div className="h-8 w-[1px] bg-gold/20" />
            <div className="h-[2px] w-12 bg-gold" />
            <span className="text-gold font-black uppercase tracking-[0.6em] text-[11px] leading-none">Institutional Records</span>
          </div>
          <h1 className="text-6xl lg:text-9xl font-serif text-white tracking-tight leading-[0.9] mb-12 italic">
            {title}.
          </h1>
        </div>
      </section>

      {/* 2. CORE CONTENT AREA */}
      <main className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-8 lg:px-12">
          {/* Dynamic Content - styled with Tailwind Typography Premium */}
          <article 
            className="prose prose-lg prose-slate max-w-none 
              prose-headings:font-serif prose-headings:italic prose-headings:text-navy prose-headings:mb-12
              prose-p:text-navy/70 prose-p:leading-relaxed prose-p:font-light prose-p:text-xl prose-p:mb-10
              prose-li:text-navy/70 prose-li:text-lg
              prose-strong:text-navy prose-strong:font-black
              prose-a:text-gold prose-a:no-underline hover:prose-a:border-b-2 hover:prose-a:border-gold transition-all
              border-b border-zinc-100 pb-24"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          
          {/* Internal Footer for Document Integrity */}
          <div className="mt-12 flex items-center justify-between">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/20">
                Official Fiduciary Release — PSB (2011 — 2026)
             </p>
             <div className="flex items-center gap-6 text-[9px] font-black uppercase tracking-[0.4em] text-navy/20">
                <span>Infrastructure: CipherNex</span>
                <span className="w-2 h-2 rounded-full bg-gold" />
             </div>
          </div>
        </div>
      </main>

      {/* Disclosure Strip */}
      <section className="bg-zinc-50 py-16 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-8 lg:px-12 text-center lg:text-left">
           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/30 leading-relaxed italic">
             This document is protected under high-security institutional protocols. 
             Unauthorized duplication or forensic extraction is strictly prohibited within the PFGD framework.
           </p>
        </div>
      </section>
    </div>
  );
}
