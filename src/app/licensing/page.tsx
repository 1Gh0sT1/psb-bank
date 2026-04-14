'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

import { licensingCategories, Requirement } from '@/data/licensing';

const RegulatoryAccordion = ({ 
  title, 
  description, 
  preface,
  requirements,
  notes
}: { 
  title: string; 
  description: string; 
  preface?: string;
  requirements: Requirement[];
  notes?: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-zinc-200 bg-white overflow-hidden mb-6 transition-all hover:border-gold/30">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-8 lg:p-10 flex justify-between items-start lg:items-center focus:outline-none"
      >
        <div className="pr-8">
          <h3 className="text-xl font-serif text-navy mb-2">{title}</h3>
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0 mt-2 lg:mt-0 text-gold font-mono text-xl">
          {isOpen ? '—' : '+'}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="p-8 lg:p-10 border-t border-zinc-100 bg-zinc-50/50">
              <div className="mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/40">Statutory Requirements Checklist</span>
              </div>
              
              {preface && (
                <div className="mb-8 pb-8 border-b border-zinc-200/50">
                  <p className="text-sm font-medium text-navy/80 leading-relaxed">
                    {preface}
                  </p>
                </div>
              )}

              <ul className="space-y-8">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-6 border-b border-zinc-200/50 pb-6 last:border-0 last:pb-0">
                    <span className="text-xs font-mono text-gold pt-0.5">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <div className="w-full">
                      <p className="text-sm font-medium text-navy/80 leading-relaxed mb-2">
                        {req.text}
                      </p>
                      {req.subItems && (
                        <ul className="mt-6 space-y-5 pl-4 border-l border-gold/20">
                          {req.subItems.map((subItem, subIndex) => (
                            <li key={subIndex} className="flex items-start gap-4">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold/40 mt-1.5 flex-shrink-0" />
                              <span className="text-[13px] font-light text-navy/60 leading-relaxed">
                                {subItem}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {notes && notes.length > 0 && (
                <div className="mt-8 pt-8 border-t border-zinc-200/50">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gold mb-4 block">Important Notice</span>
                  <div className="space-y-4">
                    {notes.map((note, idx) => (
                      <p key={idx} className="text-xs font-light text-navy/60 leading-relaxed italic border-l-2 border-gold/30 pl-4">
                        {note}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function LicensingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Page Intro / Authority Hero - Elite "Old Money" Style */}
      <section className="pt-64 lg:pt-96 pb-20 border-b border-white/5 bg-navy relative overflow-hidden bg-gradient-to-br from-navy via-[#01060F] to-navy">
        {/* Ambient Gold Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.02] pointer-events-none z-0">
          <img src="/assets/kit/marks/psb-mark-white.svg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Central Banking' },
              { label: 'Licensing' }
            ]} 
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 border-l border-gold/50 pl-10 md:pl-16">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gold/60 mb-8">
                Institutional Publications
              </p>
              <h1 className="text-5xl lg:text-8xl font-serif text-white tracking-tight mb-8">
                Licensing &<br />Authorisation
              </h1>
              <p className="text-sm font-mono text-white/40 uppercase tracking-widest max-w-lg leading-loose mb-10">
                Regulatory Requirements & Institutional Framework for establishing banking and trust entities within the jurisdiction.
              </p>
              <a 
                href="/assets/documents/banking-licensing-policy.pdf" 
                target="_blank"
                className="inline-flex items-center gap-4 px-8 py-4 bg-gold text-navy text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all shadow-2xl"
              >
                Download Full Policy (PDF)
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
            
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl border border-white/10 p-10 lg:p-12 relative overflow-hidden group hover:border-gold/30 transition-all">
               {/* Pattern overlay */}
               <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
               <div className="relative z-10">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-6 border-b border-white/10 pb-6">
                    Supervisory Mandate
                  </h3>
                  <p className="text-xs font-light leading-relaxed text-white/70 mb-6 italic">
                    "All applications for licensing under the Bank and Trust Companies Act must adhere strictly to the established governance protocol. The authorization framework ensures absolute systemic stability." 
                  </p>
                  <p className="text-[10px] font-mono text-gold/60 leading-loose flex flex-col gap-2">
                    <span>PROCESSING TIMELINE: 6-8 WEEKS</span>
                    <span>AUTHORITY REVIEW: MANDATORY</span>
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>



      {/* 3. Licence Categories & Checklists */}
      <section className="py-24 lg:py-40 bg-zinc-50 relative">
        <div className="mx-auto max-w-4xl px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/40 mb-4 border-l-2 border-gold pl-4">
              Licence Classifications
            </h2>
            <h3 className="text-3xl font-serif text-navy">
              Regulatory Requirements by Entity Class
            </h3>
          </div>

          <div className="space-y-4">
            {licensingCategories.map((category) => (
              <RegulatoryAccordion 
                key={category.id}
                title={category.title}
                description={category.description}
                preface={category.preface}
                requirements={category.requirements}
                notes={category.notes}
              />
            ))}
          </div>
        </div>
      </section>



      {/* 5. Institutional Notices */}
      <section className="bg-navy py-12 border-t border-gold/10">
        <div className="mx-auto max-w-7xl px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="max-w-2xl">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-3">Compliance Notice</h4>
              <p className="text-xs font-light leading-relaxed text-white/50">
                 All statutory documentation must be submitted through authorized compliance officers. For specific institutional inquiries regarding the application framework, correspond via encrypted compliance channels: <a href="mailto:info@pacificperf.com" className="text-white hover:text-gold transition-colors">info@pacificperf.com</a>.
              </p>
           </div>
           
           <Link href="/regulatory-oversight" className="text-[10px] font-black uppercase tracking-[0.3em] text-white border border-white/20 px-8 py-4 hover:bg-white hover:text-navy transition-all flex-shrink-0">
             Review Oversight Policy
           </Link>
        </div>
      </section>
    </div>
  );
}
