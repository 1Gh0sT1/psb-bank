'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Director, directors } from '@/data/directors';

// портал только для модалки
const ClientPortal = ({
  children,
  show,
}: {
  children: React.ReactNode;
  show: boolean;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && show ? createPortal(children, document.body) : null;
};

export default function BoardOfDirectorsContent() {
  const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedDirector(null);
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const sections = [
    { key: 'European', title: 'I. The European & North American Bloc (Institutional Weight)' },
    { key: 'Asian', title: 'II. The Asian & Middle Eastern Bloc (Liquidity & Wealth)' },
    { key: 'Pacific', title: 'III. The Pacific & Oceanic Bloc (Regional Sovereignty)' },
    { key: 'Emerging', title: 'IV. The Emerging Markets & ESG Bloc (Growth & Future)' },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-gold/40 pb-20">
      <header className="relative overflow-hidden border-b-8 border-gold bg-navy px-4 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36 md:px-12 lg:px-24 lg:pb-24 lg:pt-44">
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/3 translate-x-1/3 rounded-full bg-gold/5 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[260px] w-[260px] -translate-x-1/3 translate-y-1/3 rounded-full bg-gold/5 blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Corporate Governance' },
              { label: 'Board of Directors' },
            ]}
          />

          <div className="mb-10 mt-6 flex flex-wrap items-center gap-4 border-l-2 border-gold/40 px-3 py-2 sm:mb-12 sm:gap-6">
            <img
              src="/assets/kit/marks/psb-mark-white.svg"
              alt="PSB"
              className="h-8 w-auto sm:h-10"
            />
            <div className="hidden h-8 w-px bg-gold/20 sm:block" />
            <span className="text-[10px] font-black uppercase leading-none tracking-[0.35em] text-gold sm:text-[11px] sm:tracking-[0.55em]">
              Supreme Governing Body
            </span>
          </div>

          <h1 className="mb-10 text-4xl leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[8rem]">
            <span className="font-serif italic">Governance</span>
            <br />
            <span className="font-serif italic">Records.</span>
          </h1>

          <div className="mt-8 max-w-3xl border border-white/10 border-l-[10px] border-l-gold bg-white/5 px-5 py-6 shadow-2xl backdrop-blur-xl sm:px-8 sm:py-8">
            <p className="font-serif text-lg italic leading-relaxed text-white/85 sm:text-2xl">
              According to Article 14 (b) of the PSB Charter, the Board of Directors serves as the supreme governing and fiduciary body of the institution.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-[1500px] flex-col gap-16 px-4 py-16 sm:px-6 sm:py-20 md:px-10 lg:gap-24 lg:py-24">
        {sections.map((section, idx) => {
          const members = directors.filter((director) => director.bloc === section.key);

          if (members.length === 0) {
            return null;
          }

          return (
            <section key={section.key} className="block w-full">
              <div className="mb-10 flex flex-col gap-4 border-b-2 border-zinc-100 pb-8 md:mb-14 md:flex-row md:items-end md:justify-between">
                <div className="flex items-end gap-4 sm:gap-8 md:gap-12">
                  <span className="-mb-2 select-none font-serif text-6xl leading-none text-zinc-100 pointer-events-none sm:text-8xl md:text-[10rem]">
                    0{idx + 1}
                  </span>

                  <div className="space-y-3">
                    <h2 className="font-serif text-2xl italic leading-tight text-navy sm:text-3xl md:text-4xl">
                      {section.title}
                    </h2>
                    <div className="h-1.5 w-24 bg-gold sm:w-32" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {members.map((member) => (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => setSelectedDirector(member)}
                    className="group relative isolate aspect-[3/4] w-full overflow-hidden border border-zinc-200 bg-zinc-100 text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="absolute inset-0 overflow-hidden bg-zinc-200">
                      <img
                        src={`/images/team/${member.id}.png`}
                        alt={member.name}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6 lg:p-7">
                      <div className="flex min-h-[138px] flex-col justify-end gap-3 sm:min-h-[152px]">
                        <div className="max-w-[92%] transition-transform duration-500 ease-out group-hover:-translate-y-8">
                          <h3 className="director-name text-base font-bold leading-tight text-white drop-shadow-2xl sm:text-[18px]">
                            {member.name}
                          </h3>

                          <p className="director-title mt-2 text-[11px] font-semibold uppercase leading-snug tracking-[0.12em] text-white/95 sm:text-xs">
                            {member.title}
                          </p>
                        </div>

                        <div className="translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                          <span className="inline-flex items-center justify-center bg-gold px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.32em] text-navy shadow-xl sm:px-7">
                            View
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      <ClientPortal show={selectedDirector !== null}>
        <AnimatePresence>
          {selectedDirector && (
            <div className="pointer-events-none fixed inset-0 z-[9999] overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-navy/72"
              />

              <div className="flex min-h-[100dvh] items-start justify-center p-3 sm:p-4 md:items-center md:p-8">
                <motion.div
                  key={selectedDirector.id}
                  role="dialog"
                  aria-modal="true"
                  initial={{ opacity: 0, scale: 0.96, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 20 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="pointer-events-auto relative isolate my-6 flex w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-[0_40px_120px_rgba(0,0,0,0.45)] ring-1 ring-black/10 md:my-0 md:max-h-[90vh] md:flex-row"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDirector(null)}
                    className="absolute right-4 top-4 z-30 rounded-full border border-zinc-200 bg-white p-3 text-navy shadow-xl transition-all hover:bg-gold sm:right-5 sm:top-5"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>

                  <div className="relative h-[260px] w-full shrink-0 overflow-hidden bg-zinc-100 sm:h-[340px] md:h-auto md:w-[44%] lg:w-[48%]">
                    <img
                      src={`/images/team/${selectedDirector.id}.png`}
                      alt={selectedDirector.name}
                      className="h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent md:hidden" />
                  </div>

                  <div className="flex-1 overflow-y-auto bg-white p-5 sm:p-8 lg:p-12 xl:p-16">
                    <div className="space-y-8 sm:space-y-10">
                      <header>
                        <div className="mb-4 flex items-center gap-3">
                          <div className="h-[2px] w-10 bg-gold sm:w-12" />
                          <span className="text-[9px] font-black uppercase tracking-[0.35em] text-gold">
                            Corporate Governance
                          </span>
                        </div>

                        <h2 className="mb-6 font-serif text-3xl font-bold italic leading-tight text-navy sm:text-5xl lg:text-6xl">
                          {selectedDirector.name}
                        </h2>

                        <div className="border-l-[6px] border-gold bg-zinc-50 px-4 py-4 sm:px-6">
                          <p className="font-serif text-lg italic leading-tight text-navy/85 sm:text-2xl">
                            {selectedDirector.title}
                          </p>
                        </div>
                      </header>

                      <div className="space-y-6 sm:space-y-8">
                        {selectedDirector.bio.map((paragraph, index) => (
                          <p
                            key={index}
                            className="border-b border-zinc-100 pb-6 font-serif text-base italic leading-relaxed text-navy/70 last:border-0 sm:text-xl"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <div className="mt-10 border-t border-gold/10 pt-8 opacity-50">
                        <p className="text-[10px] font-black uppercase leading-loose tracking-[0.4em] text-navy">
                          Security Classification: PSB-PFRC-LEVEL-ALPHA | DO NOT REPLICATE | FOR FORENSIC REVIEW ONLY
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </ClientPortal>
    </div>
  );
}
