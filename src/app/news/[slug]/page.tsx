import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";

const newsDatabase = {
  "compliance-audit-2026": {
    date: "April 06, 2026",
    category: "Global Compliance Success",
    title: "Pacific Settlement Bank Successfully Completes Annual Tier-1 AML/KYC Audit",
    image: "/images/news/compliance.png",
    location: "Majuro",
    division: "Compliance Division",
    body: `By: Compliance Division, Majuro, 6 April 2026 – PSB is proud to announce the successful completion of its comprehensive annual audit conducted by a leading global oversight group. The audit confirms that the bank’s internal protocols for anti-money laundering (AML) and counter-terrorism financing (CTF) exceed the current international standards set by the Financial Action Task Force (FATF). This certification reinforces PSB’s position as a trusted partner for global correspondent banks and institutional investors within the PFRC jurisdiction.`
  },
  "blue-carbon-bond-2026": {
    date: "March 25, 2026",
    category: "ESG & Blue Finance",
    title: "PSB Oversubscribes $3.5B Sovereign Blue Carbon Bond Series",
    image: "/images/news/blue-finance.png",
    location: "Koror",
    division: "Institutional Wealth Division",
    body: `By: Institutional Wealth Division, Koror, 25 March 2026 – PSB is pleased to announce the successful closing of its latest Blue Carbon Bond issuance. Originally targeted at $2.1B, the offering was oversubscribed by 65%, reaching a final volume of $3.5B. The proceeds are strictly earmarked for the Pacific Marine Conservation Fund, supporting reef restoration and sustainable maritime infrastructure in Palau and the Marshall Islands. Institutional investors cited the bond's tax-neutral yield and its verification via the Pacific Ledger as key factors in the high demand.`
  },
  "quantum-shield-board": {
    date: "March 15, 2026",
    category: "Digital Infrastructure",
    title: "Dame Margaret Pryce Joins PSB Board to Lead 'Quantum Shield' Initiative",
    image: "/images/news/quantum.png",
    location: "London / Majuro",
    division: "Executive Board",
    body: `By: Executive Board, London/Majuro, 15 March 2026 – Former UK Cybersecurity Commissioner, Dame Margaret Pryce, has officially joined the Non-Executive Board of Pacific Settlement Bank. Dame Margaret will oversee the "Quantum Shield" project—a strategic initiative to upgrade PSB’s institutional vaults to post-quantum cryptographic standards. Her appointment reinforces PSB's commitment to staying ahead of the global cryptographic arms race, ensuring client assets remain impenetrable to future decryption technologies.`
  }
};

export default async function NewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = newsDatabase[slug as keyof typeof newsDatabase];

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 1. ARTICLE HEADER - Institutional Blue */}
      <header className="bg-navy pt-64 lg:pt-96 pb-32 relative overflow-hidden">
        {/* Background logo removed to match standard institutional inner pages and improve readability */}
        
        <div className="relative z-10 mx-auto max-w-5xl px-8 lg:px-12">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Media' },
              { label: 'News' },
              { label: article.title }
            ]} 
          />
          <Link 
            href="/news" 
            className="text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-16 inline-block hover:opacity-70 transition-opacity"
          >
            ← Back to News Archive
          </Link>
          
          <div className="flex items-center gap-6 mb-12">
            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">{article.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-[10px] font-black text-gold uppercase tracking-[0.4em]">{article.category}</span>
          </div>

          <h1 className="font-serif text-5xl lg:text-7xl text-white leading-tight mb-8">
            {article.title}
          </h1>
          
          <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">
             Official Circular Reference: {slug.toUpperCase()} / 001
          </p>
        </div>
      </header>

      {/* 2. MAIN DOCUMENT GRID */}
      <main className="py-24 lg:py-48 max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Metadata Sidebar */}
          <aside className="lg:col-span-3 border-t-2 border-zinc-100 pt-12">
            <div className="space-y-12">
              <div>
                 <h4 className="text-[10px] font-black uppercase tracking-widest text-navy/30 mb-4">Origin</h4>
                 <p className="font-serif text-xl text-navy italic">{article.division}</p>
                 <p className="text-sm text-navy/40 font-light mt-2">{article.location}</p>
              </div>
              
              <div>
                 <h4 className="text-[10px] font-black uppercase tracking-widest text-navy/30 mb-4">Status</h4>
                 <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-navy">Verified Record</span>
                 </div>
              </div>

              <div className="pt-12 border-t border-zinc-100">
                 <img src="/assets/kit/marks/psb-mark-white.svg" alt="Institutional Seal" className="w-16 h-16 grayscale opacity-10" />
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-9">
            <div className="mb-24 aspect-video overflow-hidden border border-zinc-100">
               <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>

            <div className="max-w-3xl">
               <div className="font-serif text-2xl lg:text-3xl text-navy leading-relaxed font-light first-letter:text-7xl first-letter:font-serif first-letter:text-gold first-letter:mr-6 first-letter:float-left first-letter:leading-[0.8] whitespace-pre-line">
                 {article.body}
               </div>

               <div className="mt-32 pt-20 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-start gap-12">
                  <div className="flex flex-col gap-4">
                     <p className="text-[10px] font-black uppercase tracking-widest text-navy/20">Authorized by</p>
                     <p className="font-serif text-xl italic text-navy/60 leading-tight">Board of Directors <br />Office of the Fiduciary</p>
                  </div>
                  
                  <div className="flex gap-4">
                     <button className="px-8 py-3 border border-zinc-100 text-[9px] font-black uppercase tracking-widest text-navy hover:bg-zinc-50 transition-all">
                        Download PDF
                     </button>
                     <button className="px-8 py-3 bg-navy text-white text-[9px] font-black uppercase tracking-widest hover:bg-gold hover:text-navy transition-all">
                        Share Circular
                     </button>
                  </div>
               </div>
            </div>
          </article>

        </div>
      </main>
    </div>
  );
}
