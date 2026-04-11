import Link from "next/link";

const links = [
  {
    icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeWidth={1.2} /></svg>,
    title: 'Licensing',
    desc: 'Institutional Tier-1 authorization framework.',
    href: '/licensing'
  },
  {
    icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeWidth={1.2} /></svg>,
    title: 'Monetary Policy',
    desc: 'Official mandates for currency and liquidity stability.',
    href: '/monetary-policy'
  },
  {
    icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeWidth={1.2} /></svg>,
    title: 'Regulations',
    desc: 'Sovereign framework acts and fiduciary circulars.',
    href: '/regulations'
  },
  {
    icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 01-2 2h22a2 2 0 01-2-2v-3a2 2 0 00-2-2h-3a2 2 0 00-2 2v3M9 19h6m-6 0l6-6m0 6V10a2 2 0 012-2h2a2 2 0 012 2v9m-6 0h6" strokeWidth={1.2} /></svg>,
    title: 'Monetary Statistics',
    desc: 'Live operational highlights and regional audit records.',
    href: '/monetary-statistics'
  },
  {
    icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeWidth={1.2} /></svg>,
    title: 'Partner Banks',
    desc: 'Verified list of primary settlement participants.',
    href: '/list-of-partner-banks'
  },
  {
    icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth={1.2} /></svg>,
    title: 'Forex Bureaus',
    desc: 'Authorized digital and physical currency exchange nodes.',
    href: '/list-of-forex-bureaus'
  }
];

export default function QuickLinks() {
  return (
    <section className="py-24 lg:py-48 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl border-l-4 border-gold pl-12">
            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-navy/30 mb-8">Navigation</h2>
            <h4 className="font-serif text-5xl lg:text-7xl text-navy leading-tight italic">Quick Links</h4>
            <p className="text-xl text-navy/40 font-light leading-relaxed mt-10 max-w-xl">
              Direct access to the primary institutional frameworks and regulatory registries of the bank.
            </p>
          </div>
          <div className="hidden lg:block text-right">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/20 mb-4 items-center flex gap-4 justify-end">
              <span>Fiduciary Bridge Active</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            </div>
            <div className="h-[0.5px] w-48 bg-gold/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-100">
          {links.map((slot, i) => (
            <Link
              key={i}
              href={slot.href}
              className="group p-12 lg:p-16 border-r border-b border-zinc-100 bg-white hover:bg-zinc-50 transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

              <div className="flex flex-col h-full space-y-12">
                <div className="flex justify-between items-start">
                  <span className="text-gold transition-colors duration-700">
                    {slot.icon}
                  </span>
                  <svg className="w-5 h-5 text-navy/10 group-hover:text-gold transition-colors duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div>
                  <h4 className="font-serif text-3xl lg:text-4xl text-navy group-hover:text-gold transition-colors duration-700 mb-6">
                    {slot.title}
                  </h4>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-[240px]">
                    {slot.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
