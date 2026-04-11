import Link from "next/link";

export default function GovernanceSection() {
  return (
    <section className="bg-white py-48 border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-32 items-center">
          <div className="w-full lg:w-1/2 aspect-square bg-zinc-50 border border-zinc-100 flex items-center justify-center p-20 grayscale opacity-40 hover:opacity-100 transition-all duration-1000">
            <img src="/assets/kit/marks/psb-mark-blue.svg" alt="Institutional Seal" className="max-w-[240px] h-auto" />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-gold mb-10">Fiduciary Authority</h2>
            <h3 className="font-serif text-6xl text-navy mb-12 italic leading-tight">Institutional <br />Integrity Secured.</h3>
            <p className="text-xl text-navy/40 font-light leading-relaxed mb-10 italic">
              Headquartered at The Leviathan Plaza, Pacific Settlement Bank operates as the central node for institutional capital and forensic transparency across the PFGD jurisdictions.
            </p>
            <Link href="/board-of-directors" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.5em] text-gold group">
              Board of Directors Records
              <span className="ml-6 transition-transform group-hover:translate-x-4">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
