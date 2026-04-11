import Link from "next/link";

const newsItems = [
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

export default function NewsSection() {
  return (
    <section className="bg-navy py-48 lg:py-72 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.02] pointer-events-none z-0 overflow-hidden translate-x-1/4 -translate-y-1/4">
        <img src="/assets/kit/marks/psb-mark-white.svg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
        <div className="mb-32 flex flex-col lg:flex-row lg:items-end justify-between items-start gap-12 border-b border-white/10 pb-20">
          <div>
            <h3 className="font-serif text-4xl lg:text-9xl text-white italic tracking-tight">Recent news</h3>
            <p className="text-lg lg:text-xl text-white/30 font-light mt-10 max-w-xl italic">
              Official institutional releases, regulatory updates and strategic announcements from the bank board.
            </p>
          </div>
          <Link href="/news" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-gold transition-colors pb-4 border-b border-white/10">
            Archive Access →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
          {newsItems.map((item, i) => (
            <Link key={i} href={`/news/${item.slug}`} className="group relative flex flex-col bg-white/[0.02] border border-white/5 p-8 lg:p-10 hover:bg-white/[0.04] hover:border-gold/20 transition-all duration-700">
              <div className="relative aspect-[16/10] mb-10 overflow-hidden bg-white/5 shadow-2xl">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <div className="bg-gold/80 backdrop-blur text-navy text-[7px] font-black uppercase tracking-widest px-2 py-0.5">
                    Archive Rec_{i + 1}
                  </div>
                </div>
              </div>

              <div className="space-y-6 flex flex-col h-full">
                <div className="flex items-center gap-4">
                  <span className="text-[8px] font-black text-gold uppercase tracking-[0.2em]">{item.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/10" />
                  <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.2em]">{item.category}</span>
                </div>

                <h4 className="font-serif text-2xl text-white group-hover:text-gold transition-colors duration-500 leading-tight">
                  {item.title}
                </h4>

                <p className="text-xs text-white/30 font-light leading-relaxed line-clamp-2 italic">
                  {item.excerpt}
                </p>

                <div className="mt-auto pt-8 flex items-center gap-4 text-[8px] font-black uppercase tracking-[0.4em] text-white/20 group-hover:text-gold transition-all">
                  Access Official Record
                  <span className="transition-transform group-hover:translate-x-4">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
