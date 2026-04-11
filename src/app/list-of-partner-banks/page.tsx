import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/Breadcrumbs';
import { pb, BankRecord } from '@/lib/pb';
import RegistryGrid from '@/components/RegistryGrid';

export const revalidate = 60;

export default async function PartnerBanksPage() {
  let banks: BankRecord[] = [];
  let dbError = false;

  try {
    const records = await pb.collection('banks').getFullList({
      sort: 'name',
    });
    
    banks = records.map(r => ({
      id: r.id,
      name: r.name,
      country: r.country_of_origin,
      status: r.status,
      start_of_operations: r.start_of_operations
    }));
  } catch (err) {
    console.warn("PocketBase collection 'banks' not found or server offline.");
    dbError = true;
  }

  const columns = [
    { key: 'name', label: 'Institution Name' },
    { key: 'country', label: 'Country of Origin' },
    { key: 'start_of_operations', label: 'Authorized Start', type: 'mono' as const },
    { key: 'status', label: 'District Status', type: 'status' as const },
  ];

  return (
    <div className="bg-white min-h-screen text-navy font-sans antialiased overflow-x-hidden">
      {/* 1. PUBLIC REGISTRY HEADER - Elite "Old Money" Style */}
      <section className="pt-64 lg:pt-96 pb-20 border-b border-white/5 bg-navy relative overflow-hidden bg-gradient-to-br from-navy via-[#01060F] to-navy">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.02] pointer-events-none z-0">
          <img src="/assets/kit/marks/psb-mark-white.svg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
          <Breadcrumbs 
            items={[
              { label: 'Banking & Markets' },
              { label: 'Partner Banks' }
            ]} 
          />

          <div className="grid lg:grid-cols-12 gap-12 items-end">
             <div className="lg:col-span-8 border-l border-gold/50 pl-8 md:pl-12">
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gold/60 mb-6 block">
                  Official Record // 2026-PFGD
               </span>
               <h1 className="font-serif text-5xl lg:text-8xl text-white mb-8 leading-tight tracking-tight">
                 Partner Banks
               </h1>
               <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed italic max-w-3xl">
                 Institutional directory of verified clearing participants and strategic banking partners operating within the PSB settlement framework.
               </p>
             </div>

             <div className="lg:col-span-4 lg:pl-12 lg:border-l border-white/10">
                <div className="space-y-8">
                   <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 mb-2">Verified Institutions</p>
                      <p className="text-4xl font-mono text-white tracking-tighter">{banks.length}</p>
                   </div>
                   <div className="w-12 h-[1px] bg-gold/20" />
                   <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 mb-2">Registry Integrity</p>
                      <p className="text-sm font-black text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                         Verified Active
                      </p>
                   </div>
                </div>
             </div>
          </div>

          {dbError && (
             <div className="mt-12 flex items-start gap-4 p-6 border-l-2 border-red-500 bg-red-50 rounded-sm">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse mt-1" />
                <div>
                   <p className="text-xs font-black uppercase tracking-widest text-red-700">Database Synchronization Halted</p>
                   <p className="text-xs text-red-600/70 mt-1 italic">The registry is currently operating in redundancy mode. Data may not reflect real-time updates.</p>
                </div>
             </div>
          )}
        </div>
      </section>

      {/* 2. REGISTRY TABLE */}
      <main className="pb-24 lg:pb-32 bg-zinc-50/30">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 -mt-10 relative z-20">
          <RegistryGrid 
            initialData={banks} 
            columns={columns} 
            searchPlaceholder="Search Registry by Institution Name or Origin..."
          />
        </div>
      </main>

      {/* 3. DISCLOSURE FOOTER */}
      <section className="bg-white py-16 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
           <div className="grid md:grid-cols-2 gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-navy/30 leading-relaxed">
              <div>
                 <p className="mb-4 text-gold">Sovereign Oversight Notice</p>
                 <p className="italic">
                   All listed institutions are subject to sovereign oversight and strict forensic audits. 
                   Continuous monitoring is enforced by the PFRC (Pacific Financial Regulation Commission).
                 </p>
              </div>
              <div className="md:text-right">
                 <p className="italic">
                    Registry last verified against absolute consensus ledger. <br />
                    Access unauthorized for automated harvesting systems.
                 </p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
