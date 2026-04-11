'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Useful Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About PSB', href: '/about-pacific-settlement-bank' },
        { name: 'Board of Directors', href: '/board-of-directors' },
        { name: 'News', href: '/news' },
      ]
    },
    {
      title: 'Quick Links',
      links: [
        { name: 'Exchange Rates', href: '/exchange-rates' },
        { name: 'FX Auction', href: '/fx-auction' },
        { name: 'Treasury Bills', href: '/treasury-bills' },
        { name: 'National Payment System', href: '/national-payment-system' },
        { name: 'Partner Banks', href: '/list-of-partner-banks' },
        { name: 'Forex Bureaus', href: '/list-of-forex-bureaus' },
        { name: 'Licensing', href: '/licensing' },
      ]
    }
  ];

  return (
    <footer className="bg-navy pt-16 pb-8 text-white border-t border-gold/10 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        {/* Main Header Logic - Minimalist Row */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start pb-12 border-b border-white/5">
          {/* Logo Column */}
          <div className="lg:w-1/4 flex-shrink-0 relative z-10">
              <Link href="/" className="inline-block group">
                <img 
                  src="/assets/kit/marks/psb-mark-white.svg" 
                  alt="PSB" 
                  className="h-20 w-auto opacity-40 group-hover:opacity-80 transition-all duration-700" 
                />
              </Link>
          </div>

          {/* Nav & Info Columns */}
          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-8 text-[10px] font-black uppercase tracking-[0.5em] text-gold">{section.title}</h3>
                <ul className="space-y-4 text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover:text-gold transition-colors block">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="mb-8 text-[10px] font-black uppercase tracking-[0.5em] text-gold">Global Headquarters & Private Banking</h3>
              <div className="space-y-4 text-[10px] uppercase tracking-[0.1em] text-white/40 leading-relaxed italic">
                <p><span className="text-white/20 block text-[8px] mb-1">SNPF Building (Samoa National Provident Fund)</span> Level 4, SNPF Building, Beach Road, Apia, Samoa.</p>
                <p><span className="text-white/20 block text-[8px] mb-1">Institutional Line</span> +1 345 949 6754</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Spread to edges, clearly white/60 */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-[9px] font-black uppercase tracking-[0.35em] text-white/60 w-full">
           <p>© {currentYear} PACIFIC SETTLEMENT BANK. ABSOLUTE NEUTRALITY OBSERVED.</p>
           <p className="mt-4 md:mt-0">Infrastructure by <Link href="/" className="text-white hover:text-gold transition-colors">CipherNex Technologies</Link></p>
        </div>
      </div>
    </footer>
  );
}
