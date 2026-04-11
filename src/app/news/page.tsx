'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";

const newsArchive = [
  {
    slug: "compliance-audit-2026",
    date: "April 06, 2026",
    category: "Global Compliance Success",
    title: "PSB Successfully Completes Annual Tier-1 AML/KYC Audit",
    excerpt: "The audit confirms that the bank’s internal protocols for anti-money laundering exceed current international standards.",
    image: "/images/news/compliance.png"
  },
  {
    slug: "blue-carbon-bond-2026",
    date: "March 25, 2026",
    category: "ESG & Blue Finance",
    title: "PSB Oversubscribes $3.5B Sovereign Blue Carbon Bond Series",
    excerpt: "The offering was oversubscribed by 65%, with proceeds earmarked for the Pacific Marine Conservation Fund.",
    image: "/images/news/blue-finance.png"
  },
  {
    slug: "quantum-shield-board",
    date: "March 15, 2026",
    category: "Digital Infrastructure",
    title: "Dame Margaret Pryce Joins PSB Board to Lead 'Quantum Shield' Initiative",
    excerpt: "The initiative focuses on upgrading institutional vaults to post-quantum cryptographic standards.",
    image: "/images/news/quantum.png"
  }
];

export default function NewsArchive() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO - Institutional Gazette */}
      <section className="relative overflow-hidden bg-navy pt-64 lg:pt-96 pb-32">
        {/* Background logo removed to match standard institutional inner pages and improve readability */}
        
        <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-12">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Media' }, { label: 'News' }]} />
          
          <div className="mt-16 border-l-4 border-gold pl-10">
            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-gold mb-8 italic">Public Record</h2>
            <h1 className="font-serif text-6xl lg:text-9xl text-white tracking-tight leading-none">
              Institutional <br />News Archive.
            </h1>
            <p className="text-xl text-white/30 font-light mt-12 max-w-2xl italic leading-relaxed">
              Complete chronological record of official circulars, regulatory announcements, and strategic dispatches from the bank board.
            </p>
          </div>
        </div>
      </section>

      {/* 2. NEWS GRID - Forensic Layout */}
      <main className="py-24 lg:py-48 max-w-7xl mx-auto px-8 lg:px-12">
        <div className="mb-20 flex items-center justify-between border-b border-zinc-100 pb-10">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-navy">All Releases</span>
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-[10px] font-black uppercase tracking-widest text-navy/20">2026 Season</span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/20">Record Count: {newsArchive.length}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-zinc-100 border border-zinc-100 overflow-hidden">
          {newsArchive.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group bg-white p-10 lg:p-12 hover:bg-zinc-50 transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              
              <Link href={`/news/${item.slug}`} className="block">
                <div className="relative aspect-[16/10] mb-12 overflow-hidden border border-zinc-100 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={item.image} 
                    alt="" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] font-black text-gold uppercase tracking-[0.2em]">{item.date}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-200" />
                    <span className="text-[9px] font-black text-navy/30 uppercase tracking-[0.2em]">{item.category}</span>
                  </div>
                  
                  <h4 className="font-serif text-3xl text-navy group-hover:text-gold transition-colors duration-500 leading-tight italic">
                    {item.title}
                  </h4>
                  
                  <p className="text-sm text-navy/40 font-light leading-relaxed line-clamp-3 italic">
                    {item.excerpt}
                  </p>
                  
                  <div className="pt-8 flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.4em] text-navy/30 group-hover:text-gold transition-all">
                    View Verified Record
                    <span className="transition-transform group-hover:translate-x-4">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 3. PAGINATION PLACEHOLDER - For Archive Scalability */}
        <div className="mt-24 pt-12 border-t border-zinc-100 flex flex-col items-center">
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/20 mb-8 italic italic">End of Current Ledger</p>
           <div className="h-[0.5px] w-24 bg-gold/30" />
        </div>
      </main>
    </div>
  );
}
