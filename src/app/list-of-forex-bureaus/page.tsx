import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/Breadcrumbs';
import { pb, BrokerRecord } from '@/lib/pb';
import RegistryGrid from '@/components/RegistryGrid';

export const revalidate = 60;

export default async function ForexBrokersPage() {
  let brokers: BrokerRecord[] = [];
  let dbError = false;

  try {
    const records = await pb.collection('brokers').getFullList({
      sort: 'name',
    });
    
    brokers = records.map(r => ({
      id: r.id,
      name: r.name,
      country: r.country_of_origin,
      status: r.status,
      license_authority: r.license_authority,
      license_expiry: r.license_expiry
    }));
  } catch (err) {
    console.warn("PocketBase collection 'brokers' not found or server offline.");
    dbError = true;
  }

  const columns = [
    { key: 'name', label: 'Authorized Broker' },
    { key: 'country', label: 'Jurisdiction' },
    { key: 'license_authority', label: 'Licensing Body', type: 'mono' as const },
    { key: 'license_expiry', label: 'Expiry Date', type: 'mono' as const },
    { key: 'status', label: 'Verification', type: 'status' as const },
  ];

  return (
    <div className="bg-white min-h-screen text-navy font-sans antialiased overflow-x-hidden">
      {/* 1. PUBLIC REGISTRY HEADER - Elite "Old Money" Style */}
      <section className="pt-64 lg:pt-96 pb-20 border-b border-white/5 bg-navy relative overflow-hidden bg-gradient-to-br from-navy via-[#01060F] to-navy">
        {/* Ambient Gold Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        {/* Background Logo Pattern */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.02] pointer-events-none z-0">
          <img src="/assets/kit/marks/psb-mark-white.svg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
          <Breadcrumbs 
            items={[
              { label: 'Banking & Markets' },
              { label: 'Forex Bureaus' }
            ]} 
          />

          <div className="grid lg:grid-cols-12 gap-12 items-end">
             <div className="lg:col-span-8 border-l border-gold/50 pl-8 md:pl-12">
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gold/60 mb-6 block">
                  Official Record // 2026-FX
               </span>
               <h1 className="font-serif text-5xl lg:text-8xl text-white mb-8 leading-tight tracking-tight">
                 Affiliated Brokers
               </h1>
               <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed italic max-w-3xl">
                 Licensed partners for tax-neutral FX & Crypto trading authorized under the Pacific Ledger settlement framework.
               </p>
             </div>

             <div className="lg:col-span-4 lg:pl-12 lg:border-l border-white/10">
                <div className="space-y-8">
                   <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 mb-2">Active Licenses</p>
                      <p className="text-4xl font-mono text-white tracking-tighter">{brokers.length}</p>
                   </div>
                   <div className="w-12 h-[1px] bg-gold/20" />
                   <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 mb-2">District Authorization</p>
                      <p className="text-sm font-black text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                         Certified
                      </p>
                   </div>
                </div>
             </div>
          </div>

          {dbError && (
             <div className="mt-12 flex items-start gap-4 p-6 border-l-2 border-red-500 bg-red-50 rounded-sm">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse mt-1" />
                <div>
                   <p className="text-xs font-black uppercase tracking-widest text-red-700">Real-Time Sync Offline</p>
                   <p className="text-xs text-red-600/70 mt-1 italic">The registry is currently operating in restricted view. Verification standing may not reflect immediate status changes.</p>
                </div>
             </div>
          )}
        </div>
      </section>

      {/* 2. REGISTRY TABLE */}
      <main className="pb-24 lg:pb-32 bg-zinc-50/30">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 -mt-10 relative z-20">
          <RegistryGrid 
            initialData={brokers} 
            columns={columns} 
            searchPlaceholder="Filter Registry by Broker, Jurisdiction or Licensing Authority..."
          />
        </div>
      </main>

      {/* 3. DISCLOSURE FOOTER */}
      <section className="bg-white py-16 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
           <div className="grid md:grid-cols-2 gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-navy/30 leading-relaxed">
              <div>
                 <p className="mb-4 text-gold">Regulatory Compliance Note</p>
                 <p className="italic">
                   This registry is published strictly for institutional transparency. 
                   Inclusion does not constitute a trading endorsement from Pacific Settlement Bank.
                 </p>
              </div>
              <div className="md:text-right">
                 <p className="italic">
                    Verification of regulatory standing must be performed per District Fiduciary Protocols (2011/A). <br />
                    Access unauthorized for automated scraping systems.
                 </p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
